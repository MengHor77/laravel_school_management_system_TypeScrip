<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth; 
use Illuminate\Validation\ValidationException;
use Inertia\Inertia;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    public function index()
    {
    $users = \App\Models\User::all(); // Fetch all users
       return Inertia::render('Backend/User/Index', [ 'users' => $users ]);
    }
    
    public function store(Request $request)
        {
            $data = $request->validate([
                'name'     => 'required|string|max:255',
                'email'    => 'required|email|unique:users,email', // Corrected table name
                'password' => 'required|min:6',
            ]);

            $data['password'] = Hash::make($request->password);
            User::create($data);

            // Redirect back to the index page to see the new data
            return redirect()->route('admin.user')->with('success', 'User created');
        }
    
    
        public function update(Request $request, $id)
    {
        $user = \App\Models\User::findOrFail($id);
        
        $data = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:users,email,' . $user->id,
            'password' => 'nullable|min:6',
        ]);

        if ($request->filled('password')) {
            $data['password'] = bcrypt($request->password);
        } else {
            unset($data['password']);
        }

        $user->update($data);

        return redirect()->back()->with('success', 'User updated successfully');
    }

    public function destroy($id)
{
    User::findOrFail($id)->delete();
    return redirect()->back()->with('success', 'User deleted');
}
}