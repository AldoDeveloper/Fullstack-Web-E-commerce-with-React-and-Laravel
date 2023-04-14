import { redirect } from "react-router-dom";
import { toast } from "react-toastify";

const hostOrigin = window.location.origin;

async function AuthKeranjang({params, request}){
    if(window.localStorage.getItem('login_web') === null){
        toast('Authentication gagal...', {
            type: 'error',
            autoClose: 2000,
        })
        return redirect('/auth/login')
    }
    else{
            const json = JSON.parse(window.localStorage.getItem('login_web'));
            const loading =  await checkApi(json.access_token);
            return await loading;
    }
}

async function checkApi(tokens){
    const authFetch = await fetch(hostOrigin + '/api/auth/check-auth', {
        method:'GET',
        headers:new Headers({
             'Content-Type': 'application/json',
             'AUTHORIZATION' : 'Bearer ' + tokens
        }),
        signal: AbortSignal.timeout(15000),
   });
   return await authFetch.json();
}

export { AuthKeranjang }