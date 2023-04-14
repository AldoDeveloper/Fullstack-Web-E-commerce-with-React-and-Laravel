<?php

namespace App\Koleksi\Produk;

use App\Models\categoryProduk;
use App\Models\Produk;
use App\Redis\Advertisment\AdvertismentRedis;

class ViewContainerApiCollection{

     public AdvertismentRedis $advertisment;
     public Produk $produk;
     public categoryProduk $category;

     public function __construct
        (
          Produk $produk,
          AdvertismentRedis $advertisment,
          categoryProduk $category
        )
        
     {
          $this->advertisment = $advertisment;
          $this->produk    = $produk;
          $this->category  = $category;
     }
}