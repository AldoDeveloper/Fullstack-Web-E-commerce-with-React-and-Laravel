<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UlasanProduk extends Model
{
    use HasFactory;
    protected $fillable = [
        'id_produk',
        'id_user',
        'message',
        'start'
    ];

    protected $casts = [
        'created_at' => 'date:Y-m-d H:i:s',
        'updated_at' => 'date:Y-m-d H:i:s'
    ];

    public function imgUlasan(){
        return $this->hasMany(UlasanBuktiImages::class, 'id_ulasan', 'id');
    }
    
    public function user(){
        return  $this->hasOne(User::class, 'id', 'id_user');
    }

    public function produk(){
        return $this->hasOne(Produk::class, 'id', 'id_produk');
    }
}
