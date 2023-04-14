<?php

namespace App\Api;

class ContextApi extends RegisterContext{

     public final static function  run(){
          foreach((new ContextApi)->call() as $api){
               $api->boot();
          }
     }

     protected function call(){
          foreach($this->register() as $class){
               yield new $class;
          }
     }
}