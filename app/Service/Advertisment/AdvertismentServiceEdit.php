<?php

namespace App\Service\Advertisment;
use App\Request\Advertisment\AdvertismentEditRequest;
use App\Trait\ActivationRedis;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Redis;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class AdvertismentServiceEdit{

     use ActivationRedis;
     public AdvertismentEditRequest $request;
     protected Collection $advertisment;

     public function __construct(AdvertismentEditRequest $request, Redis $redis)
     {
          $this->request = $request;
          $this->advertisment = $this->convertToCollect($redis::lrange('advertisment', 0,  -1));
     }

     public function limitRequest(){
          $limit    = Redis::incr('limit_request_advertisment');
          $expired  = Redis::ttl('limit_request_advertisment');
          if($this->checkInputRequestExpired()) $this->expired($expired, $this->request->request->advertisment['expired']);
          if(intval($limit) > 4) return response()->json(['max-length-req' => 2], 200, [], JSON_PRETTY_PRINT);
     }

     public function editServiceAdvertisment(int $id): JsonResponse{
          $filter = $this->advertisment->filter(function($value) use($id){
               return $value->id === $id;
          })->values()->first();
          if($filter === NULL) return response()->json(['messages' => 'advertisment-not-found'], 400, [], JSON_PRETTY_PRINT);
          $editData = $this->set($filter);
          $new = $this->advertisment->map(function($values, $keys) use($editData, $id){
               if(intval($id) === $values->id) $values = $editData;
               return $values;
          })->values()->toArray(); 
          $this->save($new);
          return response()->json(['messages'=> 'success'], 200, [], JSON_PRETTY_PRINT);
     }

     protected function set($values){
           $oldPath = $values->path;
           $values->title  = $this->request->request->advertisment['title'];
           $values->link   = $this->request->request->advertisment['link'];
           $values->ket    = $this->request->request->advertisment['ket'];
           $values->path   = $this->pushFilesImages($oldPath);
           $values->tokens = Str::random(29);
           return $values;
     }

     protected function pushFilesImages(string $old):string{
          Storage::disk('publish')->delete($old);
          $files = $this->request->request->advertisment['path'];
          $fileNames = Storage::disk('publish')->put('publish_img', $files);
          return explode('/', $fileNames)[1];
     }
     
     protected function save(array $data){
          Redis::del('advertisment');
          Redis::pipeline(function($pipe) use($data){
               foreach($data as $values){
                    Redis::lpush('advertisment', json_encode($values));
               }
          });
     }

     protected function checkInputRequestExpired(): bool{
          if(array_key_exists('expired', $this->request->request->advertisment))
               return true;
          return false;
     }

     protected function expired(int $expired, $time) : void{
          if($expired < 1){
               Redis::expire('limit_request_advertisment', intval($time));
          }
     }    
}