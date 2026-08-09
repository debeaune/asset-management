<?php

namespace App\Http\Controllers;

use App\Models\Equipment;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Category;
use App\Models\Location;

class EquipmentController extends Controller
{
    public function index()
    {
        return Inertia::render('Equipments', [
            'equipments' => Equipment::with('category')->get()
        ]);
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

        Equipment::create($validated);
        return redirect('/equipments');
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
        return redirect('/equipments');
    }
    
    public function destroy(Equipment $equipment)
    {
        $equipment->delete();
        return redirect('/equipments');
    }

    public function edit(Equipment $equipment)
    {
        return Inertia::render('EquipmentEdit', [
            'equipment' => $equipment->load('category'),
            'categories' => Category::all(),
            'locations' => Location::all(),
        ]);
    }

    public function create()
    {
        return Inertia::render('EquipmentCreate', [
            'categories' => Category::all(),
            'locations' => Location::all(),
        ]);
    }
}
