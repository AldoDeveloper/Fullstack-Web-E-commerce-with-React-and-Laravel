<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class categorySelection extends Model
{
    use HasFactory;

    public $timestamps = false;

    protected $fillable = [
        'category_id',
        'type_name',
        'tokens',
        'expired',
    ];
    protected $hidden = [
        'created_at',
        'updated_at',
        'expired'
    ];

    protected function expired() : Attribute{
        return Attribute::make(get: fn($value) => $value);
    }

    public function categoryContainer(){
        return $this->hasOne(containerCategoryProduk::class, 'id', 'category_id');
    }
}
