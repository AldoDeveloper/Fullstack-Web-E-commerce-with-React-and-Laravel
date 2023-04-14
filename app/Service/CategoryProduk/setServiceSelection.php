<?php
namespace App\Service\CategoryProduk;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redis;
use Illuminate\Support\Facades\Validator;

class setServiceSelection{

     public Request $request;

     public function __construct(Request $request)
     {
          $this->request = $request;
     }
     
     public function validation() : JsonResponse{
          $credeatials = Validator::make($this->request->all(), [
               'id_category'      => ['required', 'exists:container_category_produks,id'],
               'tokens'           => ['required', 'exists:container_category_produks,tokens'],
               'type'             => ['required', 'exists:container_category_produks,type'],
               'title'            => ['required', 'max:50']
          ]);
          if($credeatials->fails()) 
               return response()->json($credeatials->messages()->toArray(), 400, [], JSON_PRETTY_PRINT);
          // $this->addServer();
          return response()->json($this->request->all(), 200, [] , JSON_PRETTY_PRINT);
     }

     public function addServer() : void{
         Redis::set('selection_' . $this->request, $this->request->collect()->toJson());
         if(!is_null($this->request->expired)) Redis::expire('selection_' . $this->request, $this->request->expired);
     }
}