<?php


namespace App\Http\Controllers\Backend; 

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Inertia\Inertia; 

class AdminController extends Controller
{
    public function index()
    {
        return Inertia::render('Backend/Admin/Index');
    }
    
    public function login ()
    {
        return Inertia::render('Backend/Admin/Login');
    }
    
    public function logout()
    {
        auth()->logout();
        return Inertia::render('Backend/Admin/Index');
        
    }
}