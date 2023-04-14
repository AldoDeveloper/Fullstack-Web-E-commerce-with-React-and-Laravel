<?php

namespace App\Redis\Produk;


class PromoRedisProdukGrosir extends modelsRedis{

    protected CONST KEYS  = 'grosir_promo*';
    protected CONST TABLE = ['id_grosir', 'discount', 'ket', 'expired'];

    public function __construct()
    {
        self::$global_keys = self::KEYS;
        self::$TABLE   = self::TABLE;
        self::$expired = true;
    }
}