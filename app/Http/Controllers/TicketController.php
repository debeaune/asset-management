<?php

namespace App\Http\Controllers;

use App\Models\Ticket;
use Illuminate\Http\Request;

class TicketController extends Controller
{
    public function index()
    {
        return Ticket::with(['equipment', 'user'])->get();
    }

    public function store(Request $request)
    {
        $ticket = Ticket::create($request->all());
        return response()->json($ticket, 201);
    }

    public function show(Ticket $ticket)
    {
        return $ticket->load(['equipment', 'user']);
    }

    public function update(Request $request, Ticket $ticket)
    {
        $ticket->update($request->all());
        return $ticket;
    }

    public function destroy(Ticket $ticket)
    {
        $ticket->delete();
        return response()->json(null, 204);
    }
}
