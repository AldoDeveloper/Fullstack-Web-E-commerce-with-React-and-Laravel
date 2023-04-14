<?php

namespace App\Koleksi\CategoryProduk;


class expiredSelectionCategory{
     public mixed $type;
     public mixed $days;

     public function __construct($expired)
     {
         $this->handle($expired);
     }

     protected function convertFormat($exp) : array{
          $now    = date_create('now');
          $limit  = date_create($exp);
          $diff   = date_diff($now, $limit);
          $format = $diff->format('%R|%a');
          $converToArray = explode('|', $format);
          return$converToArray;
     }

     protected function handle($expired){
          if(is_null($expired)){
               $this->type = null;
               $this->days = null;
          }else{
               $this->type = $this->convertFormat($expired)[0];
               $this->days = intval($this->convertFormat($expired)[1]);
          }
     }
}