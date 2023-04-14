<?php

namespace App\Http\Controllers;

use App\Request\PromoRequest;
use App\Service\Produk\PromoServices;
use Illuminate\Http\JsonResponse;

class PromoProdu extends Controller
{   
    public function __construct(){}
    public function store(PromoServices $promoServices, PromoRequest $request): JsonResponse{
        if($request->validate->fails())
            return response()
                ->json($request->validate->messages()->toArray(), 400, [], JSON_PRETTY_PRINT);
        return $promoServices->store();
    }

    public function show(PromoServices $service) : JsonResponse{
        return $service->show();
    }

    public function removed(PromoServices $service) : JsonResponse{
        return $service->removed();
    }
}