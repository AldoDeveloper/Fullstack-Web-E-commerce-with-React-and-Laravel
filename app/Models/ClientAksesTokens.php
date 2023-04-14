<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ClientAksesTokens extends Model
{
    use HasFactory;

    protected $fillable = [
        'client_name',
        'tokens',
        'expired',
    ];

    protected $casts = [
        'tokens' => 'encrypted:array'
    ];
}
