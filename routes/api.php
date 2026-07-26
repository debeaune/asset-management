<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\LocationController;
use App\Http\Controllers\EquipmentController;
use App\Http\Controllers\TicketController;
use App\Http\Controllers\AuthController;


Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login'])->name('login');

Route::middleware('auth:sanctum')->group(function () {
    Route::post('/logout', [AuthController::class, 'logout']);
    
    Route::apiResource('categories', CategoryController::class);
    Route::apiResource('locations', LocationController::class);
    Route::apiResource('equipments', EquipmentController::class);
    Route::apiResource('tickets', TicketController::class);
});