<?php

namespace App\Api\Admin;

use App\Http\Controllers\Control\AdvertismenProduk;
use App\interface\interfaceApi;
use Illuminate\Support\Facades\Route;

class Advertisment implements interfaceApi{

     public function boot() : void{
          Route::controller(AdvertismenProduk::class)->group(function(){
               Route::match(['get', 'post'], 'advertisment-produk', 'show');
               Route::post('add-advertisment', 'store');
               Route::get('removed/{id}', 'removed');
               Route::post('edit-advertisment/{id}', 'edit');
               Route::post('set-expired', 'setExpiredDataRedis');
          });
     }
}
