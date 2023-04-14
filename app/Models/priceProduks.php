<?php

namespace App\Models;

use App\Redis\Produk\promoProdukRedis;
use App\Trait\Produk\Setting;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class priceProduks extends Model
{
    use HasFactory, Setting;
    
    protected $fillable = [
        'produks_id',
        'id_type',
        'type',
        'price'
    ];

    protected $hidden = [
        'created_at',
        'updated_at',
    ];

    public function produks(){
        return $this->hasOne(Produk::class, 'id', 'produks_id');
    }
     
     public function type(){
        return $this->hasOne(typePrice::class, 'id', 'id_type')
            ->where('type', $this->typeDataPrice());
     }

     public function typeLangganan(){
        return $this->hasOne(typePrice::class, 'id', 'id_type')->where('type', 'langganan');
     }

     public function promo(): Attribute{
        return Attribute::make(function($val, $attr){
            $type  = $attr['promo']->options->type;
            $promo = new promoProdukRedis;
            $data  = $promo::all()
                ->toCollect()
                ->where('id_produks', $attr['produks_id'])
                ->where('from', $type);
            if($data->count() <= 1) return $data->first();
            else return $data;
        });
     }
}
