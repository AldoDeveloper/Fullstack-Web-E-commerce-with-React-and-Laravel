<?php

namespace App\Service\Advertisment;

use App\Redis\Advertisment\AdvertismentRedis;
use App\Request\Advertisment\AdvertismentStoreRequest;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Storage;

class AdvertismentServicesStore{
     
     CONST MAX_LIMIT_STORE = 5;
     public AdvertismentStoreRequest $advertisment;
     public AdvertismentRedis $advertismentRedis;

     public function __construct(AdvertismentStoreRequest $advertisment, AdvertismentRedis $advertismentRedis){
          $this->advertisment = $advertisment;
          $this->advertismentRedis = $advertismentRedis;
     }

     public function store() : JsonResponse{
          if($this->advertisment->validation()->fails())
               return response()
               ->json($this->advertisment
                    ->validation()
                    ->messages()
                    ->toArray(), 400, [], JSON_PRETTY_PRINT);
          if($this->pushLimithHandle())
               return response()
                    ->json(['code' => 402, 'messages' => 'limit max ' . self::MAX_LIMIT_STORE], 402, [], JSON_PRETTY_PRINT);

          $create = $this->advertismentRedis->create((array) $this->changedAttrRequest());
          return response()->json($create, 200, [], JSON_PRETTY_PRINT);
     }

     protected function pushLimithHandle() : bool{
          $countAdvertismen = $this->advertismentRedis::all()->toCollect()->count();
          if($countAdvertismen >= self::MAX_LIMIT_STORE) return true;
          return false;
     }

     protected function changedAttrRequest() : array{
          return $this->advertisment->request->collect()->map(function ($values){
               $values['path'] = $this->saveStorageFileRequest();
               return $values;
          })->values()->first();
     }

     protected function saveStorageFileRequest() : string{
          $fileImages = $this->advertisment->request->advertisment['path'];
          $nameFile   = Storage::disk('publish')->put('publish_img', $fileImages);
          $nameFile   = explode('/', $nameFile);
          return Storage::disk('publish')->url($nameFile[1]);
     }
}