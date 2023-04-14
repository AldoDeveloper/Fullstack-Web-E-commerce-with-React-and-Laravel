<?php

namespace App\Service\Advertisment;

use App\Redis\Advertisment\AdvertismentRedis;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;

class AdvertismentServices{
     protected AdvertismentRedis $advertismentRedis;
     public Request $request;

     public function __construct(Request $request, AdvertismentRedis $advertismentRedis)
     {
          $this->request = $request;
          $this->advertismentRedis = $advertismentRedis;
     }

     public function showService() : JsonResponse{
          $response =[collect(), 200];
          if($this->request->method() === 'GET'){
               if(!$this->request->slice){
                    $advertisment = $this->advertismentRedis::all()->toCollect();
               }else{
                    $advertisment = $this->advertismentRedis::all()->toCollect()->slice(0, intval($this->request->slice));
               }
               $response[0] = $advertisment;
               $response[1] = 200;
          }else{
               $credential = Validator::make($this->request->all(), [
                    'find'           =>  ['required'],
                    'find.search_id' =>  ['required', 'integer'],
               ]);
               if($credential->fails()){
                    $response[0] = $response[0]->put('error', $credential->messages()->toArray());
                    $response[1] = 400;
               }else{
                    $response[0] = $this->find($this->request->find['id'])->first();
                    $response[1] = 200;
               }
          }
          [$responsesData, $status] = $response;
          return response()->json($responsesData, $status, [], JSON_PRETTY_PRINT);
     }

     public function find(int $id){
          return $this->advertismentRedis::all()
               ->toCollect()->where('id', $id);
     }
     
     public function removed(int $id) : JsonResponse{
          $konditions = ['message' => 'error'];
          if($this->advertismentRedis::find($id)->toCollect()->count() > 0){
               $fileDelete =  Storage::disk('publish')->delete('publish_img/' . $this->array_last($this->deleteFile($id)));
               if($fileDelete){
                    $deleteAdvertisment = $this->advertismentRedis::find($id)->delete();
                    $konditions = ['delete' => $deleteAdvertisment, 'delete_file'  => $fileDelete];
               }
               else $konditions = ['delete' => false, 'delete_file' => false];
          }
          return response()->json($konditions, 200);
     }

     protected function deleteFile(int $id) : array{
          $findAdvertisment = $this->advertismentRedis::find($id)->toCollect();
          $file = explode('/', $findAdvertisment['path']);
          return $file;
     }

     protected function array_last(array $items): string{
          $index = count($items) - 1;
          return $items[$index];
     }
}