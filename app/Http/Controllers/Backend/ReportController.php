<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia; // Don't forget to import this!

class ReportController extends Controller
{
    /**
     * Display the teacher list page.
     */
    public function index()
    {
        return Inertia::render('Backend/Report/Index'); 
    }
}