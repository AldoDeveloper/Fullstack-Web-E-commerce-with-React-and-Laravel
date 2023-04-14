<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

class grosirProduk extends Model
{
    use HasFactory;
    
    protected $fillable = [
        'produks_id',
        'grosir_name',
        'keys',
        'price_grosir',
        'cover',
        'stock_grosir',
        'sold_grosir'
    ];

    protected function cover() : Attribute{
        return Attribute::make(get: fn($values, $attr) => Storage::disk('publish')->url($attr['cover']));
    }

    public function images(){
        return $this->hasMany(thumbnailGrosirProduk::class, 'grosir_id', 'id');
    }

    public function produk_eceran(){
        return $this->hasOne(Produk::class, 'id', 'produks_id');
    }
    public function eceran(){
        return $this->hasOne(Produk::class, 'id', 'produks_id');
    }
}
