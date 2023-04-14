<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class containerCategoryProduk extends Model
{
    use HasFactory;

    protected $fillable =[
        'type',
        'tokens'
    ];

    public function category(){
        return $this->hasMany(categoryProduk::class, 'container_produk_id', 'id');
    }
}
