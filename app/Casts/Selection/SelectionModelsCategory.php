<?php

namespace App\Casts\Selection;

use App\Koleksi\CategoryProduk\expiredSelectionCategory;
use Exception;
use Illuminate\Contracts\Database\Eloquent\CastsAttributes;

class SelectionModelsCategory implements CastsAttributes
{
    public function get($model, string $key, $value, array $attributes)
    {
        return $value;
    }

    public function set($model, string $key, $value, array $attributes)
    {
        if(! $value instanceof expiredSelectionCategory){
            return throw new Exception('your value is Not Supporting....');
        }
        return $value->type;
    }
}
