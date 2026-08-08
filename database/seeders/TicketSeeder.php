<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Ticket;

class TicketSeeder extends Seeder
{
    public function run(): void
    {
        Ticket::create([
            'title' => 'PC en panne',
            'description' => "L'écran ne s'allume plus",
            'status' => 'open',
            'priority' => 'high',
            'equipment_id' => 1,
        ]);
    }
}
