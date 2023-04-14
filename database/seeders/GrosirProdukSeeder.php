<?php

namespace Database\Seeders;

use App\Models\grosirProduk;
use App\Trait\Format;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Storage;

class GrosirProdukSeeder extends Seeder
{
    use Format;
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        grosirProduk::create([
            'produks_id'   => 1,
            'grosir_name'  => 'Grosir Produk Sepatu Olahraga Futsal Berbagai macam Warna',
            'keys'         => $this->configKeyRequest('Grosir Produk Sepatu Olahraga Futsal Berbagai macam Warna'),
            'price_grosir' => 1500000,
            'cover'        => 'Grosir/futsal_grosir.jpg',
            'stock_grosir' => 100,
            'sold_grosir'  => 20,
        ]);
    }
}
