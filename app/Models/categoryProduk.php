<?php

namespace App\Models;

use App\Casts\Json;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class categoryProduk extends Model
{
    use HasFactory;

    protected $fillable = [
        'container_produk_id',
        'name',
        'path',
        'tokens'
    ];

    protected $hidden = ['created_at', 'updated_at'];
    
    protected $casts = [
        'tokens'   => 'encrypted:array'
    ];

    public function produk(){
        return $this->hasMany(Produk::class, 'category_id', 'id');
    }
    
    protected function data():Attribute{
        return Attribute::make(get: fn($val, $attr) => $val);
    }

    public function grosir(){
        return $this->hasMany(grosirProduk::class, 'category_id', 'id');
    }
}
