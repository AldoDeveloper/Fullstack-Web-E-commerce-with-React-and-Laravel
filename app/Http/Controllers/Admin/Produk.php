<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Request\StoreProdukRequest;
use App\Service\Produk\PushProduk as ProdukPushProduk;
use App\Trait\Format;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Response;

class Produk extends Controller
{
    use Format;

    public function __construct()
    {
        // $this->middleware(function($request, $next){
        //     if($request->auth)  return $next($request);
        //     return response()->json(['push' => 'failed'], 400, [] , JSON_PRETTY_PRINT);
        // });
    }

    public function storeProduk(StoreProdukRequest $request, ProdukPushProduk $push): JsonResponse{
    
        if($request->validate->fails()){
            return Response::json(
                $this->validationResponses($request->validate->messages()->toArray()), 403, [], JSON_PRETTY_PRINT);
        }
        $push->pushServiceProduk();
        return Response::json(['message' => 'success']);
    }
}
