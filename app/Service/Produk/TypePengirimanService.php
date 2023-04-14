<?php

namespace App\Service\Produk;

use App\Models\typePengiriman;
use App\Request\TypePengirimanRequest;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class TypePengirimanService{
    private TypePengirimanRequest $request;
    private typePengiriman $pengiriman;

    public function __construct(TypePengirimanRequest $request, typePengiriman $pengiriman)
    {
        $this->request = $request;
        $this->pengiriman = $pengiriman;
    }

    public function services() : JsonResponse{
        $type = $this->pengiriman->with([])->chunkMap(function(Model $items){
            return $items;
        });
        if($this->request->request->isMethod('POST')){
            if($this->request->validation()->fails()){
                return response()->json($this->request->validation_error_messages(), 402, [], JSON_PRETTY_PRINT);
            }
            if($this->request->request->options['for'] === 'admin'){
                if(Auth::check()){
                    // $credentials = Validator::make($this->request->request->all(), [
                    //     'body' => ['required'],
                    //     'bod'
                    // ])
                    return response()->json($type, 200, [], JSON_PRETTY_PRINT);
                }
                return response()->json(['authorized' => false], 401);
            }
        }
        return response()->json($type, 200, [], JSON_PRETTY_PRINT);
    }
}