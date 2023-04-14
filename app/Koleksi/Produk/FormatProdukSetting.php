<?php

namespace App\Koleksi\Produk;

use App\Trait\Format;

class FormatProdukSetting{

     use Format;

     public $price;
     public $stock;
     public $sold;
     public $price_str;
     
     public function __construct(array $attr)
     {
          $this->price = is_integer($attr['price']) ? $this->formatRp($attr['price'])     : null;
          $this->stock = is_integer($attr['stock']) ? $this->formatNumber($attr['stock']) : null;
          $this->sold  = is_integer($attr['sold'])  ? $this->formatNumber($attr['sold'])  : null;
          $this->price_str = is_integer($attr['price']) ? $this->formatNumber($attr['price']) : null;
     }
}