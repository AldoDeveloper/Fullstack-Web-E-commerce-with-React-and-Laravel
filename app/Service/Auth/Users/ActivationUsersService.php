<?php

namespace App\Service\Auth\Users{

    use App\Models\cartProduk;
    use App\Models\Profile;
    use App\Service\Setting\SettingFindProdukService;
    use Illuminate\Database\Eloquent\Model;
    use Illuminate\Http\JsonResponse;
    use Illuminate\Http\Request;
    use Illuminate\Support\Facades\Validator;

    class ActivationUsersService{
        public Request $request;
        public function __construct(Request $request)
        {
            $this->request = $request;
        }

        public function addCart() : JsonResponse{
            $validations = Validator::make($this->request->all(), [
                'id_produks' => ['required', 'exists:produks,id', 'unique:cart_produks,id_produk']
            ]);
            if($validations->fails())
                  return response()
                     ->json($validations->messages()
                     ->toArray(), 400);
            $addCart = cartProduk::create(
                [
                    'id_produk' => $this->request->id_produks,
                    'id_users'  => $this->request->user()->id,
                ]
            );
            return response()->json($addCart, 200, [], JSON_PRETTY_PRINT);
        }
        public function show() : JsonResponse{
            $cart    = auth()->user()->makeHidden(['id', 'email_verified_at', 'created_at', 'updated_at']);
            $carting = $cart->keranjang;
            $carting->map(function(Model $cart){
                $cart->produks = SettingFindProdukService::set($cart->produks)
                    ->filterType('type')
                    ->promo()
                    ->format()
                    ->more_format()
                    ->get();
                return $cart;
            });
            return response()->json($cart, 200, [], JSON_PRETTY_PRINT);
        }
    }
}