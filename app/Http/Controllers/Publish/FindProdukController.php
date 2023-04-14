<?php

namespace App\Http\Controllers\Publish;
use App\Http\Controllers\Controller;
use App\Service\Produk\FindProdukService;
use Illuminate\Http\JsonResponse;

class FindProdukController extends Controller
{
    public function __construct()
    {
        $this->middleware(['auth-check']);
    }
    
    public function show(FindProdukService $service, string $id): JsonResponse{
        return $service->show($id);
    }
}
