<?php

namespace Database\Seeders;

use App\Models\UlasanProduk;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UlasanProdukSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        UlasanProduk::create([
            'id_produk' => 1,
            'id_user'   => 1,
            'message'   => 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et excepturi exercitationem quasi.',
            'start'     => 5,
        ]);
        UlasanProduk::create([
            'id_produk' => 1,
            'id_user'   => 2,
            'message'   => 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et excepturi exercitationem quasi.',
            'start'     => 4,
        ]);
    }
}
