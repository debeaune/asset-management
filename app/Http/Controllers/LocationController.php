<?php

namespace App\Http\Controllers;

use App\Models\Location;
use Illuminate\Http\Request;
use Inertia\Inertia;

class LocationController extends Controller
{
    public function index()
    {
        return Inertia::render('Locations', [
            'locations' => Location::all()
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'building' => 'nullable|string|max:255',
            'room' => 'nullable|string|max:255',
        ]);
    
        $location = Location::create($validated);
        return response()->json($location, 201);
    }

    public function show(Location $location)
    {
        return $location;
    }

    public function update(Request $request, Location $location)
    {
        $validated = $request->validate([
            'name' => 'sometimes|string|max:255',
            'building' => 'nullable|string|max:255',
            'room' => 'nullable|string|max:255',
        ]);
    
        $location->update($validated);
        return $location;
    }

    public function destroy(Location $location)
    {
        $location->delete();
        return response()->json(null, 204);
    }
}