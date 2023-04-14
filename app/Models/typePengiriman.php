<?php

namespace App\Models;

use App\Trait\Format;
use App\Trait\Uuids;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

class typePengiriman extends Model
{
    public $timestamps = false;
    use HasFactory, Uuids, Format;

    protected $fillable = [
        'name_type',
        'biaya',
        'keterangan',
        'thumbnails'
    ];

    protected $appends = ['format_biaya'];

    protected function thumbnails() : Attribute{
        return Attribute::make(get: fn($val, $attr) => Storage::disk('publish')->url($attr['thumbnails']));
    }

    protected function formatBiaya() : Attribute{
        return Attribute::make(get: fn($val, $attr) => $this->formatRp($attr['biaya']));
    }
}
