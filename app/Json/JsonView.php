<?php

namespace App\Json;

use ErrorException;
use Illuminate\Support\Arr;

class JsonView{
     public $view;
     public function __get($name)
     {
          try{
               if(Arr::exists($this->view, $name)){
                    return $this->view[$name];
               }
          }catch(ErrorException $e){
               return $e->getMessage();
          }
     }
     public function __set($name, $value)
     {
          return $this->view[$name] = $value;
     }
}