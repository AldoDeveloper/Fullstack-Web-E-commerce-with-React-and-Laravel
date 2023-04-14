<?php

namespace App\Service\Produk;

use App\Redis\Produk\promoProdukRedis;
use App\Trait\Produk\PromoConfiguration;
use App\Trait\PromoRedis;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class PromoServices{
     use PromoConfiguration, PromoRedis;
     public Request $request;
     private promoProdukRedis $promo;

     public function __construct(Request $request, promoProdukRedis $promo)
     {
          $this->request = $request;
          $this->promo   = $promo;
     }

     public function store() : JsonResponse{
          $requestInfo = [];
          foreach($this->request->set_promo  as $keys => $values){
               $cek = $this->promo::all()->toCollect()
                    ->where('id_produks', $values['id_produks'])
                    ->where('from', $values['from'])
                    ->first();
               if(is_null($cek)){
                    $konditions =  $this->promo->create($values);
                    if(is_bool($konditions) && $konditions)
                         $requestInfo['id_produks.'. $values['id_produks'] . '.created'] = $konditions;
                    else $requestInfo[$keys] = $konditions;
               }else{
                    $requestInfo['id_produks.'. $values['id_produks'] .'.'. $values['from']  . '.created']['kondisi'] = false;
                    $requestInfo['id_produks.'. $values['id_produks'] .'.'. $values['from'] .'.created']['error'] = 'id_produks.already.exist';
               }
          }
          return response()->json($requestInfo,  200, [], JSON_PRETTY_PRINT);
     } 

     public function show() : JsonResponse{
          $show = $this->promo::all()->toCollect();
          return response()->json($show, 200, [], JSON_PRETTY_PRINT);
     }

     public function removed() : JsonResponse{
          $removedSuccess = [];
          $count = 0;
          $credential = Validator::make($this->request->all(), [
               'remove_promo'      => ['required'],
               'remove_promo.*.id' => ['required', 'integer']
           ]);
           if($credential->fails()) return response()->json($credential->messages()->toArray(), 401, [], JSON_PRETTY_PRINT);
           foreach($this->request->remove_promo as $removed){
               $rmv = $this->promo::find($removed['id'])->delete();
               if($rmv){
                    $count++;
                    $removedSuccess['success'] = $count;
               }else{
                    $removedSuccess['failed.' . $removed['id']] = $removed['id'];
               }
           }
           return response()->json($removedSuccess);
     }
}