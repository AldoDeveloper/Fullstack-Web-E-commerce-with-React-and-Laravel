<?php

namespace App\Redis\Produk;

class Selection extends modelsRedis{
   
   private CONST KEYS = 'selection*';
   protected CONST TABLE = ['id', 'title', 'tokens', 'type', 'keys'];
   
   public function __construct()
   {
      self::$global_keys = self::KEYS;
      self::$TABLE = self::TABLE;
   }
    
}