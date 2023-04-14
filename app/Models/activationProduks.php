<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class activationProduks extends Model
{
    use HasFactory;

    protected $fillable = [
        'produks_id',
        'produk_type',
        'stock',
        'sold',
        'data'
    ];

    protected $casts = [
        'data' => 'array',
    ];

    protected $hidden =[
        'produks_id',
        'produk_type',
        'created_at',
        'updated_at',
    ];

    protected function act():Attribute{
        return Attribute::make(function(){
            return 'Hello Worls';
        });
    }
}
