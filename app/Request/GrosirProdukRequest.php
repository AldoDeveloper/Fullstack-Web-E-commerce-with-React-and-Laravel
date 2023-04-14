<?php

namespace App\Request;

use App\interface\interfaceRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator as FacadesValidator;
use Illuminate\Validation\Validator;

class GrosirProdukRequest implements interfaceRequest{
    
    public Request $request;
    public function __construct(Request $request)
    {
        $this->request = $request;
    }

    public function validation(): Validator
    {
        return FacadesValidator::make($this->request->all(), $this->rules(), $this->messages());
    }
    public function rules(): array
    {
        return [];
    }

    public function messages(): array
    {
        return [];
    }
}