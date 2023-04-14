<?php

namespace App\Redis\Advertisment;

use App\Redis\Produk\modelsRedis;

class AdvertismentRedis extends modelsRedis{

     protected CONST TABLE = ['ket', 'link', 'title', 'path', 'expired'];
     protected CONST KEY   = 'advertisment*';

     public function __construct()
     {
          self::$TABLE = self::TABLE;
          self::$global_keys = self::KEY;
          self::$expired = true;
     }
}