<?php

namespace App\interface;
use Illuminate\Validation\Validator;

interface interfaceRequest{
     public function rules() : array;
     public function messages() : array;
     public function validation() : Validator;
}