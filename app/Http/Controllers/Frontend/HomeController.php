<?php

namespace App\Http\Controllers\Frontend; 

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Inertia\Inertia; 

class HomeController extends Controller
{
   public function index()
    {
        // This looks for: resources/js/Pages/Frontend/Home/Index.vue
        return Inertia::render('Frontend/Home/Index');
    }
}