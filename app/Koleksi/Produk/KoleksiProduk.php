<?php


namespace App\Koleksi\Produk;

use App\Models\Produk;
use App\Trait\Format as format;
use App\Trait\Produk\Selection;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\LazyCollection;

class KoleksiProduk{

     use format, Selection;
     protected Model $produk;
     protected Storage $storage;
     protected Request $request;

     public function __construct(Produk $produk, Request $request, Storage $storage)
     {
          $this->request = $request;
          $this->produk  = $produk;
          $this->storage = $storage;
     }

     public function getProduk(string $typePrice, string $typePromo): LazyCollection{
          return $this->produk
                 ->cursor()
                 ->map(function(Model $produk) use($typePrice, $typePromo){
                     $produk->price  = $typePrice;
                     $this->getPromo($typePromo, $produk);
                     $produk->format = $produk->toArray();
                     return $produk;
                 });
     }
}