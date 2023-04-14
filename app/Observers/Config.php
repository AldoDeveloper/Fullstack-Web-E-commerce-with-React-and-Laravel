<?php

namespace App\Observers;

use App\Koleksi\CategoryProduk\KoleksiCategoryProduk;
use App\Koleksi\Produk\KoleksiProduk;
use App\Models\categoryProduk;
use App\Trait\Format as format;
use App\Trait\Produk\Selection;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\LazyCollection;

class Config
{ 
    use format, Selection;
    protected  $produk;
    protected KoleksiCategoryProduk $koleksiCategoryProduk;

    public function __construct(KoleksiProduk $produk, KoleksiCategoryProduk $koleksiCategoryProduk)
    {
        $this->produk = $produk;
        $this->koleksiCategoryProduk = $koleksiCategoryProduk;
    }

    protected function category() : LazyCollection{
        return categoryProduk::cursor();
    }

    protected function produk(){
        return $this->produk->getProduk('only', 'promo')
            ->sortByDesc('sold')->values()
            ->slice(0, 10);
    }

    protected function produksFormLangganan(): LazyCollection{
        return $this->produk->getProduk('langganan', '')
            ->sortByDesc('price')->map(function($produk){
                $produk->konditions = 'langganan';
                return $produk;
            })->values()->slice(0, 5);
    }

    protected function produkPromoSpesial(): LazyCollection{
        return $this->produk->getProduk('only', 'promo-spesial')
            ->sortByDesc('sold')->filter(function(Model $produk){
                return $produk->konditions === 'promo-spesial';
            })->values()->slice(0, 5);
    }

    protected function produkElektronik() : LazyCollection{
        return $this->koleksiCategoryProduk->getCategoryProduk(['produk' => ['activation_produks', 'priceGet']], 1)
            ->map(function(Model $produk){
                $produk->produk->map(function($items){
                    $items->price = 'only';
                    $this->format($items);
                })->sortByDesc('sold')->values()->slice(0, 5);
                return $produk;
            })->values()->slice(0, 5);
    }

    protected function grapOptions() : array{
        return
         [
            'category'          => $this->category(),
            'produk'            => $this->produk(),
            'produk_langganan'  => $this->produksFormLangganan(),
            'promo_spesial'     => $this->produkPromoSpesial(),
            'produk_elektronik' => $this->produkElektronik()
         ];
    }

    public function main(array $options){
        $graps = [];
        foreach($options as $key => $values){
            if(array_key_exists($key, $this->grapOptions())) 
                 $graps[$key] = $this->grapOptions()[$key];
            else $graps[$key] = NULL;
        }
        return $graps;
    }
}