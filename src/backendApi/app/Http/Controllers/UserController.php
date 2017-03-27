<?php
/**
 * Created by PhpStorm.
 * User: beramos
 * Date: 3/13/17
 * Time: 10:50 AM
 */

namespace App\Http\Controllers;
use App\User;
use Illuminate\Http\Request;
use Tymon\JWTAuth\Exceptions\JWTException;
use JWTAuth;

class UserController extends  Controller
{
    /**
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */

    public  function singup(Request $request){

        $this->validate($request,[
           'name' => 'required',
            'email' => 'required|email|unique:users',
            'password' => 'required'
        ]);

        $user = new User([
            'name' => $request->input('name'),
            'email' => $request->input('email'),
            'password' => bcrypt($request->input('password'))
        ]);

        $user->save();

        return response()->json([
            'message' => 'Successfully created user !!'
        ],
            201
        );
    }

    /**
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public  function singin(Request $request)
    {

        $this->validate($request, [
            'email' => 'required|email',
            'password' => 'required'
        ]);

        $credentiels = $request->only('email','password');

        try{

            if (!$token = JWTAuth::attempt($credentiels)){
                return response()->json([
                    'error' => 'invalid credentials'
                ],
                    404
                );
            }

        }catch (JWTException $e){

            return response()->json([
                'error' => 'could not create token'
            ],
                500
            );
        }

        return response()->json([
            'token' => $token
        ],
            200
        );
    }
}