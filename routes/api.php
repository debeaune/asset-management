<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\LocationController;
use App\Http\Controllers\EquipmentController;
use App\Http\Controllers\TicketController;

Route::apiResource('categories', CategoryController::class);
Route::apiResource('locations', LocationController::class);
Route::apiResource('equipments', EquipmentController::class);
Route::apiResource('tickets', TicketController::class);