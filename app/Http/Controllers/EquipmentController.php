<?php

namespace App\Http\Controllers;

use App\Models\Equipment;
use Illuminate\Http\Request;

class EquipmentController extends Controller
{
    public function index()
    {
        return Equipment::with(['category', 'location', 'user'])->get();
    }

    public function store(Request $request)
    {
        $equipment = Equipment::create($request->all());
        return response()->json($equipment, 201);
    }

    public function show(Equipment $equipment)
    {
        return $equipment->load(['category', 'location', 'user', 'tickets']);
    }

    public function update(Request $request, Equipment $equipment)
    {
        $equipment->update($request->all());
        return $equipment;
    }

    public function destroy(Equipment $equipment)
    {
        $equipment->delete();
        return response()->json(null, 204);
    }
}
