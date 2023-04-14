<?php

namespace App\Redis\Produk;

class Setting extends modelsRedis{
     private   CONST KEYS = 'setting*';
     protected CONST TABLE = [];
     
     public function __construct()
     {
          self::$global_keys = self::KEYS;
     }
}