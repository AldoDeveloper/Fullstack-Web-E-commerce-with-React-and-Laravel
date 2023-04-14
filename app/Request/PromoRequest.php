<?php

namespace App\Request;

use App\Models\typePrice;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Validator as Validation;

use Illuminate\Validation\Rule;

class PromoRequest{
     public Request $request;
     public Validation $validate;

     public function __construct(Request $request)
     {
          $this->request  = $request;
          $this->validate = $this->validation();
     }

     protected function validation() : Validation{
          return Validator::make($this->request->all(), $this->rule());
     }
     
     protected function rule() : array{
          $data = [];
          foreach(typePrice::all(['type'])->toArray() as $keys => $values){
              array_push($data, $values['type']);
          }
          return
           [
               'type'                   => ['required', Rule::in(['promo', 'promo-spesial'])],
               'set_promo.*'            => ['required'],
               'set_promo.*.from'       => ['required', Rule::in($data)],
               'set_promo.*.id_produks' => ['required', 'exists:produks,id'],
               'set_promo.*.discount'   => ['required', 'digits_between:0, 2'],
               'set_promo.*.expired'    => ['required'],
               'set_promo.*.ket'        => ['required']
          ];
     }
}