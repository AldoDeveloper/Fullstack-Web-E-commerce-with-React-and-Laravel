<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class activationGrosirProduk extends Model
{
    use HasFactory;

    protected $fillable = [
        'grosir_produk_id',
        'grosir_type',
        'stock',
        'data'
    ];

    protected $casts = [
        'data' => 'array'
    ];
}
