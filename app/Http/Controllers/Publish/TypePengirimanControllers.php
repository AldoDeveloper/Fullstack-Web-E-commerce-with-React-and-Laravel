<?php

namespace App\Http\Controllers\Publish;

use App\Http\Controllers\Controller;
use App\Service\Produk\TypePengirimanService;
use Illuminate\Http\JsonResponse;

class TypePengirimanControllers extends Controller
{
    public function show(TypePengirimanService $services) : JsonResponse{
        return $services->services();
    }
}
