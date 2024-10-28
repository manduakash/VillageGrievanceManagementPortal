<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\StateController;

// APIs:
Route::get('/get-state/{StateID}', [StateController::class, 'getStateById']);
// Route::middleware('api')->group(function () {
// });