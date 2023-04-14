<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Profile extends Model
{
    use HasFactory;

    protected $fillable = [
        'id_users',
        'path',
        'alamat',
    ];

    protected $hidden = [
        'created_at',
        'updated_at',
        'alamat',
        'id_users'
    ];

    protected $casts = [
        'alamat' => 'array'
    ];
}
