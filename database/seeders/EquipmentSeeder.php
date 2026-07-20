<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Equipment;

class EquipmentSeeder extends Seeder
{
    public function run(): void
    {
        Equipment::create([
            'name' => 'Dell Latitude 5520',
            'serial_number' => 'SN-001',
            'status' => 'active',
            'category_id' => 1,
            'location_id' => 1,
        ]);
        Equipment::create([
            'name' => 'HP ProBook 450',
            'serial_number' => 'SN-002',
            'status' => 'active',
            'category_id' => 1,
            'location_id' => 4,
        ]);
        Equipment::create([
            'name' => 'Serveur Dell PowerEdge',
            'serial_number' => 'SN-003',
            'status' => 'active',
            'category_id' => 3,
            'location_id' => 3,
        ]);
    }
}
