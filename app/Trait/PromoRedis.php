<?php

namespace App\Trait;

use App\Trait\Produk\PromoConfiguration;
use Illuminate\Support\Arr;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Redis;

trait PromoRedis{
     use PromoConfiguration;

     public function getPromo() : Collection{
          $collection = collect();
          if(!is_null($this->getKeysAllProduk())){
              foreach($this->getKeysAllProduk() as $keys){
                $create = $this->getJsonDataRedis($keys);
                $create->expired = Redis::ttl($keys);
                $collection->push($create);
              }
              return $collection;
          }
          return $collection;
     }

     public function searchPromo(array $options) : Collection{
          return $this->getPromo()->filter(function($values) use($options){
              if(Arr::exists($options, 'key'))  return $values->key  === $options['key'];
              if(Arr::exists($options, 'type')) return $values->from === $options['type'];
          })->values();
     }

     protected function getJsonDataRedis(string $keys){
          $redis = Redis::get($keys);
          return json_decode($redis);
     }

     protected function getKeysAllProduk(): array | null{
          $keysProduk = Redis::keys('produk*');
          if(is_array($keysProduk)){
               return $keysProduk;
          }
          return null;
     }
}