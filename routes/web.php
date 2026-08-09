<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\EquipmentController;
use App\Http\Controllers\TicketController;
use App\Http\Controllers\LocationController;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/equipments', [EquipmentController::class, 'index']);

Route::get('/tickets', [TicketController::class, 'index']);

Route::get('/locations', [LocationController::class, 'index']);

Route::delete('/equipments/{equipment}', [EquipmentController::class, 'destroy']);