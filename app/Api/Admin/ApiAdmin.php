<?php

namespace App\Api\Admin;

use App\Api\Import;
use App\Http\Controllers\Admin\setCategorySelectionController;
use App\Http\Controllers\Admin\Setting;
use App\Http\Controllers\PromoProdu;
use App\Http\Controllers\Publish\Grosir\PromoGrosirControllers;
use App\interface\interfaceApi;
use Illuminate\Support\Facades\Route;

class ApiAdmin implements interfaceApi{

     public function boot(): void{
          Route::prefix('admin')->group(function(){
               Route::prefix('control')->group(function(){
                    new Import(new Advertisment);
                    Route::controller(PromoProdu::class)->group(function(){
                         Route::post('add-promo', 'store');
                         Route::match(['get', 'post', 'put'], 'remove-promo', 'removed');
                         Route::get('show-type', 'show');
                    });
                    Route::controller(PromoGrosirControllers::class)->group(function(){
                         //CRUD
                         Route::get('grosir-promo-show', 'show');
                         Route::post('grosir-promo-store', 'store');
                         Route::put('grosir-promo-update', 'update');
                    });
                    Route::controller(setCategorySelectionController::class)->group(function(){
                         Route::post('push-add-selection', 'push');
                    });
                    Route::controller(Setting::class)->group(function(){
                         Route::post('price-setting-global', 'setting_price_publish_global');
                    });
               });
               new Import(new ProdukAPI); // set produk admin...
          });
     }
} 