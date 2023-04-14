<?php

namespace App\Api\Grosir;

use Illuminate\Support\Facades\Route;

class ApiGrosir{
     
     public function boot() : void{
          Route::get('grosir', function(){
               echo 'Hello Grosir';
          });
     }
}