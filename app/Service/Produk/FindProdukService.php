<?php
namespace App\Service\Produk;
use App\Json\JsonConfigFindProduk;
use App\Koleksi\Produk\KoleksiFindProduk;
use App\Redis\Produk\promoProdukRedis;
use App\Service\Setting\SettingFindProdukService;
use App\Trait\Format;
use App\Trait\Helper\DefaultInfo;
use App\Trait\Produk\Selection;
use App\Trait\Produk\Setting;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Storage;

class FindProdukService{

     use Selection, Format, Setting, DefaultInfo;
     public Request $request;
     public JsonConfigFindProduk $json;
     protected KoleksiFindProduk $produk;
     protected promoProdukRedis $promo;

     public function __construct(Request $request, KoleksiFindProduk $collection, promoProdukRedis $promo)
     {
          $this->request = $request;
          $this->json    = new JsonConfigFindProduk;
          $this->produk  = $collection;
          $this->promo   = $promo;
     }

     public function auth(): bool
     {
          if(Arr::exists($this->request->all(), 'login')){
               if($this->request->login['auth']){
                    return true;
               }
               return false;
          }
          return false;
     }

     public function show(string $id) : JsonResponse{
          if(is_bool($this->setting($id))){
               return response()->json(
                    ['messages' => null,
                     'kondisi'  => $this->setting($id),
                     'path'     => Storage::disk('profile')->url('not-found.png')
                    ], 400);
          }
          return response()->json($this->setting($id));
     } 

     public function setting(string $id){
          $produk = $this->produk->produk($id)->first();
          if(is_null($produk)) return false;
          else return SettingFindProdukService::set($this->produk->produk($id)->first())
               ->Auth($this->request)
               ->hiddeColumn(['created_at', 'updated_at', 'data'])
               ->imageToFlatten(true)
               ->filterType('type')
               ->promo()
               ->format()
               ->get();
     }
}