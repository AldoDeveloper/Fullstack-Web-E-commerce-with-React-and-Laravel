<?php

namespace Database\Seeders;

use App\Models\infoDetailProduk;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class InfoDetailProdukSeeder extends Seeder
{
    public function run()
    {
        infoDetailProduk::create([
            'id_produk' => 1,
            'type'      => 'detail',
            'info_detail'      =>
             '<ol>
                <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae at aperiam alias. Quasi commodi possimus fugit dolores nemo eveniet perspiciatis.</li>
                <li>Aldo Ratmawan</li>
                <li>Aldo Ratmawan</li>
                <li>Aldo Ratmawan</li>
                <li>Aldo Ratmawan</li>
             </ol>',
        ]);
        infoDetailProduk::create([
            'id_produk' => 1,
            'type'      => 'info',
            'info_detail'      =>
             '<ol>
                <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae at aperiam alias. Quasi commodi possimus fugit dolores nemo eveniet perspiciatis.c</li>
                <li>Aldo Ratmawan</li>
                <li>Aldo Ratmawan</li>
                <li>Aldo Ratmawan</li>
                <li>Aldo Ratmawan</li>
             </ol>
                <ul>
                    <li>Otong</li>
                    <li>Otong</li>
                    <li>Otong</li>
                </ul>
             ',
        ]);
        infoDetailProduk::create([
            'id_produk' => 2,
            'type'      => 'detail',
            'info_detail'      =>
             '<ol>
                <li>Aldo Ratmawan</li>
                <li>Aldo Ratmawan</li>
                <li>Aldo Ratmawan</li>
                <li>Aldo Ratmawan</li>
                <li>Aldo Ratmawan</li>
             </ol>',
        ]);
        infoDetailProduk::create([
            'id_produk' => 2,
            'type'      => 'info',
            'info_detail'      =>
             '<ol>
                <li>Aldo Ratmawan</li>
                <li>Aldo Ratmawan</li>
                <li>Aldo Ratmawan</li>
                <li>Aldo Ratmawan</li>
                <li>Aldo Ratmawan</li>
             </ol>
                <ul>
                    <li>Otong</li>
                    <li>Otong</li>
                    <li>Otong</li>
                </ul>
             ',
        ]);
        infoDetailProduk::create([
            'id_produk' => 3,
            'type'      => 'detail',
            'info_detail'      =>
             '<ol>
                <li>Aldo Ratmawan</li>
                <li>Aldo Ratmawan</li>
                <li>Aldo Ratmawan</li>
                <li>Aldo Ratmawan</li>
                <li>Aldo Ratmawan</li>
             </ol>',
        ]);
        infoDetailProduk::create([
            'id_produk' => 3,
            'type'      => 'info',
            'info_detail'      =>
             '<ol>
                <li>Aldo Ratmawan</li>
                <li>Aldo Ratmawan</li>
                <li>Aldo Ratmawan</li>
                <li>Aldo Ratmawan</li>
                <li>Aldo Ratmawan</li>
             </ol>
                <ul>
                    <li>Otong</li>
                    <li>Otong</li>
                    <li>Otong</li>
                </ul>
             ',
        ]);
        infoDetailProduk::create([
            'id_produk' => 4,
            'type'      => 'detail',
            'info_detail'      =>
             '<ol>
                <li>Aldo Ratmawan</li>
                <li>Aldo Ratmawan</li>
                <li>Aldo Ratmawan</li>
                <li>Aldo Ratmawan</li>
                <li>Aldo Ratmawan</li>
             </ol>',
        ]);
        infoDetailProduk::create([
            'id_produk' => 4,
            'type'      => 'info',
            'info_detail'      =>
             '<ol>
                <li>Aldo Ratmawan</li>
                <li>Aldo Ratmawan</li>
                <li>Aldo Ratmawan</li>
                <li>Aldo Ratmawan</li>
                <li>Aldo Ratmawan</li>
             </ol>
                <ul>
                    <li>Otong</li>
                    <li>Otong</li>
                    <li>Otong</li>
                </ul>
             ',
        ]);
    }
}
