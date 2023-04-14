<?php
namespace App\Trait;

use Exception;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

trait ActivationRedis{

     public function convertToCollect($data): Collection{
          $dataCollect = collect();
          if(gettype($data) === 'array'){
               foreach($data as $values){
                    $decode = json_decode($values);
                    $dataCollect->push($decode);
               }
          }else{
               throw new Exception('data is not array...');
          }
          return $dataCollect;
     }

     public function NullAdvertisment(): array{
          $except = [
               "title"   => 'Tidak Ada Promo Yang ditawarkan',
               "link"    => '#',
               "path"    => Storage::disk('publish')->url('khkh.jpg'),
               'id'      => 1,
               'tokens'  => Str::random(20),
          ];
          return $except;
     }
}