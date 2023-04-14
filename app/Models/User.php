<?php

namespace App\Models;

use App\Observers\Config;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use PHPOpenSourceSaver\JWTAuth\Contracts\JWTSubject;
use Illuminate\Support\Str;

class User extends Authenticatable implements JWTSubject
{
    use HasApiTokens, HasFactory, Notifiable;
    
    protected $fillable = [
        'name',
        'email',
        'password',
        'role'
    ];

    protected $hidden = [
        'password',
        'remember_token',
    ];

    protected $casts = [
        'email_verified_at' => 'datetime'
    ];
    
    protected function isAdmin():Attribute{ 
        return new Attribute(
            get: fn() => true,
        );
    }

    public function getJWTIdentifier()
    {
        return $this->getKey();
    }

    public function getJWTCustomClaims()
    {
        return [];
    }
    
    public function profile(){
       return $this->hasOne(Profile::class, 'id');
    }

    public function langganan(){
        return $this->hasOne(subscriberProduk::class, 'users_id', 'id');
    }

    public function keranjang(){
        return $this->hasMany(cartProduk::class, 'id_users', 'id');
    }
}
