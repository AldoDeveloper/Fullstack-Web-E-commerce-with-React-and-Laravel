<?php

namespace App\Models\Info;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class infoToko extends Model
{
    use HasFactory;

    protected $fillable = [
        'key',
        'config'
    ];

    protected $casts = [
        'config' => 'array'
    ];
    
    public function config():Attribute{
        return Attribute::make(get: fn($values) => json_decode($values));
    }
}
