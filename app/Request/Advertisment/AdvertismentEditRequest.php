<?php

namespace App\Request\Advertisment;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator as FacadesValidator;
use Illuminate\Validation\Rule;
use Illuminate\Validation\Rules\File;
use Illuminate\Validation\Validator;

class AdvertismentEditRequest{
     
     public Request $request;
     protected Validator $validate;

     public function __construct(Request $request)
     {    
          $this->request = $request;
          $this->validate = $this->validation();
     }

     public function validation(): Validator{
          $credentials = FacadesValidator::make($this->request->all(), $this->rules(), $this->messages());
          return $credentials;
     }

     public function failsValidations(): bool{
          return $this->validate->fails();
     }

     public function messageFailsValidations(): array{
          return $this->validate->messages()->toArray();
     }

     protected function rules(): array{
          return [
               'advertisment'         => ['required'],
               'advertisment.title'   => ['required', 'max:120'],
               'advertisment.ket'     => ['required'],
               'advertisment.link'    => ['required'],
               'advertisment.path'    => [
                    'required', 'mimes:png,jpg,web',
                     File::image()->max(12 * 1024)
                    ->dimensions(Rule::dimensions()
                    ->minWidth(970)->minHeight(298)
                    ->maxWidth(1000)->maxHeight(300))], 
          ];
     }

     protected function messages() : array{
          return [];
     }
}