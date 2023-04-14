<?php

namespace Database\Seeders;

use App\Models\UlasanBuktiImages;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class UlasanBuktiImagesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        UlasanBuktiImages::create([
            'id_ulasan' => 1,
            'tokens'    => Str::orderedUuid(),
            'path'      => 'ulasan1.img',
        ]);
        UlasanBuktiImages::create([
            'id_ulasan' => 1,
            'tokens'    => Str::orderedUuid(),
            'path'      => 'ulasan2.img',
        ]);
        UlasanBuktiImages::create([
            'id_ulasan' => 1,
            'tokens'    => Str::orderedUuid(),
            'path'      => 'ulasan3.img',
        ]);
    }
}
