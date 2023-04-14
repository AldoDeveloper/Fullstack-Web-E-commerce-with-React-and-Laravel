<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreProdukRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'produks.*'                   => ['required'],
            'produks.*.category_id'       => ['required', 'exists:category_produks,id'],
            'produks.*.category_type'     => ['required', 'exists:category_produks,name'],
            'produks.*.name_produk'       => ['required'],
            'produks.*.cover'             => ['required', 'mimes:png,jpg,webp'],
            'produks.*.activation'        => ['required'],
            'produks.*.activation.stock'  => ['required'],
            'produks.*.activation.sold'   => ['required'],
            'produks.*.setPrice'          => ['required'],
            'produks.*.setPrice.*.type'   => ['required'],
            'produks.*.setPrice.*.price'  => ['required']
        ];
    }
}
