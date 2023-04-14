<?php
namespace App\Service\Produk{

    use App\Object\Creation;
    use App\Redis\Produk\PromoRedisProdukGrosir;
    use App\Request\PromoGrosirRequest;
    use Illuminate\Http\JsonResponse;
    use Illuminate\Support\Arr;

    class GrosirPromoServices{
        private PromoRedisProdukGrosir $promoGrosir;
        private PromoGrosirRequest $request;
        private const LIMIT = 2;

        public function __construct(PromoRedisProdukGrosir $promoGrosir, PromoGrosirRequest $request)
        {
            $this->promoGrosir = $promoGrosir;
            $this->request = $request;
        }

        public function show() : JsonResponse{
            return response()->json($this->promoGrosir->all()->toCollect());
        }

        public function store() : JsonResponse{
            if($this->request->validation()->fails())
                return response()->json(
                    Creation::set($this->request
                        ->validation()
                        ->messages()
                        ->toArray())
                        ->values_first()
                        ->get(), 400, [], JSON_PRETTY_PRINT);
            
            if(count($this->request->request->body) > self::LIMIT) 
               return response()->json(['message' => 'limit-request-2'], 400, [], JSON_PRETTY_PRINT);

            $info = [];
            foreach($this->request->request->body as $keys => $bodys){
                $cek = $this->promoGrosir->all()->toCollect()
                    ->where('id_grosir', $bodys['id_grosir'])
                    ->first();
                
                if(is_null($cek)){
                    $create = $this->promoGrosir->create((array) $bodys);
                    if(is_bool($create) && $create)
                        $info['id_grosir' . $bodys['id_grosir'] . 'create'] = $create;
                    else $info[$keys]  = $create;

                }else{
                    $info['id_grosir.' . $bodys['id_grosir'] . '.created']['kondisi'] = false;
                    $info['id_grosir.' . $bodys['id_grosir'] . '.created']['error'] = 'id suda ada..';
                }
            }
            return response()->json($info, 200, [], JSON_PRETTY_PRINT);
        }

        public function update() : JsonResponse{
            if($this->request->validation()->fails()){
                return response()->json(
                    Creation::set($this->request
                      ->validation()
                      ->messages()
                      ->toArray())
                      ->values_first()
                      ->get(), 400, [], JSON_PRETTY_PRINT);
            }
            $first = Arr::first($this->request->request->body);
            $redis = $this->promoGrosir->all()
                ->toCollect()
                ->where('id_grosir', $first['id_grosir'])
                ->first();

            if(!is_null($redis)){
                $bool = $this->promoGrosir->find($redis->id)->delete();
                if($bool){
                   $updated =  $this->promoGrosir->create($first);
                   return response()->json(['messages' => $updated], 200, [], JSON_PRETTY_PRINT);
                }
            }
            return response()->json(
                [
                    'id'       => 'id-not-found',
                    'messages' => 'updated-error'
                ], 400, [], JSON_PRETTY_PRINT);
        }
    }
}