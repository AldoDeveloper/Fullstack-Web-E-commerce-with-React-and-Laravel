<?php

namespace Database\Seeders;

use App\Models\thumbnailGrosirProduk;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ThumbnailGrosirProdukSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        thumbnailGrosirProduk::create([
            'grosir_id' => 1,
            'path'      => 'futsal_grosir_2.webp',
        ]);
        thumbnailGrosirProduk::create([
            'grosir_id' => 1,
            'path'      => 'futsal_grosir_2.webp',
        ]);
        thumbnailGrosirProduk::create([
            'grosir_id' => 1,
            'path'      => 'futsal_grosir_2.webp',
        ]);
        thumbnailGrosirProduk::create([
            'grosir_id' => 1,
            'path'      => 'futsal_grosir_2.webp',
        ]);
    }
}
