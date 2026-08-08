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
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'serial_number' => 'required|string|unique:equipments',
            'status' => 'required|in:active,inactive,maintenance',
            'category_id' => 'required|exists:categories,id',
            'location_id' => 'nullable|exists:locations,id',
            'user_id' => 'nullable|exists:users,id',
        ]);

        $equipment = Equipment::create($request->$validated());
        return response()->json($equipment, 201);
    }

    public function show(Equipment $equipment)
    {
        return $equipment->load(['category', 'location', 'user', 'tickets']);
    }

    public function update(Request $request, Equipment $equipment)
    {
        $validated = $request->validate([
            'name' => 'sometimes|string|max:255',
            'serial_number' => 'sometimes|string|unique:equipments,serial_number,' . $equipment->id,
            'status' => 'sometimes|in:active,inactive,maintenance',
            'category_id' => 'sometimes|exists:categories,id',
            'location_id' => 'nullable|exists:locations,id',
            'user_id' => 'nullable|exists:users,id',
        ]);
    
        $equipment->update($validated);
        return $equipment;
    }
    
    public function destroy(Equipment $equipment)
    {
        $equipment->delete();
        return response()->json(null, 204);
    }
}
