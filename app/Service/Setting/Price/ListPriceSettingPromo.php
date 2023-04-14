<?php

namespace App\Service\Setting\Price;

use App\Trait\Format;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Collection;

class ListPriceSettingPromo{

     use Format;
     private static $data;
     const keys  = 'items';
     const type  = 'type';
     const promo = 'promo';

     public function __call($name, $arguments)
     {
          array_unshift($arguments, self::$data->{self::keys});
          $this->{self::keys} = call_user_func_array($name, $arguments);
          return $this;
     }

     public static function set(Builder $data, int $limit = 5){
          if(!self::$data instanceof self){
               self::$data = new self;
          }
          self::$data->{self::keys} = $data->limit($limit)->chunkMap(function($items){
               return $items;
          });
          return self::$data;
     }

     public function type(string $setting){
          self::$data->{self::type} = $setting;
          $this->{self::keys} = $this->{self::keys}->map(function($items) use($setting){
               $pricingFilter = $items->price->where($setting, '!=', null)->first();
               unset($items->price);
               $items->price = $pricingFilter;
               return $items;
          });
          return $this;
     }

     public function promo(array $options = []){
          if(!is_null($this->{self::keys})){
               $this->{self::keys} =  $this->{self::keys}->map(function($items){
                    $items->price->promo = new class($items->price->{$this->{self::type}}){
                         public $options;
                         public function __construct($type)
                         {
                              $this->options = $type;
                         }
                    };
                    return $items;
               });
               return $this;
          }
     }

     public function format(){
         $this->{self::keys}->map(function($price){
               $format = [];
               $priceProduk = $price->price->price;
               $format['price_before_discount']  = $priceProduk;
               $format['format_before_discount'] = $this->formatRp($priceProduk);
               $price->price->price =  $priceProduk - ($priceProduk * ($price->price->{$this->{self::type}}->discount / 100));
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
               return $price;
          });
         return $this;
     }
     public function get() : Collection{
          return $this->{self::keys};
     }
}