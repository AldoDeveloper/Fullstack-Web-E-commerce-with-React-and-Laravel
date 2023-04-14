<?php

namespace App\Models;

use App\Trait\Uuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class cartProduk extends Model
{
    use HasFactory, Uuids;

    protected $fillable = [
        'id_produk',
        'id_users'
    ];

    public function produks(){
        return $this->hasOne(Produk::class, 'id', 'id_produk');
    }
    public function users(){
        return $this->hasOne(User::class, 'id', 'id_users');
    }
}
