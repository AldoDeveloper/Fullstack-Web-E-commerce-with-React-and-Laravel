<?php

namespace App\Service\Produk;

use App\Json\JsonView;
use App\Koleksi\Produk\ViewContainerApiCollection;
use App\Service\Setting\SettingListForProduk;
use App\Service\Setting\SettingListProdukLangganan;
use Illuminate\Http\JsonResponse;

class ProdukServices{
     protected JsonView $json;
     protected ViewContainerApiCollection $views;

     public function __construct(JsonView $json, ViewContainerApiCollection $views)
     {
          $this->json  = $json;
          $this->views = $views;
     }

     public function showServices() : JsonResponse{
          $this->optionsViews();
          return response()->json($this->json->view, 200, [], JSON_PRETTY_PRINT);
     }

     protected function optionsViews() : void{
          $this->attrAdvertisment();
          $this->attrProduk();
          $this->attrCategory();
          $this->attrProdukLangganan();
     }

     protected function attrAdvertisment() : void{
          $this->json->advertisment = $this->views->advertisment::all()->toCollect();
     }
     
     protected function attrProduk() : void{
          $this->json->produk = (new SettingListForProduk($this->views->produk))->go(limit: 5);
     }

     protected function attrCategory() : void{
          $this->json->category = $this->views->category::cursor();
     }

     protected function attrProdukLangganan() : void{
          $this->json->produk_langganan = SettingListProdukLangganan::add($this->views->produk)->get();
     }
}