<?php

namespace App\Api\Admin;

use App\Http\Controllers\Admin\GrosirProdukControllers;
use App\Http\Controllers\Admin\Produk;
use Illuminate\Support\Facades\Route;

class ProdukAPI{
     public function boot() : void{
          Route::prefix('produk')->group(function(){
               Route::controller(Produk::class)->group(function(){
                    Route::post('add-produk', 'storeProduk');
               });
               Route::controller(GrosirProdukControllers::class)->group(function(){
                    Route::post('add-produk-grosir', 'storeProdukGrosir');
               });
          });
     }
}