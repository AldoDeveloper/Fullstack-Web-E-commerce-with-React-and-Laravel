<?php

namespace App\Trait\Produk;

use App\Trait\Format as format;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Redis;

trait Selection{

     use format;
     public final function selectionPromo(string $type):string{
          $selection = '';
          switch($type){
               case 'promo':
                    $selection = 'produk_';
                    break;
                case 'promo-spesial':
                    $selection = 'produk_spesial';
                    break;
                default:
                    break;
          }
          return $selection;
     }
     
     public function getPromo(string $promortions, Model $produks) : void{
          $promo  = Redis::get($this->selectionPromo($promortions) . $produks->id);
          $data  = $produks->data;

          if($promo !== null){
               $getPromo = json_decode($promo);
               $getPromo->expired = Redis::ttl($this->selectionPromo($promo). $produks->id);
               $produks->konditions      = $promortions;
               $produks->price_discount  = $this->formatRp($produks->price - ($produks->price * ($getPromo->discount / 100)));
               $data = $getPromo;
               $produks->data = $data;
          }
     }

     public function format(Model $produk) : void {
          $produk['format'] =
           [
               'price' => $this->formatRp($produk->price),
               'sold'  => $this->formatNumber($produk->sold),
               'stock' => $this->formatNumber($produk->stock)
          ];
     }
}