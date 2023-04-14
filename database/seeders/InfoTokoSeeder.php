<?php

namespace Database\Seeders;

use App\Models\Info\infoToko;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Storage;

class InfoTokoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        infoToko::create([
            'key'    => 'footer',
            'config' => [
                'info' =>[
                    [
                    'tokosalsabila' => [
                        ['Tentang Toko Salsabila', 'https://example.com'],
                        ['Karir', 'http://example.com'],
                        ['Blog', 'https://example.com'],
                        ['Lorem ipsum dolor sit', 'https://example.com'],
                        ['Lorem ipsum dolor sit dolorcum', 'https://example.com'],
                        ['Lorem ipsum dolor', 'https://example.com'],
                        ]
                    ],
                    [
                        'Beli' => [
                            ['Tagihan dan Top UPs', '#'],
                            ['Barang Seconds', '#'],
                            ['COD', '#']
                            ],
                    ],
                    [
                        'Jual' => [
                            ['Barang Elektronik', '#'],
                            ['Mitra toko'],
                            ['Daftar Mitra Toko Online', '#'],
                        ],
                    ],
                    [
                        'Bantuan & lokasi' => [
                            ['Lokasi pusat', '#'],
                            ['Kebijakan dan Privasi', '#'],
                            ['Contack Kami..', '#']
                        ]
                    ]
                ],
                'sosmed' => [
                    [
                        'Sosial Media' => [
                            [Storage::disk('publish')->url('facebook.png'), '#'],
                            [Storage::disk('publish')->url('instagram.png'), '#'],
                            [Storage::disk('publish')->url('twitter.png'), '#'],
                            [Storage::disk('publish')->url('tik-tok.png'), '#'],
                        ]
                    ]
                ],
                'bg' => [
                    'img'         => Storage::disk('publish')->url('store.png'),
                    'button_info' => [
                        ['login',    'auth/login'],
                        ['register', 'auth/register']
                    ]
                ]
            ]
        ]);
    }
}
