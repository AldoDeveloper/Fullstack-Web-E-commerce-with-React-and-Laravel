<?php

namespace App\Service\Auth\Users{

    use Illuminate\Http\JsonResponse;
    use Illuminate\Http\Request;
    use Illuminate\Support\Facades\Validator;

    class AuthService{

        protected Request $request;

        public function __construct(Request $request)
        {
            $this->request = $request;
        }

        protected function validations(){
            $credentials = Validator::make(
                $this->request->all(),
                ['email' => ['required', 'email'], 'password' => ['required']]);
            return $credentials;
        }

        public function loginService() : JsonResponse{
            if($this->validations()->fails())
                return response()->json($this->validations()->messages()->toArray());
            if(!$tokens = auth()->setTTL(120)->attempt($this->request->only(['email', 'password'])))
                return response()->json(['error' => 'Unauthorizied', 'code' => 401], 401);
            return $this->responseWithTokens($tokens);
        }

        protected function responseWithTokens($tokens){
            return response()->json([
                'access_token' => $tokens,
                'type'         => 'bearer',
                'experied'     => auth()->factory()->getTTL(),
                'login'        => true,
            ]);
        }

        public function me(){
            $users = auth()->user();
            $users->profile;
            return response()->json([
                'login'      => true,
                'code'       => 200,
                'experied'   => auth()->factory()->getTTL(),
                'users'      => $users,
            ], 200, [], JSON_PRETTY_PRINT);
        }

        public function logout(){
            auth()->logout();
            return response()->json(['logout' => true, 200]);
        }
    }
}