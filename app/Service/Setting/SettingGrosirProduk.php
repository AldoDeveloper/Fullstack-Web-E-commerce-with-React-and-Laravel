<?php

namespace App\Service\Setting{

    use App\Redis\Produk\PromoRedisProdukGrosir;
    use App\Trait\Format;

    class SettingGrosirProduk{
        use Format;
        private static $static;
        private const keys = 'keys';
        private const info = 'info_details';

        public static function set($produk_grosir){
            if(!self::$static instanceof self){
                self::$static = new self;
            }
            self::$static->{self::info} =  $produk_grosir->produk_eceran->infoDetails;
            unset($produk_grosir->produk_eceran);
            $produk_grosir->format_price_old = (new SettingGrosirProduk)->formatRp($produk_grosir->price_grosir);
            self::$static->{SettingGrosirProduk::keys} = $produk_grosir;
            self::$static->{SettingGrosirProduk::keys}->price_old_grosir = $produk_grosir->price_grosir;

            return self::$static;
        }

        public function imagesFlaten(){
            $collect = collect();
            $collect->push($this->{SettingGrosirProduk::keys}->cover);
            $this->{SettingGrosirProduk::keys}->images->map(function($items) use($collect){
                $collect->push($items->path);
                return $items;
            });
            unset($this->{SettingGrosirProduk::keys}->images);
            $this->{SettingGrosirProduk::keys}->images = $collect;
            return $this;
        }

        public function promo(){
            $promo = (new PromoRedisProdukGrosir)->all()
                ->toCollect()
                ->where('id_grosir', $this->{SettingGrosirProduk::keys}->id)
                ->first();
                
            if(!is_null($promo)){
                 $price_produk_grosir = $this->{SettingGrosirProduk::keys}->price_grosir;
                 $this->{SettingGrosirProduk::keys}->price_grosir = $price_produk_grosir - ($price_produk_grosir * ($promo->discount / 100));
                 $price = $this->{self::keys}->price_grosir;
                 $this->{SettingGrosirProduk::keys}->format_price =  $this->formatRp($price);
                 $this->{SettingGrosirProduk::keys}->promo  = $promo;
            }
            else {
                $price = $this->{self::keys}->price_grosir;
                $this->{SettingGrosirProduk::keys}->format_price =  $this->formatRp($price);
                $this->{SettingGrosirProduk::keys}->promo = NULL;
            }
            $this->{SettingGrosirProduk::keys}->list_promo = (new PromoRedisProdukGrosir)
                ->all()
                ->toCollect()
                ->where('id_grosir', $this->{self::keys}->id)
                ->values()
                ->map(function($values){
                    $values->expired = now('Asia/jakarta')->setSecond($values->expired)->utc();
                    return $values;
                });
            return $this;
        }

        public function info(){
            if(!is_null($this->{SettingGrosirProduk::keys})){
                $this->{SettingGrosirProduk::keys}->info_details = $this->{self::info};
            }
            unset(self::$static->{self::info});
            return $this;
        }

        public function hidden(array $arrays){
            $this->{SettingGrosirProduk::keys}->makeHidden($arrays);
            return $this;
        }

        public function get(){
            return $this->{SettingGrosirProduk::keys};
        }
    }
}