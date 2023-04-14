<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class UserSeed extends Seeder
{
    public function run()
    {
        User::create([
            'name'     => 'Aldo Ratmawan',
            "email"    => 'aldo.ratmawan9999@gmail.com',
            'password' => bcrypt('aldo12345'),
            'role'     => 1
        ]);
        User::create([
            'name'     => 'Aldo Ratmawan',
            "email"    => 'aldo@gmail.com',
            'password' => bcrypt('aldo12345'),
            'role'     => 0
        ]);
        User::factory()->count(10)->sequence(fn ($sequesnce) => ['role' => rand(0, 2)])->create();
    }
}
