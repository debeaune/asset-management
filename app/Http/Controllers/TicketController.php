<?php

namespace App\Http\Controllers;

use App\Models\Ticket;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Equipment;

class TicketController extends Controller
{
    public function index()
    {
        return Inertia::render('Tickets', [
            'tickets' => Ticket::with(['equipment', 'user'])->get()
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'status' => 'required|in:open,in_progress,closed',
            'priority' => 'required|in:low,medium,high',
            'equipment_id' => 'required|exists:equipments,id',
            'user_id' => 'nullable|exists:users,id',
        ]);
    
        Ticket::create($validated);
        return redirect('/tickets');
    }

    public function show(Ticket $ticket)
    {
        return $ticket->load(['equipment', 'user']);
    }

    public function update(Request $request, Ticket $ticket)
    {
        $validated = $request->validate([
            'title' => 'sometimes|string|max:255',
            'description' => 'sometimes|string',
            'status' => 'sometimes|in:open,in_progress,closed',
            'priority' => 'sometimes|in:low,medium,high',
            'equipment_id' => 'sometimes|exists:equipments,id',
            'user_id' => 'nullable|exists:users,id',
        ]);
    
        $ticket->update($validated);
        return redirect('/tickets');
    }

    public function destroy(Ticket $ticket)
    {
        $ticket->delete();
        return redirect('/tickets');
    }

    public function edit(Ticket $ticket)
    {
        return Inertia::render('TicketEdit', [
            'ticket' => $ticket,
            'equipments' => Equipment::all(),
        ]);
    }

    public function create()
    {
        return Inertia::render('TicketCreate', [
            'equipments' => Equipment::all(),
        ]);
    }

}
