<?php

namespace App\Service\Setting;

use App\Redis\Produk\promoProdukRedis;
use App\Trait\Format;
use Exception;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;

class SettingFindProdukService{

     use Format;
     private static $find;
     private const key = 'find_produk';
     private const typeKeys = 'typed';

     public function __call($name, $arguments)
     {
          array_unshift($arguments, self::$find->{self::key});
          $this->{self::key}  = call_user_func_array($name, $arguments);
          return $this;
     }
     
     public static function set($produk){
          if(!self::$find instanceof self){
               self::$find = new self;
          }
          if($produk instanceof Model){
               self::$find->{self::key} = $produk;
               return self::$find;
          }
          return throw new Exception('Not Support Class');
     }

     public function Auth(Request $request){
          if(Arr::exists($request->all(), 'login')){
               if($request['login']['auth']){
                    $this->{self::key}->users =  $request['login'];
               }
          }
          return $this;
     }

     public function hiddeColumn(array $column){
          $this->{self::key}->makeHidden($column);
          return $this;
     }

     public function filterType(string $key){
          $filter = $this->{self::key}->price->where($key, '!=', NULL)->first();
          unset($this->{self::key}->price);
          $this->{self::key}->price = $filter;
          $this->{self::typeKeys} = true;
          return $this;
     }

     public function imageToFlatten(bool $removeCover){
          $imagesCollection = collect();
          $imagesCollection->push($this->{self::key}->cover);
          if($removeCover) unset($this->{self::key}->cover);
          $this->{self::key}->images->map(function($items) use($imagesCollection){
               $imagesCollection->push($items->path);
          });
          unset(self::$find->{self::key}->images);
          $this->{self::key}->images = $imagesCollection;
          return $this;
     }

     public function promo(){
          if(!is_null($this->{self::key}) && !is_null($this->{self::typeKeys})){
               $this->{self::key}->price->promo = new class($this->{self::key}->price->type){
                    public $options;
                    public function __construct($type)
                    {
                         $this->options = $type;
                    }
               };
          }
          $this->{self::key}->promo = promoProdukRedis::all()->toCollect()->filter(function($items){
               return $items->id_produks === $this->{self::key}->id;
          })->values()->map(function($val){
               $val->exp = now('Asia/Jakarta')->setSeconds($val->expired)->utc();
               unset($val->expired);
               return $val;
          });
          return $this;
     }
     public function more_format(){
           $this->{self::key}->format_stock =  $this->formatNumber($this->{self::key}->stock);
           $this->{self::key}->format_sold  =  $this->formatNumber($this->{self::key}->sold);
           return $this;
     }
     public function format(){
          $format = [];
          $price  = $this->{self::key};
          $priceProduk = $price->price->price;
          $format['price_before_discount']  = $priceProduk;
          $format['format_before_discount'] = $this->formatRp($priceProduk);
          $price->price->price =  $priceProduk - ($priceProduk * ($price->price->type->discount / 100));
          $priceProduk = $price->price->price;
          $format['format_after_discount']  =  $this->formatRp($priceProduk);
          if(!is_null($price->price->promo)) {
               $format['format_promo'] = new class($priceProduk, $price->price->promo->discount){
                    use Format;
                    public $price;
                    public $price_format;
                    public function __construct(int $price, int $discount)
                    {
                         $this->price = $price - ($price * ($discount / 100));
                         $this->price_format = $this->formatRp($this->price);
                    }
               };
          }
          $price->price->format = $format;
          return $this;
     }

     public function get(){
          return $this->{self::key};
     }
}