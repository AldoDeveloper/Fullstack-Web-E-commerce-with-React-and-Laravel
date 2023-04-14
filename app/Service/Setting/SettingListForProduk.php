<?php

namespace App\Service\Setting;

use App\Service\Setting\Price\ListPriceSettingPromo;
use App\Trait\Format;
use App\Trait\Produk\Setting;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Collection;

class SettingListForProduk{

     use Setting, Format;
     protected Builder $produk;
     protected $formatPrice;
     
     public function __construct(Model $produk)
     {
          $this->produk = $produk->with(['price' => ['type']]);
     }

     public function go(int $limit = 5) : Collection{
         return ListPriceSettingPromo::set($this->produk)
          ->type('type')
          ->promo()
          ->format()
          ->get();
     }
}