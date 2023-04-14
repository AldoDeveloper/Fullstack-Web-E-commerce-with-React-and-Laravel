<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class infoDetailProduk extends Model
{
    use HasFactory;

    protected $fillable = [
        'id_produk',
        'type',
        'info_detail'
    ];
}
