<?php

namespace App\Json;

use ErrorException;
use Illuminate\Support\Arr;

class JsonConfigFindProduk{

     public $atttibute;
     public function __get($name)
     {
          try{
               if(Arr::exists($this->atttibute, $name)){
                    return $this->atttibute[$name];
               }
          }catch(ErrorException $e){
               return $e->getMessage();
          }
     }
     public function __set($name, $value)
     {
          return $this->atttibute[$name] = $value;
     }
}