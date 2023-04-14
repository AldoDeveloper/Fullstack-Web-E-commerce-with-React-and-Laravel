<?php

namespace App\Providers;

use App\Jobs\PushProduk as JobsPushProduk;
use App\Koleksi\CategoryProduk\SelectionKoleksiCategoryProduks;
use App\Koleksi\Produk\KoleksiFindProduk;
use App\Models\categorySelection;
use App\Models\Produk;
use App\Request\GrosirProdukRequest;
use App\Service\Produk\GrosirPromoServices;
use App\Service\Produk\PushProduk;
use Illuminate\Http\Request;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->bind(SelectionKoleksiCategoryProduks::class, function($app){
            return new SelectionKoleksiCategoryProduks($app->make(categorySelection::class));
        });
        // $this->app->when(GrosirPromoServices::class)
        //     ->needs(GrosirProdukRequest::class);
        // $this->app->bind(KoleksiFindProduk::class, function($app){
        //     return new KoleksiFindProduk($app->make(Produk::class));
        // });
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        $this->app->when(GrosirPromoServices::class)
            ->needs(GrosirProdukRequest::class);
    }
}
