<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\WordController;


Route::get('/', function () {
    return view('welcome');
});


Route::post('/words', [WordController::class, 'store']);

