<?php

namespace App\Http\Controllers\Publish;
use App\Http\Controllers\Controller;
use App\Models\Info\infoToko;
use App\Service\Produk\ProdukServices;
use App\Trait\Produk\Setting;
use Illuminate\Http\JsonResponse;

class PluginProdukControllers extends Controller
{   
    use Setting;
    public function view(ProdukServices $services) : JsonResponse{
        return $services->showServices();
    }

    public function footer() : JsonResponse{
        $footerData = infoToko::where('key', 'footer')
            ->first()
            ->makeHidden(['created_at', 'updated_at']);
        return response()->json($footerData, 200);
    }
}
