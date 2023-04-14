<?php

namespace App\Http\Controllers\Publish\Grosir;

use App\Http\Controllers\Controller;
use App\Service\Produk\GrosirProdukServices;
use Illuminate\Http\JsonResponse;

class GrosirProdukControllers extends Controller{
    public function show(string $id, GrosirProdukServices $grosirServices) : JsonResponse{
        return $grosirServices->show($id);
    }
}