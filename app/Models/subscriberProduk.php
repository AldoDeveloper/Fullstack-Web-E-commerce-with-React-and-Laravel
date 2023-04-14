<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class subscriberProduk extends Model
{
    use HasFactory;

    protected $fillable = [
        'users_id',
        'email',
        'tokens',
        'code_langganan',
        'status'
    ];
}
