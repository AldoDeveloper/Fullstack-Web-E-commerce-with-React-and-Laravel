<?php

namespace App\Models;

use App\Koleksi\Produk\FormatProdukSetting;
use App\Koleksi\Produk\Helper;
use App\Koleksi\Produk\Promo;
use App\Trait\Format ;
use App\Trait\Produk\Selection;
use Exception;
use Illuminate\Database\Eloquent\Casts\Attribute ;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Storage;

class Produk extends Model
{
    use HasFactory, Format, Selection;

    protected $fillable = [
        'category_id',
        'name_produk',
        'cover',
        'data',
        'tokens',
        'category_type',
        'price_original',
        'keys'
    ];

    protected $appends = [
        'stock',
        'sold',
    ];
    
    protected $casts = ['data' => 'array'];

    protected function cover() : Attribute{
        return Attribute::make(get: fn($value) => Storage::disk('publish')->url($value));
    }
    
    protected function helper() : Attribute{
        return Attribute::make(function(Helper $val, $attr){
        }, function($value){
            if($value instanceof Helper){
                return $value->validation;
            }
        });
    }
    protected function promoProduk() : Attribute{
        return Attribute::make(function($val, array $attr){
            if(Arr::exists($attr, 'promo_produk')){
                if(is_array($attr['promo_produk'])){
                    try{
                        [$type, $filter] = $attr['promo_produk'];
                        $promo = new Promo();
                        $promo->setPromo($type, $attr['id'], $filter, $attr['price']);
                        return $promo->promo;
                    }catch(Exception $e){
                        return $e->getMessage();
                    }
                }
                return null;
            }
        });
    }

    protected function format(): Attribute{
        return Attribute::make(function($val, $attr){
            if(Arr::exists($attr, 'format')){
              return new FormatProdukSetting(Arr::only($attr['format'], ['price', 'sold', 'stock']));
            }
            return null;
        });
    }
    
    protected function stock() : Attribute{
        return Attribute::make(function($val, $attr){
            $attr['stock'] = $this->activation_produks()->get()->first();
            $stock = $attr['stock']->stock;
            unset($attr);
            return $stock;
        });
    }

    protected function sold() : Attribute{
        return Attribute::make(function($val, $attr){
            $attr['sold'] = $this->activation_produks()->get()->first();
            $sold = $attr['sold']->sold;
            unset($attr);
            return $sold;
        });
    }

    public function images(){
        return $this->hasMany(thumbnailProduk::class, 'produks_id', 'id');
    }

    public function activation_produks(){
        return$this->hasOne(activationProduks::class, 'produks_id', 'id');
    }

    protected function priceDiscount():Attribute{
        return Attribute::make(function($values, $attributes){
            return $values;
        });
    }

    public function infoDetails(){
        return $this->hasMany(infoDetailProduk::class, 'id_produk', 'id');
    }

    public function start(){
        return $this->hasOne(startProduk::class,'produks_id', 'id');
    }
    
    public function comment(){
        return $this->hasMany(commentProduk::class, 'produks_id', 'id');
    }

    public function grosir(){
        return $this->hasOne(grosirProduk::class, 'produks_id', 'id');
    }

    public function price(){
        return $this->hasMany(priceProduks::class, 'produks_id', 'id');
    }

    public function ulasanProduk(){
        return $this->hasMany(ulasanProduk::class, 'id_produk', 'id');
    }
    
    public function typePromo(){
        return $this->hasOne(PromoProduk::class, 'id_produk', 'id');
    }
}
