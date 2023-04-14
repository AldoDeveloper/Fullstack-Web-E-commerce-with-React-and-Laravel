<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

class UlasanBuktiImages extends Model
{
    use HasFactory;
    
    protected $fillable = [
        'id_ulasan',
        'tokens',
        'path'
    ];

    protected $hidden = [
        'created_at',
        'updated_at',
    ];

    protected function path() : Attribute{
        return Attribute::make(get: fn($values) => Storage::disk('publish')->url($values));
    }

    public function ulasan(){
        return $this->hasOne(UlasanProduk::class, 'id', 'id_ulasan');
    }
}
