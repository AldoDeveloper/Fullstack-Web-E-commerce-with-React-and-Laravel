<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

class thumbnailProduk extends Model
{
    use HasFactory;

    protected $fillable = [
        'path',
        'tokens',
        'produks_id',
    ];

    protected $hidden = [
        'created_at',
        'updated_at'
    ];

    protected function path() : Attribute{
        return Attribute::make(get:fn($val) => Storage::disk('publish')->url($val));
    }
}
