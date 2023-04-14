<?php

namespace App\Trait\Produk;

use App\Models\priceProduks;

trait PromoConfiguration{
    
     public function configPromo(): array{
          return
          [
               ['promo'         => 'produk_'],
               ['promo-spesial' => 'produk_spesial']
          ];
     }
}