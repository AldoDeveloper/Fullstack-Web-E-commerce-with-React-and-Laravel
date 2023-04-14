<?php
namespace App\Service\Produk;

use App\Models\grosirProduk;
use App\Request\GrosirProdukRequest;
use App\Service\Setting\SettingGrosirProduk;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\JsonResponse; 

class GrosirProdukServices{
    private GrosirProdukRequest $request;
    private Builder $grosir;
    private const SETTING = [ 'images', 'produk_eceran' => ['infoDetails'], 'eceran'];
    
    public function __construct(GrosirProdukRequest $request, grosirProduk $modelsGrosir)
    {
        $this->grosir = $modelsGrosir->with(GrosirProdukServices::SETTING);
        $this->request = $request;
    }

    public function show(string $id) : JsonResponse{
        return response()->json($this->getDataGrosir($id), 200, [], JSON_PRETTY_PRINT);
    }
    
    protected function getDataGrosir(string $id) {
        $grosirProduk = $this->grosir->where('keys', $id)->first();
        if(is_null($grosirProduk)) return ['messages' => null];
        return SettingGrosirProduk::set($grosirProduk)
            ->promo()
            ->info()
            ->imagesFlaten()
            ->hidden(['cover', 'created_at', 'updated_at'])
            ->get();
    }
}