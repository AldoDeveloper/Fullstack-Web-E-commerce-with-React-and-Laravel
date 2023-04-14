<?php

namespace Database\Seeders;

use App\Models\ClientAksesTokens;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ClientAksesTokensSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        ClientAksesTokens::create([
            'client_name' => '10951SKAF219912',
            'tokens'      => ['name' => 'Aldo Ratmawan', 'email' => 'aldo.ratmawan9999@gmail.com', 'pw' => 'aldo1999'],
        ]);
    }
}
