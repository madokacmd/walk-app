<?php

namespace App\Http\Responses;

use Laravel\Fortify\Contracts\LoginResponse as LoginResponseContract;
use App\Models\User;

class LoginResponse implements LoginResponseContract
{
    public function toResponse($request)
    {
        $user = $request->user();

        switch ($user->role) {
            case User::ROLE_ADMIN:
                return redirect()->intended('/admin/dashboard');

            case User::ROLE_USER:
            default:
                return redirect()->intended('/top');
        }
    }
}
