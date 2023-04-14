<?php

namespace Database\Seeders;

use App\Models\Produk;
use App\Trait\Format;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class ProdukSeeder extends Seeder
{
    use Format;
    public function run()
    {
        Produk::create([
            'category_id'    => 1,
            'category_type'  => 'Sepatu Laki-laki',
            'name_produk'    => "Sepatu Futsal Sedang Tren",
            'cover'          => 'sepatu-futsal.jpg',
            'data'           => ['id' => Str::orderedUuid(), 'listImg' => ['img.png', 'img1.png', 'img2.png']],
            'keys'           => $this->configKeyRequest("Sepatu Futsal Sedang Tren"),
            'tokens'         => Str::random(30),
        ]);
        Produk::create([
            'category_id'    => 1,
            'category_type'  => 'Sepatu Laki-laki',
            'name_produk'    => "Sepatu Pantopel Pria Ukuran 40-42",
            'cover'          => 'pantopel.webp',
            'data'           => ['id' => Str::orderedUuid()],
            'keys'           => $this->configKeyRequest("Sepatu Pantopel Pria Ukuran 40-42"),
            'tokens'         => Str::random(30),
        ]);
        Produk::create([
            'category_id'    => 1,
            'category_type'  => 'Sepatu Laki-laki',
            'name_produk'    => "Sepatu Pantopel Pria dan Wanita Cocok untuj Sekolah.",
            'cover'          => 'sepatu-pria-wanita.webp',
            'data'           => ['id' => Str::orderedUuid()],
            'keys'           => $this->configKeyRequest("Sepatu Pantopel Pria dan Wanita Cocok untuj Sekolah."),
            'tokens'         => Str::random(30),
        
        ]);
        Produk::create([
            'category_id'    => 2,
            'category_type'  => 'Sepatu Bayi',
            'name_produk'    => "Sepatu Bayi umur 2-3 Tahun Terlaris...",
            'cover'          => 'sepatu-bayi-produk.jpg',
            'data'           => ['id' => Str::orderedUuid(),'spesial' => true],
            'keys'           => $this->configKeyRequest("Sepatu Bayi umur 2-3 Tahun Terlaris..."),
            'tokens'         => Str::random(30),

        ]);
        Produk::create([
            'category_id'    => 2,
            'category_type'  => 'Sepatu Bayi',
            'name_produk'    => "Sepatu Bayi Perempuan Size 2 Terlaris...",
            'cover'          => 'sepatu-bayi-perempuan.jpg',
            'data'           => ['id' => Str::orderedUuid()],
            'keys'           => $this->configKeyRequest("Sepatu Bayi Perempuan Size 2 Terlaris..."),
            'tokens'         => Str::random(30),
        ]);
        Produk::create([
            'category_id'    => 2,
            'category_type'  => 'Sepatu Bayi',
            'name_produk'    => "Sepatu Bayi Perempuan Size 2 Terlaris...",
            'cover'          => 'sepatu-bayi-perempuan.jpg',
            'data'           => ['id' => Str::orderedUuid()],
            'keys'           => $this->configKeyRequest("Sepatu Bayi Perempuan Size 2 Terlaris..."),
            'tokens'         => Str::random(30),
        ]);
        Produk::create([
            'category_id'    => 7,
            'category_type'  => 'Baju Laki-laki',
            'name_produk'    => "Baju Pria lengan Pendek Keren...",
            'cover'          => 'baju_l_kemeja.webp',
            'data'           => ['id' => Str::orderedUuid()],
            'keys'           => $this->configKeyRequest("Baju Pria lengan Pendek Keren..."),
            'tokens'         => Str::random(30),
            
        ]);
        Produk::create([
            'category_id'    => 7,
            'category_type'  => 'Baju Laki-laki',
            'name_produk'    => "Baju Kaos Pria Distro BLACK..",
            'cover'          => 'bj_kaos_lk.jpg',
            'data'           => ['id' => Str::orderedUuid()],
            'keys'           => $this->configKeyRequest("Baju Kaos Pria Distro BLACK.."),
            'tokens'         => Str::random(30),
        ]);
        Produk::create([
            'category_id'    => 5,
            'category_type'  => 'Iphone',
            'name_produk'    => "iPhone 13 Pro Max Warna Pink",
            'cover'          => 'bj_kaos_lk.jpg',
            'data'           => ['id' => Str::orderedUuid()],
            'keys'           => $this->configKeyRequest("iPhone 13 Pro Max Warna Pink"),
            'tokens'         => Str::random(30),
        ]);
        Produk::create([
            'category_id'    => 3,
            'category_type'  => 'Meja',
            'name_produk'    => "Meja Belajar Cocok untuk Anak Sekolah..",
            'cover'          => 'mj_bljr.jpg',
            'data'           => ['id' => Str::orderedUuid()],
            'keys'           => $this->configKeyRequest("Meja Belajar Cocok untuk Anak Sekolah.."),
            'tokens'         => Str::random(30),
        ]);
    }
}
