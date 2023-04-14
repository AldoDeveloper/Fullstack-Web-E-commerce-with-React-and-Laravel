<?php

namespace App\Models;

use App\Trait\Uuids;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

class thumbnailGrosirProduk extends Model
{
    public $timestamps  = false;
    use HasFactory, Uuids;

    protected $fillable = [
        'grosir_id',
        'path',
    ];

    protected function path() : Attribute{
        return Attribute::make(get: fn($values, $attr) => Storage::disk('publish')->url('Grosir/'. $attr['path']));
    }

}
