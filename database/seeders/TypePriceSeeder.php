<?php

namespace Database\Seeders;

use App\Models\typePrice;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class TypePriceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        typePrice::create([
            'type'     => 'original',
            'discount' => 0,
        ]);

        typePrice::create([
            'type'     => 'langganan',
            'discount' => 10,
        ]);

        typePrice::create([
            'type'     => 'typo',
            'discount' => 30,
        ]);
    }
}
