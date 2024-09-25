<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\WordController;
use App\Models\Word;
use App\Http\Controllers\AuthController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::middleware('auth:sanctum')->group(function () {
    Route::get('/words', [WordController::class, 'index']);
    Route::post('/words', [WordController::class, 'store']);
    Route::get('/words/{id}', [WordController::class, 'show']);
    Route::put('/words/{id}', [WordController::class, 'update']);
    Route::delete('/words/{id}', [WordController::class, 'destroy']);

});

Route::get('/export/words', [WordController::class, 'exportToExcel']);

Route::post('/register', [AuthController::class, 'register']);

Route::post('/login', [AuthController::class, 'login']);
