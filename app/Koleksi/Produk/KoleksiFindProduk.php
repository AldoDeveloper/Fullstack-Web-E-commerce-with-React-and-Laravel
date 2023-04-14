<?php

namespace App\Koleksi\Produk;

use App\Models\Produk;

class KoleksiFindProduk{
     
     protected const setting = ['images', 'price' => ['type'], 'infoDetails', 'grosir'];
     public Produk $koleksiProduk;

     public function __construct(Produk $produk)
     {
          $this->koleksiProduk = $produk;
     }

     public function produk(string $id){
         return $this->koleksiProduk->with(self::setting)->where('keys', $id);
     }
}