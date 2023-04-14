<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PromoProduk extends Model
{
    public $timestamps = false;
    CONST created_at = false;
    CONST updated_at = false;
    
    use HasFactory;
    protected $fillable = [
        'id_produk',
        'type_promo',
        'tokens',
        'expired',
        'discount',
    ];

    protected $casts = [
        'expired' => 'timestamp'
    ];

    public function produk(){
        return $this->hasOne(Produk::class, 'id', 'id_produk');
    }
}
