<?php

namespace App\Koleksi\Produk;

use Exception;
use Illuminate\Support\Collection;

class PriceKoleksi{

     public mixed $price;
     public function __construct(string $typePrice, Collection $attr)
     {
         try{
            $this->price = $attr->where('type', $typePrice)->first()->price;
         }catch(Exception $e){
            $this->price = 'type price is [langganan, only]....';
         }
     }
}