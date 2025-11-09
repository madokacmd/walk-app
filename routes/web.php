<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Fortify\Features;
use App\Http\Middleware\AdminMiddleware;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use App\Http\Controllers\UserController;

Route::get('/', function () {
    if (Auth::check()) {
        $user = Auth::user();

        return match ($user->role) {
            User::ROLE_ADMIN => redirect('/admin/dashboard'),
            User::ROLE_USER => redirect('/top'),
            default => redirect('/top'),
        };
    }

    return redirect('/login');
});


Route::middleware(['auth', 'verified'])->group(function () {
    Route::prefix('admin')->middleware(['admin'])->group(function () {
        Route::get('/dashboard', function () {
            return Inertia::render('admin/dashboard');
        })->name('admin.dashboard');
        Route::resource('users', UserController::class)->names('admin.users');
    });
});

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/top', function () {
        return Inertia::render('top', [
            'user' => auth()->user(),
            'message' => 'welcome to Top Page',
        ]);
    })->name('top');
});

require __DIR__.'/settings.php';
