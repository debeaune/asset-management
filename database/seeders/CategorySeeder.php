<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Category;

class CategorySeeder extends Seeder
{
    public function run(): void
    {
        Category::create(['name' => 'Ordinateur portable', 'description' => 'Laptops et ultrabooks']);
        Category::create(['name' => 'Ordinateur fixe', 'description' => 'PC de bureau']);
        Category::create(['name' => 'Serveur', 'description' => 'Serveurs physiques et virtuels']);
        Category::create(['name' => 'Imprimante', 'description' => 'Imprimantes et scanners']);
        Category::create(['name' => 'Réseau', 'description' => 'Switch, routeurs, points d\'accès']);
    }
}