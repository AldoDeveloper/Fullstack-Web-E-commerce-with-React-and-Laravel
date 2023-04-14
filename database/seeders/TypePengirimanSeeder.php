<?php

namespace Database\Seeders;

use App\Models\typePengiriman;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Storage;

class TypePengirimanSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        typePengiriman::create([
            'name_type'  => 'JNE',
            'biaya'      =>  30000,
            'keterangan' => "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            'thumbnails' =>  'JNE.png'
        ]);
        typePengiriman::create([
            'name_type'  => 'JNT',
            'biaya'      =>  20000,
            'keterangan' => "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus quis rerum numquam debitis reprehenderit ea!",
            'thumbnails' =>  'JNT.png'
        ]);
    }
}
