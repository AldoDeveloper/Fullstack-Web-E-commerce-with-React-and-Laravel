<?php

namespace App\Trait;

trait Format {
     public function formatNumber($number){
          $n = (0 + str_replace(',', "", $number));
          if(!is_numeric($number)) return false;
          if($n>1000000000000) return round(($n/1000000000000),1).'tl';
          else if($n > 1000000000) return round(($n/1000000000),1).'ml';
          else if($n > 1000000) return round(($n/1000000),1).'jt';
          else if($n >= 1000) return round(($n/1000),1).'rb';
          else return $number;
     }

     public function formatRp(int $number): string{
          return 'Rp ' . number_format($number, 2, ',', '.');
      }

      public function validationResponses(array $data) : array{
          $messages = [];
          foreach($data as $key => $values){
               [$cvr]  = $values;
               $messages[substr($key, 8, strlen($key))] = $cvr;
          }
          return $messages;
      }

      protected function cutStr(string $str) : int{
          return strlen($str) - 2;
      }

      public function validationResponseAdvertisment(array $data) : array{
          $messages =[];
          foreach($data as $key => $values){
               [$validationMsg] = $values;
               $messages[$key] = $validationMsg;
          }
          return $messages;
      }
      
      public function configKeyRequest(string $keys) : string{
          return strtolower(join('-', explode(' ', $keys)));
      }
}
