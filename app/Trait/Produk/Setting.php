<?php

namespace App\Trait\Produk;
use Illuminate\Support\Facades\Redis;

trait Setting{
     
     public function get_setting_redis(string $keys): array | object | null{
          $keys = Redis::get($keys);
          return is_null($keys) ? null : json_decode($keys);
     }
     
     public function typeDataPrice() : string{
          $data = $this->get_setting_redis('setting_price');
          if(is_null($data)) return 'original';
          return $data->type;
     }

     public function mergeObject(array ...$data) : array{
          return array_merge_recursive($data);
     }
     
     public function except_column(...$key){
          unset($key);
     }
}