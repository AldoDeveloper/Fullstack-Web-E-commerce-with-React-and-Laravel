<?php

namespace App\Request;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator as FacadesValidator;
use Illuminate\Validation\Validator;

class StoreProdukRequest{

     public Request $request;
     public Validator $validate;

     public function __construct(Request $request)
     {
          $this->request  = $request;
          $this->validate = $this->validation();
     }

     protected function validation() : Validator
     {
          $credentials = FacadesValidator::make($this->request->all(), $this->rule(), $this->message());
          return $credentials;
     }

     protected function rule() : array{
          return [
               'produks.*'                   => ['required'],
               'produks.*.category_id'       => ['required', 'exists:category_produks,id'],
               'produks.*.category_type'     => ['required', 'exists:category_produks,name'],
               'produks.*.name_produk'       => ['required', 'unique:produks'],
               'produks.*.cover'             => ['required', 'mimes:png,jpg,webp'],
               'produks.*.activation'        => ['required'],
               'produks.*.activation.stock'  => ['required'],
               'produks.*.activation.sold'   => ['required'],
               'produks.*.setPrice'          => ['required'],
               'produks.*.setPrice.*.type'   => ['required'],
               'produks.*.setPrice.*.price'  => ['required']
          ];
     }
     public function message() : array{
          return $this->messageConfig();
     }

     protected function messageConfig() : array{
          $messages = [];     
          foreach($this->request->produks as $key => $value){
             $messages = $this->titleMessages($key, $messages);
             $messages = $this->categoryIDmessages($key, $messages);
          }
          return $messages;
     }
     protected function titleMessages(int $key, array $messages) : array{
          $messages['produks.' . $key . '.name_produk.required'] = 'Judul Produk ke-' . $this->countID($key) . ' Wajib diisi...';
          $messages['produks.' . $key . '.name_produk.unique']   = 'Judul Produk ke-' . $this->countID($key) . ' Sudah digunakan..';
          return $messages;
     }
     protected function categoryIDmessages(int $key, array $messages) : array{
          $messages['produks.' . $key . '.category_id.required'] = 'Category Produk Id ke-' . $this->countID($key) . ' Wajib disi...';
          $messages['produks.' . $key . '.category_id.exists']   = 'Category produk ke-' . $this->countID($key) . ' Tidak terdaftar...';
          return $messages;
     }

     protected function countID(int $id): int{
          return ($id + 1);
     }
}