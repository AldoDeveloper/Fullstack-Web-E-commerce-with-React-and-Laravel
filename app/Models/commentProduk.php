<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class commentProduk extends Model
{
    use HasFactory;

    protected $fillable = [
        'users_id',
        'produks_id',
        'message',
    ];

    public function resComment(){
        return $this->hasMany(resCommendProduk::class, 'comment_id', 'id');
    }
}
