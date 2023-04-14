<?php

namespace App\Koleksi\Produk;

use App\Trait\Format as format;
use Illuminate\Database\Eloquent\Model;

class KoleksiJson{
     use format;
     
     public function __construct()
     {
          
     }

     // public function formatProduk(Model $produk, string $typePromo){
     //      $produk->price_data  = $this->setPrice($produk, self::ONLY);
     //      $produk->price = $produk->price_data->price;
     //      $produk->stock = $produk->activation_produks->stock;
     //      $produk->sold  = $produk->activation_produks->sold;
     //      $produk->cover = $this->storage::disk('publish')->url($produk->cover);
     //      $this->setPromo($typePromo, $produk);
     //      $produk->price = $this->formatRp($produk->price);
     //      return $produk;
     // }
}