<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Arr;

class typePrice extends Model
{
    public $timestamps = false;
    use HasFactory;
    
    protected $fillable = [
        'type', 'discount'
    ];

    protected $appends = [
        'discount_str'
    ];

    protected function discountStr() : Attribute{
        return Attribute::make(function($values, $attr){
            if(Arr::exists($attr, 'discount')){
                return strval($attr['discount'] . '%');
            }
           return null;
        });
    }

}
