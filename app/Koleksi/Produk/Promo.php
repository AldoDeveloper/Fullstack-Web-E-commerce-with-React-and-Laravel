<?php

namespace App\Koleksi\Produk;

use App\Trait\Produk\PromoConfiguration;
use Illuminate\Support\Arr;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Redis;

class Promo{
     use PromoConfiguration;
     public array $promo;

     public function setPromo($typePromo, int $id, string $filter) : void{
          if(is_bool($typePromo)){
             $this->promo['type'] = $typePromo;
             $this->promo['data'] = $this->firstOrArr($id, $filter);
          }
     }

     protected function firstOrArr(int $id, string $filter){
          return $this->getPromopProduk($id, $filter)->count() === 1
           ? $this->getPromopProduk($id, $filter)->first()
           : $this->getPromopProduk($id, $filter);
     }

     protected function getPromopProduk(int $id, string $filter) : Collection{
          $capacityPromo = collect();
          if(count($this->filterPromo('promo')) > 0){
               foreach($this->filterPromo($filter) as $key => $value){
                    $getRedis = Redis::get($value . $id);
                    if(!is_null($getRedis)){
                         $setDataPromo = json_decode($getRedis);
                         $setDataPromo->expired = Redis::ttl($value . $id);
                         $capacityPromo->push([$key => $setDataPromo]);
                    }
               }
               return $capacityPromo;
          }
          return $capacityPromo->push('not-found');
     }

     protected function filterPromo(string $filter): array | Arr{
          if($filter === '*'){
               $collapse = [];
               foreach($this->configPromo() as $key => $value) array_push($collapse, $value);
               return Arr::collapse($collapse);
          }else{
               $collapse = array_values(array_filter($this->configPromo(), function(array $value) use($filter){
                    return array_key_exists($filter, $value);
               }));
               return Arr::collapse($collapse);
          }
     }
}