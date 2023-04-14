<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\activationProduks;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class ActivationProduksSeeder extends Seeder
{
    public function run()
    {
        activationProduks::create([
            'produks_id'   => 1,
            'produk_type'  => 'Sepatu Futsal Sedang Tren',
            'stock'        => 1000,
            'sold'         => 10,
            'data'          => ['id' => Str::orderedUuid()]
        ]);
        activationProduks::create([
            'produks_id'   => 2,
            'produk_type'  => 'Sepatu Pantopel Pria Ukuran 40-42',
            'stock'        => 1500,
            'sold'         => 1,
            'data'          => ['id' => Str::orderedUuid()]
        ]);
        activationProduks::create([
            'produks_id'   => 3,
            'produk_type'  => 'Sepatu Pantopel Pria dan Wanita Cocok untuj Sekolah.',
            'stock'        => 500,
            'sold'         => 20,
            'data'          => ['id' => Str::orderedUuid()]
        ]);
        activationProduks::create([
            'produks_id'   => 4,
            'produk_type'  => 'Sepatu Bayi umur 2-3 Tahun Terlaris...',
            'stock'        => 2500,
            'sold'         => 100,
            'data'          => ['id' => Str::orderedUuid()]
        ]);
        activationProduks::create([
            'produks_id'   => 5,
            'produk_type'  => 'Sepatu Bayi Perempuan Size 2 Terlaris...',
            'stock'        => 3000,
            'sold'         => 500,
            'data'          => ['id' => Str::orderedUuid()]
        ]);
        activationProduks::create([
            'produks_id'   => 6,
            'produk_type'  => 'Sepatu Bayi Perempuan Size 2 Terlaris...',
            'stock'        => 1200,
            'sold'         => 500,
            'data'          => ['id' => Str::orderedUuid()]
        ]);
        activationProduks::create([
            'produks_id'   => 7,
            'produk_type'  => 'Baju Pria lengan Pendek Keren...',
            'stock'        => 1200,
            'sold'         => 500,
            'data'          => ['id' => Str::orderedUuid()]
        ]);
        activationProduks::create([
            'produks_id'   => 8,
            'produk_type'  => 'Baju Kaos Pria Distro BLACK..',
            'stock'        => 400,
            'sold'         => 50,
            'data'         => ['id' => Str::orderedUuid()]
        ]);
        activationProduks::create([
            'produks_id'   => 9,
            'produk_type'  => 'iPhone 13 Pro Max Warna Pink',
            'stock'        => 700,
            'sold'         => 10,
            'data'         => ['id' => Str::orderedUuid()]
        ]);
        activationProduks::create([
            'produks_id'   => 10,
            'produk_type'  => 'Meja Belajar Cocok untuk Anak Sekolah..',
            'stock'        => 360,
            'sold'         => 60,
            'data'         => ['id' => Str::orderedUuid()]
        ]);
    }
}
