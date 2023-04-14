<?php

namespace App\Request;

use App\interface\interfaceRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator as FacadesValidator;
use Illuminate\Validation\Rule;
use Illuminate\Validation\Validator;

class TypePengirimanRequest implements interfaceRequest{
    
    public Request $request;
    public function __construct(Request $request)
    {
        $this->request = $request;
    }

    public function validation(): Validator
    {
        $credentials = FacadesValidator::make($this->request->all(), $this->rules(), $this->messages());
        return $credentials;                                                                                                                                           
    }

    public function add_input(array $inputs) : void{
        $this->request->merge($inputs);
    }

    public function validation_error_messages() : array{
        return $this->validation()->messages()->toArray();
    }

    public function rules() : array{
        return
         [
            'options'        => ['required'],
            'options.for'    => ['required', Rule::in(['admin', 'users', 'grosir'])],
            'options.method' => ['required', Rule::in(['created', 'updated', 'read'])]
         ];
    }

    public function messages(): array
    {
        return [];
    }
}