<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Http\Controllers\Backend\AdminController;
use App\Http\Controllers\Frontend\HomeController;


 Route::get('/', [HomeController::class, 'index'])->name('home');

// 2. Admin Group
Route::prefix('admin')->name('admin.')->group(function () {
    Route::get('/login', [AdminController::class, 'login'])->name('login');
    Route::post('/logout', [AdminController::class, 'logout'])->name('logout');
});