<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class startProduk extends Model
{
    use HasFactory;

    protected $fillable = [
        'users_id',
        'produks_id',
        'produk_type',
        'count'
    ];
}
