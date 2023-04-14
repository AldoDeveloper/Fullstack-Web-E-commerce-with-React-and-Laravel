<?php

namespace Database\Seeders;

use App\Models\categorySelection;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class CategorySelectionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        categorySelection::create([
            'category_id' => 1,
            'type_name'   => 'Elektronik',
            'tokens'      => Str::random(20),
            'expired'     => now('Asia/Jakarta')->setDay(5)->format('Y-m-d H:i:s'),
        ]);
    }
}
