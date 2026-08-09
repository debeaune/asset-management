<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\EquipmentController;
use App\Http\Controllers\TicketController;
use App\Http\Controllers\LocationController;

Route::get('/', function () {
    return redirect('/equipments');
});

Route::get('/equipments', [EquipmentController::class, 'index']);

Route::get('/tickets', [TicketController::class, 'index']);

Route::get('/locations', [LocationController::class, 'index']);

Route::delete('/equipments/{equipment}', [EquipmentController::class, 'destroy']);

Route::get('/equipments/{equipment}/edit', [EquipmentController::class, 'edit']);

Route::put('/equipments/{equipment}', [EquipmentController::class, 'update']);

Route::get('/equipments/create', [EquipmentController::class, 'create']);

Route::post('/equipments', [EquipmentController::class, 'store']);