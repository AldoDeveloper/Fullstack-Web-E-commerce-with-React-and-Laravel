<?php

namespace Database\Seeders;

use App\Models\categoryProduk;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class CategoryProdukSeeder extends Seeder
{
    public function run()
    {
        categoryProduk::create([
            'container_produk_id' => 3,
            'name'      => 'Sepatu Laki-laki',
            'path'      => Storage::disk('publish')->url('sneaker.png'),
            'tokens'    => ["id" => Str::orderedUuid(), 'tokens' => Str::random(20)],
        ]);
        categoryProduk::create([
            'container_produk_id' => 3,
            'name'      => 'Sepatu Bayi',
            'path'      => Storage::disk('publish')->url('baby-shoes.png'),
            'tokens'    => ["id" => Str::orderedUuid(), 'tokens' => Str::random(20)],
        ]);
        categoryProduk::create([
            'container_produk_id' => 4,
            'name'      => 'Meja',
            'path'      => Storage::disk('publish')->url('worker.png'),
            'tokens'    => ["id" => Str::orderedUuid(), 'tokens' => Str::random(20)],
        ]);
        categoryProduk::create([
            'container_produk_id' => 2,
            'name'      => 'Kemeja Perempuan',
            'path'      => Storage::disk('publish')->url('dress.png'),
            'tokens'    => ["id" => Str::orderedUuid(), 'tokens' => Str::random(20)],
        ]);
        categoryProduk::create([
            'container_produk_id' => 1,
            'name'      => 'Iphone',
            'path'      => Storage::disk('publish')->url('iphone.jpeg'),
            'tokens'    => ["id" => Str::orderedUuid(), 'tokens' => Str::random(20)],
        ]);
        categoryProduk::create([
            'container_produk_id' => 1,
            'name'      => 'Laptop',
            'path'      => Storage::disk('publish')->url('laptop.jpg'),
            'tokens'    => ["id" => Str::orderedUuid(), 'tokens' => Str::random(20)],
        ]);
        categoryProduk::create([
            'container_produk_id' => 2,
            'name'      => 'Baju Laki-laki',
            'path'      => Storage::disk('publish')->url('bj_l_bg.webp'),
            'tokens'    => ["id" => Str::orderedUuid(), 'tokens' => Str::random(20)],
        ]);
    }
}
