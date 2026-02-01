<?php

use App\Http\Controllers\Backend\AdminController;
use App\Http\Controllers\Backend\DashboardController;
use App\Http\Controllers\Backend\UserController;
use App\Http\Controllers\Backend\TeacherController;
use App\Http\Controllers\Backend\CourseController;
use App\Http\Controllers\Backend\SettingController; 
use App\Http\Controllers\Backend\ReportController; 



use App\Http\Controllers\Frontend\HomeController;
use Illuminate\Support\Facades\Route;

Route::get('/', [HomeController::class, 'index'])->name('home');


Route::prefix('admin')->name('admin.')->group(function () {
    Route::get('/login', [AdminController::class, 'login'])->name('login');
    
    Route::post('/login', [AdminController::class, 'store'])->name('login.store'); 

    Route::middleware('auth')->group(function () {
        Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');
        Route::get('/user', [UserController::class, 'index'])->name('user');
        Route::get('/teacher', [TeacherController::class, 'index'])->name('teacher');
        Route::get('/course', [CourseController::class, 'index'])->name('course');
        Route::get('/setting', [SettingController::class, 'index'])->name('setting'); // Fixed 'setingt'
        Route::get('/report', [ReportController::class, 'index'])->name('report');
    });
});