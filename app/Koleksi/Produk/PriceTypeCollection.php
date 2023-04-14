<?php
namespace App\Koleksi\Produk;

use App\Trait\Format;
use App\Trait\Produk\PromoConfiguration;
use Illuminate\Support\Arr;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Redis;

class PriceTypeCollection{

     use PromoConfiguration, Format;
     public $data ;
     protected $attr;

     public function __construct(array $attr)
     {
          $this->attr = $attr;
          $this->data =  $this->__callData();
     }

     protected function __callData(){
          if(Arr::exists($this->attr, 'produks_id')){
               $typed = $this->getPromo($this->attr['produks_id'])
               ->filter(function($val){ return $val->from === $this->attr['type'];
               })->map(function($values){
                    $mapping = [];
                    $mapping['id']       = $values->key;
                    $mapping['tokens']   = $values->tokens;
                    $mapping['discount_price']  = $this->priceDicount($values->discount);
                    $mapping['discount_number'] = $values->discount;
                    $mapping['discount_str']    = strval($values->discount . '%');
                    $mapping['expired']         = $values->expired;
                    return $mapping;
               });
               return $typed;
          }
          return null;
     }

     protected function priceDicount(int $discount): string{
          return $this->formatRp($this->attr['price'] - ($this->attr['price'] * ($discount / 100)));
     }

     protected function getPromo(int $id) : Collection{
          $collection = collect();
          if($this->checkProduksId()){
               foreach($this->converToCollapse() as $key => $value){
                    $getData = Redis::get($value . $id);
                    if(!is_null($getData)){
                         $convertJson = json_decode($getData);
                         $convertJson->type = $key;
                         $convertJson->expired = Redis::ttl($value . $id);
                         $collection->push($convertJson);
                    }
               }
               return $collection;
          }
          return $collection;
     }

     protected function converToCollapse() : array{
          return Arr::collapse($this->configPromo());
     }

     protected function checkProduksId() : bool{
          return Arr::exists($this->attr, 'produks_id') ? true : false;
     }
}