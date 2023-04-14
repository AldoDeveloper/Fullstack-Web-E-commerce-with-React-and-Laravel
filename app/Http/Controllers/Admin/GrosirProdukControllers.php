<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\activationGrosirProduk;
use App\Models\grosirProduk;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Response;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;

class GrosirProdukControllers extends Controller
{
    public function storeProdukGrosir(Request $request){
        $credentials = Validator::make($request->all(), [
            'produk_grosir.*'                  => ['required'],
            'produk_grosir.*.produks_id'       => ['required', 'exists:produks,id'],
            'produk_grosir.*.category_id'      => ['required', 'exists:category_produks,id'],
            'produk_grosir.*.grosir_name'      => ['required'],
            'produk_grosir.*.category_produk_type' => ['required', 'exists:category_produks,name'],
            'produk_grosir.*.price_grosir'     => ['required'],
            'produk_grosir.*.cover'            => ['required', 'mimes:jpg,png,webp'],
            'produk_grosir.*.activation'       => ['required'],
            'produk_grosir.*.activation.stock' => ['required'],
            'produk_grosir.*.activation.sold'  => ['required'],
        ]);
        
        if($credentials->fails()) return Response::json($credentials->messages()->toArray(), 400, [], JSON_HEX_AMP);
        $stream = array_map(function($values){
            if(array_key_exists('activation', $values)){
                $fileNames       = Storage::disk('publish')->put('publish_img', $values['cover']);
                $imgFiles        = explode('/', $fileNames);
                $values['cover'] = $imgFiles[1];
                $this->createActivationProduk($values, $this->createdGrosirProduk($values));
            }   return $values;
        }, $request->produk_grosir);
        return Response::json(['message' => 'success', 'code' => 200, 'add' => count($stream)], 200, [], JSON_PRETTY_PRINT);
    }

    protected function createActivationProduk($values, $grosirProduk){
        $activations = $values['activation'];
        $activations['grosir_produk_id'] = $grosirProduk->id;
        $activations['grosir_type']      = $grosirProduk->category_produk_type;
        $activations['data']             = ['id' => Str::orderedUuid()];
        return activationGrosirProduk::create($activations);
    }

    protected function createdGrosirProduk($values){
        $createdJsonData = $values;
        $createdJsonData['data'] = ['id' => Str::orderedUuid()];
        $values = $createdJsonData;
        unset($createdJsonData['activations']);
        return grosirProduk::create($createdJsonData);
    }
}