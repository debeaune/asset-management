<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Location;

class LocationSeeder extends Seeder
{
    public function run(): void
    {
        Location::create(['name' => 'Bureau Direction', 'building' => 'Bâtiment A', 'room' => '101']);
        Location::create(['name' => 'Salle Informatique', 'building' => 'Bâtiment B', 'room' => '205']);
        Location::create(['name' => 'Salle Serveurs', 'building' => 'Bâtiment B', 'room' => '001']);
        Location::create(['name' => 'Open Space', 'building' => 'Bâtiment A', 'room' => '200']);
    }
}