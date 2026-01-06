<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Frontend\AuthController;

// SPA entry point (VERY IMPORTANT)
Route::get('/', [HomeController::class, 'index'])->name('home');

// About Page
Route::get('/about', [AboutController::class, 'index'])->name('about');

// Contact Page
Route::get('/contact', [ContactController::class, 'index'])->name('contact');

// My Courses Page (requires login)
Route::middleware('auth')->get('/my-course', [MyCourseController::class, 'index'])->name('my-courses');

// Auth API (POST only)
Route::post('/login', [AuthController::class, 'login']);
Route::post('/register', [AuthController::class, 'store']);
Route::post('/logout', [AuthController::class, 'logout']);
