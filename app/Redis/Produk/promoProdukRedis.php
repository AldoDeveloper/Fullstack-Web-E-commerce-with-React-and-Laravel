<?php

namespace App\Redis\Produk;

class promoProdukRedis extends modelsRedis{  
     protected CONST KEYS  = 'promo*';
     protected CONST TABLE = ['id_produks', 'from', 'discount', 'ket', 'expired'];  
     
     public function __construct()
     {
          self::$global_keys = self::KEYS;
          self::$TABLE   = self::TABLE;
          self::$expired = true;
     }
}