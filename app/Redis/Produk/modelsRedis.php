<?php

namespace App\Redis\Produk;
use Illuminate\Support\Arr;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Redis;
use Illuminate\Support\Str;

class modelsRedis{

     private CONST ATTR_CONSTANT = ['id', 'keys'];
     protected static $global_keys;
     static private $args;
     protected static $expired = false;
     protected static array $TABLE = [];

     protected static function keys() : array{    
          return Redis::keys(self::$global_keys);
     }
     protected static function keyValue() : string{
          return substr(self::$global_keys, 0, (strlen(self::$global_keys)) - 1);
     }

     public static function column() : array{
          return array_merge(self::$TABLE, self::ATTR_CONSTANT);
     }

     public static function all(){
          if(!self::$args instanceof self){
               self::$args = new self;
          }
          self::$args->{self::keyValue()} = self::database();
          return self::$args;
     }
     public function __call($name, $arguments)
     {
          array_unshift($arguments, $this->{self::$global_keys});
          $this->{self::$global_keys} = call_user_func_array($name, $arguments);
          return $this;
     }

     protected static function database() : array{
          $array = [];
          foreach(self::keys() as $keys){
               $value = Redis::get($keys);
               if(!is_null($value)){
                    $convert       =  json_decode($value);
                    $convert->keys = $keys;
                    if(self::$expired) $convert->expired = Redis::ttl($keys) < 0 ? null : Redis::ttl($keys);
                    array_push($array, $convert);
               }
          }
          return $array;
     }

     public function where($column, $value) : array | static{
          $array  = [];
          array_map(function($values) use($column, $value, &$array){
               if(Arr::exists((array) $values, $column)){
                    if($values->{$column} === $value){
                         array_push($array, $values);
                    }
               }
          }, $this->{self::keyValue()});
         $this->{self::keyValue()} = $array;
         return $this;
     }
     
     public function first(callable $callback = null){
          $this->{self::keyValue()}  = Arr::first($this->{self::keyValue()});
          return $this;
     }

     public static function find(int $id){
          if(!self::$args instanceof self){
               self::$args = new self;
          }
          self::$args->{self::keyValue()} = Arr::first(array_values(array_filter(self::database(), function($items) use($id){
               return $items->id === $id;
          })));
          return self::$args;
     }

     public function toArray() : array{
          return (array) $this->{self::keyValue()};
     }

     public function toCollect() : Collection{
          return collect($this->{self::keyValue()});
     }

     public function get(){
          return $this->{self::keyValue()};
     }
     
     public function delete(): bool{
          if(is_object($this->{self::keyValue()})){
               if(!is_null($this->{self::keyValue()})){
                    $bool = Redis::del($this->{self::keyValue()}->keys);
                    return $bool === 1 ? true : false;
               }
               return false;
          }
          return false;
     }

     public function create(array $data) : mixed{
          $error   = [];
          $success = [];
          $datad = array_merge_recursive($data, $this->collapsed());
          foreach(self::$TABLE as $keys => $values){
               if(Arr::exists($datad, $values)){
                    foreach($datad as $ky => $val){
                         $success[$ky] = $val;
                    }
               }else{
                    $error[$values] = 'column.required';
               }
          }
          if(count($error) > 0) return $error;
          if(Arr::exists($success, 'keys')){
               Redis::set($success['keys'], json_encode($success));
               if(Arr::exists($success, 'expired')){
                    $this->expired($success['keys'], intval($success['expired']));
                    return true;
               }
               return false;
          }
     }

     private function expired(string $key, int $second) : mixed{
          return Redis::expire($key, $second);
     }

     private function collapsed() : array{
          $collapsed = [];
          foreach(self::ATTR_CONSTANT as $key => $val){
               switch($val){
                    case 'id':
                         $id_incr = self::all()->toCollect()->count() + 1;
                         $collapsed[$val] = $id_incr;
                         break;
                    case 'keys':
                         $collapsed[$val] = self::keyValue() . '_' . Str::random(35);
                         break;
                    default:
                         break;
               }
          }
          return $collapsed;
     }
     public function update(array $data){

     }
}