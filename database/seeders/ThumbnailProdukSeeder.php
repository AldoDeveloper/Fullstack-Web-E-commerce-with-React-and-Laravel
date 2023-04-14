<?php

namespace Database\Seeders;

use App\Models\thumbnailProduk;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class ThumbnailProdukSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        thumbnailProduk::create([
            'produks_id' => 1,
            'tokens'     => Str::orderedUuid(),
            'path'       => 'sepatu-bayi-produk.jpg',
        ]);
        thumbnailProduk::create([
            'produks_id' => 1,
            'tokens'     => Str::orderedUuid(),
            'path'       => 'sepatu-bayi-produk.jpg',
        ]);
        thumbnailProduk::create([
            'produks_id' => 1,
            'tokens'     => Str::orderedUuid(),
            'path'       => 'sepatu-bayi-produk.jpg',
        ]);
    }
}
