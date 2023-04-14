<?php

namespace Database\Seeders;

use App\Models\containerCategoryProduk;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class ContainerCategoryProdukSeeder extends Seeder
{
    public function run()
    {
        containerCategoryProduk::create([
            'type'    => 'Elektronik',
            'tokens'  => Str::random(40)
        ]);
        containerCategoryProduk::create([
            'type'    => 'Baju',
            'tokens'  => Str::random(40)
        ]);
        containerCategoryProduk::create([
            'type'    => 'Sepatu',
            'tokens'  => Str::random(40)
        ]);
        containerCategoryProduk::create([
            'type'    => 'Prabot Rumah',
            'tokens'  => Str::random(40)
        ]);
        containerCategoryProduk::create([
            'type'    => 'Celana',
            'tokens'  => Str::random(40)
        ]);
    }
}
