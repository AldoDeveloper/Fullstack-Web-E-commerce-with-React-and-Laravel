<?php

namespace Database\Seeders;

use App\Models\Profile;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ProfileSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Profile::create([
            'id_users'  => 1,
            'path'      => 'user.png',
            'alamat'    => ['data' => NULL]
        ]);
        Profile::create([
            'id_users'  => 2,
            'path'      => 'user.png',
            'alamat'    => ['data' => NULL]
        ]);
    }
}
