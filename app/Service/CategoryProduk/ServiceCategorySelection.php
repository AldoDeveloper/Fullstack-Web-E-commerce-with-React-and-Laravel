<?php

namespace App\Service\CategoryProduk;

use App\Koleksi\CategoryProduk\SelectionKoleksiCategoryProduks;
use App\Trait\Produk\Selection;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redis;

class ServiceCategorySelection{
     use Selection;
     protected Builder $categorys;
     protected array $mapping;

     public function __construct(Request $request, SelectionKoleksiCategoryProduks $category)
     {
          $this->categorys = $category->categorySelection;
     }

     public function response(array $options = []): JsonResponse{
          $getTokensAksesSelection = $this->categorys->find(1)->categoryContainer;
          return $this->handle($getTokensAksesSelection->tokens, $getTokensAksesSelection);
     }

     protected function handle(string $tokens, $selection): JsonResponse{
          $redisServer = json_decode(Redis::get('selection_' . $tokens));
          $getTokensAksesSelection = $selection;

          if(!is_null($getTokensAksesSelection)){
               if($redisServer !== NULL){
                    if($redisServer->tokens === $getTokensAksesSelection->tokens){
                         $responses = $this->handleAcc($getTokensAksesSelection);
                         return response()->json($responses, 200, [], JSON_PRETTY_PRINT);
                    }
                    return response()->json(['message' => 'error'], 400, [], JSON_PRETTY_PRINT);
               }
               return response()->json(['message' => 'error'], 400, [], JSON_PRETTY_PRINT);
          }
          return response()->json(['message' => 'error'], 400, [], JSON_PRETTY_PRINT);
     }

     protected function handleAcc($servicesCategory) : array{
          $this->mapping['id']      =  $servicesCategory->id;
          $this->mapping['type']    =  $servicesCategory->type;
          $this->mapping['tokens']  =  $servicesCategory->tokens;
          $this->mapping['expired'] =  Redis::ttl('selection_' . $servicesCategory->tokens);
          $this->mapping['data']    =  $servicesCategory->category->map(function($items){
               $map['id'] = $items->id;
               $map['container_produk_id'] = $items->container_produk_id;
               $map['name']   = $items->name;
               $map['tokens'] = $items->tokens['id'];
               $map['produk'] = $items->produk->map(function(Model $produk){
                    $produk->price = 'only';
                    $this->getPromo('promo', $produk);
                    $this->format($produk);
                    return $produk;
               })->slice(0, 5)->sortByDesc('stock')->values();
               return $map;
          });
          $this->destroy($servicesCategory);
          return $this->mapping;
     }

     protected function destroy($data){
          unset($data);
     }
}