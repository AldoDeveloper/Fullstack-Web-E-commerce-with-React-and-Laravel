<?php

namespace App\Service\Setting;

use App\Service\Setting\Price\ListPriceSettingPromo;
use App\Trait\Produk\Setting;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Collection;

class SettingListProdukLangganan{

     use Setting;
     private static $list;
     private CONST KEYS = 'attr';

     public static function add(Model $produk){
          if(!self::$list instanceof self){
               self::$list = new self;
          }
          self::$list->{self::KEYS} = $produk->with(['price' => ['typeLangganan']]);
          return self::$list;
     }

     public  function __call($name, $arguments)
     {
          array_unshift($arguments, self::$list->{self::KEYS});
          $this->{self::KEYS} = call_user_func_array($name, $arguments);
          return $this;
     }

     public function get() : Collection{
          return ListPriceSettingPromo::set($this->{self::KEYS})
               ->type('typeLangganan')
               ->promo()
               ->format()
               ->get();
     }

}