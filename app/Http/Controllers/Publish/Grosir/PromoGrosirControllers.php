<?php

namespace App\Http\Controllers\Publish\Grosir;

use App\Http\Controllers\Controller;
use App\Service\Produk\GrosirPromoServices;
use Illuminate\Http\JsonResponse;

class PromoGrosirControllers extends Controller
{
    public GrosirPromoServices $services;

    public function __construct(GrosirPromoServices $service)
    {
        $this->services = $service; 
    }
    
    public function show() : JsonResponse{
        return $this->services->show();
    }

    public function store() : JsonResponse{
        return $this->services->store();
    }

    public function update() : JsonResponse{
        return $this->services->update();
    }
}
