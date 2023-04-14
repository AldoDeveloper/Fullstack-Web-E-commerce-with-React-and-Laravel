<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    public function run()
    {
        $this->call([
            UserSeed::class,
            ProfileSeeder::class,
            ContainerCategoryProdukSeeder::class,
            CategoryProdukSeeder::class,
            ProdukSeeder::class,
            ClientAksesTokensSeeder::class,
            ActivationProduksSeeder::class,
            TypePriceSeeder::class,
            priceProduksSeeder::class,
            CategorySelectionSeeder::class,
            InfoTokoSeeder::class,
            UlasanProdukSeeder::class,
            ThumbnailProdukSeeder::class,
            UlasanBuktiImagesSeeder::class,
            InfoDetailProdukSeeder::class,
            GrosirProdukSeeder::class,
            ThumbnailGrosirProdukSeeder::class,
            TypePengirimanSeeder::class,
        ]);
    }
}
