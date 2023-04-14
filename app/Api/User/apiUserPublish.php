<?php

namespace App\Api\User;

use App\Http\Controllers\Publish\FindProdukController;
use App\Http\Controllers\Publish\Grosir\GrosirProdukControllers;
use App\Http\Controllers\Publish\Grosir\PromoGrosirControllers;
use App\Http\Controllers\Publish\PluginProdukControllers;
use App\Http\Controllers\Publish\TypePengirimanControllers;
use App\interface\interfaceApi;
use Illuminate\Support\Facades\Route;

class apiUserPublish implements interfaceApi{
     
     public function boot() : void{
          Route::prefix('publish')->group(function(){
               Route::controller(PluginProdukControllers::class)->group(function(){
                   Route::get('view', 'view');
                   Route::get('footer', 'footer', 'footer');
               });
               Route::controller(FindProdukController::class)->group(function(){
                    Route::match(['get', 'post'], 'find/{id}', 'show');
               });
               Route::controller(TypePengirimanControllers::class)->group(function(){
                    Route::match(['get', 'post'], 'list-pengiriman', 'show');
               });
               Route::controller(GrosirProdukControllers::class)->group(function(){
                    Route::get('grosir/{id}', 'show');
               });
           });
     }

}