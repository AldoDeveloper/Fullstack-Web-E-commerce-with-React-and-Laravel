<?php

namespace App\Koleksi\CategoryProduk;

use App\Models\categorySelection;
use Illuminate\Database\Eloquent\Builder;

class SelectionKoleksiCategoryProduks{
     
     public Builder $categorySelection;
     const OPTIONS = ['categoryContainer' => ['category' => ['produk']]];

     public function __construct(categorySelection $categorySelection)
     {
          $this->categorySelection = $categorySelection->with(self::OPTIONS);
     }
}