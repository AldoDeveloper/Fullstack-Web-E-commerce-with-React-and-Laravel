<?php

namespace App\Koleksi\CategoryProduk;

use App\Models\categoryProduk;
use App\Trait\Format;
use App\Trait\Produk\Selection;
use Illuminate\Database\Eloquent\Model;

class KoleksiCategoryProduk{

     use Format, Selection;
     protected Model $categoryProduk;

     public function __construct(categoryProduk $categoryProduk)
     {
          $this->categoryProduk  = $categoryProduk;
     }

     public function getCategoryProduk($relations, int $id){
          return $this->categoryProduk->with($relations)->cursor()
               ->filter(function(Model $produks) use($id){
                    $produks->produk;
                    return $produks->container_produk_id === $id;
               });
     }
}