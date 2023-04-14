<?php

namespace App\Service\Produk;

use App\Models\activationProduks;
use App\Models\priceProduks;
use App\Models\Produk;
use App\Request\StoreProdukRequest;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class PushProduk{

     protected StoreProdukRequest $request;
     
     public function __construct(StoreProdukRequest $request)
     {
          $this->request = $request;
     }

     public function pushServiceProduk(bool $kondition = true) : mixed{
        if($kondition) return $this->createProduk($this->request->request->produks);
        return false;
     }

     protected function createProduk($request){

          foreach($request as $key => $items){
              $request[$key]['tokens'] = Str::random(30);
              $request[$key]['data']   = ['id' => Str::orderedUuid()];
          }

          foreach($request as $key => $items){
              $items['cover']   = $this->uploadImagesProduks($items['cover']);
              $dataCreateProduk = $items;
              $produks = Produk::create($this->dataProduk($dataCreateProduk));
              $this->createProdukPrice($items['setPrice'], $produks);
              $request[$key]['activation'] = $this->createProdukActivation($items, $produks);
          }
      }

      protected function createProdukActivation($items, $produks){
          $activations = $items['activation'];
          $activations['data']  = ['id' => Str::orderedUuid()];
          $activations['produks_id']   = $produks->id;
          $activations['produk_type']  = $produks->name_produk;
          activationProduks::create($activations);
          return $activations;
      }

      protected function createProdukPrice($items, $produks){
          foreach($items as $data){
              $priceSet = $data;
              $priceSet['produks_id'] = $produks->id;
              priceProduks::create($priceSet);
          }
      }

      protected function uploadImagesProduks($file): string{
          $fileName =  Storage::disk('publish')->put('publish_img', $file);
          $converFileName = explode('/', $fileName);
          return $converFileName[1];
      }
  
      protected function dataProduk($produks){
          unset($produks['activation']);
          unset($produks['setPrice']);
          return $produks;
      }
}