<?php

namespace Database\Seeders;

use App\Models\priceProduks;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class priceProduksSeeder extends Seeder
{
    public function run()
    {
        priceProduks::create([
            'produks_id' => 1,
            'id_type'    => 1,
            'price'      => 125000,
        ]);
        priceProduks::create([
            'produks_id' => 1,
            'id_type'    => 2,
            'price'      => 1300000,
        ]);
        priceProduks::create([
            'produks_id' => 1,
            'id_type'    => 3,
            'price'      => 1300000,
        ]);
        priceProduks::create([
            'produks_id' => 2,
            'id_type'    => 1,
            'price'      => 50000,
        ]);
        priceProduks::create([
            'produks_id' => 2,
            'id_type'    => 2,
            'price'      =>  15000,
        ]);
        priceProduks::create([
            'produks_id' => 3,
            'id_type'    => 1,
            'price'      => 20000,
        ]);
        priceProduks::create([
            'produks_id' => 3,
            'id_type'    => 2,
            'price'      => 50000,
        ]);
        priceProduks::create([
            'produks_id' => 3,
            'id_type'    => 3,
            'price'      => 50000,
        ]);
        priceProduks::create([
            'produks_id' => 4,
            'id_type'    => 1,
            'price'      => 450000,
        ]);
        priceProduks::create([
            'produks_id' => 4,
            'id_type'    => 2,
            'price'      => 550000,
        ]);
        priceProduks::create([
            'produks_id' => 5,
            'id_type'    => 1,
            'price'      => 75000,
        ]);
        priceProduks::create([
            'produks_id' => 5,
            'id_type'    => 2,
            'price'      => 85000,
        ]);
        priceProduks::create([
            'produks_id' => 6,
            'id_type'    => 1,
            'price'      => 1000000,
        ]);
        priceProduks::create([
            'produks_id' => 6,
            'id_type'    => 2,
            'price'      => 150000,
        ]);
        priceProduks::create([
            'produks_id' => 7,
            'id_type'    => 1,
            'price'      => 2500000,
        ]);
        priceProduks::create([
            'produks_id' => 7,
            'id_type'    => 2,
            'price'      => 3000000,
        ]);
        priceProduks::create([
            'produks_id' => 8,
            'id_type'    => 1,
            'price'      => 700000,
        ]);
        priceProduks::create([
            'produks_id' => 8,
            'id_type'    => 2,
            'price'      => 850000,
        ]);
        priceProduks::create([
            'produks_id' => 9,
            'id_type'    => 1,
            'price'      => 98000,
        ]);
        priceProduks::create([
            'produks_id' => 9,
            'id_type'    => 2,
            'price'      => 115000,
        ]);
        priceProduks::create([
            'produks_id' => 10,
            'id_type'    => 1,
            'price'      => 987000,
        ]);
        priceProduks::create([
            'produks_id' => 10,
            'id_type'    => 2,
            'price'      => 1000000,
        ]);
        priceProduks::create([
            'produks_id' => 10,
            'id_type'    => 3,
            'price'      => 1000000,
        ]);
    }
}
