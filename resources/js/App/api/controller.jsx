
import { toast } from "react-toastify";
const hostOrigin = window.location.origin;

function useHandleTokens(){
     if(window.localStorage.getItem('login_web') === null)
          return { access_token : ''}
     return JSON.parse(window.localStorage.getItem('login_web'));
}

async function checkAuth({request, params}){
     const loginAkses = useHandleTokens();
     const { access_token } = loginAkses;
     const data = await fetch(hostOrigin + '/api/auth/check-auth', {
          method:'GET',
          headers:new Headers({
               'Content-Type': 'application/json',
               'AUTHORIZATION' : 'Bearer ' + access_token
          }),
          signal: AbortSignal.timeout(15000),
     });
     const {code, error, login, users, experied} = await data.json();
     if(code === 401) window.localStorage.removeItem('login_web');
     return { code: code, error: error, login: login ? login : false, users: users ? users : null, token: access_token !== '' ? access_token: null };
}

async function useLoginAuth(bodys){
     const loginAuthTokens = await fetch(hostOrigin + '/api/auth/login', {
          method: 'POST',
          headers:new Headers({
               'Content-type': 'application/json'
          }),
          body:JSON.stringify(bodys),
          signal: AbortSignal.timeout(15000)
     });
     return loginAuthTokens.json();
}
async function useLogoutAuth(tokens){
     const logoutAuthTokens = await fetch(hostOrigin + '/api/auth/logout', {
          method:'GET',
          headers: new Headers({
               'Content-type' : 'application/json',
               'AUTHORIZATION' : 'Bearer ' + tokens
          }),  
          signal: AbortSignal.timeout(15000)
     });
     return await logoutAuthTokens.json();
}

async function useDataProduk({request, params}){
     const produkFetch = fetch(hostOrigin + '/api/publish/view', {
          method:'GET',
          headers: new Headers({
               'Content-type': 'application/json',
          }),
          signal: AbortSignal.timeout(15000),
     });
    const loading  =  await toast.promise(produkFetch, {
          pending:{
               render(){
                    return 'loading data...'
               },
               autoClose:2000,
               type:'warning',
          }
    })
     return await loading.json();
}

async function useShowSelection(){
     const selection = await fetch(hostOrigin + '/api/publish/show-selection', {
          method:'GET',
          headers: new Headers({
               'Content-type' : 'application/json',
          }),
          signal: AbortSignal.timeout(60000),
     });
     return await selection.json();
}

async function useInfoFooter(){
     const footer = await fetch(hostOrigin + '/api/publish/footer', {
          method:'GET',
          headers: new Headers({
               'Content-type' : 'application/json',
          }),
          signal: AbortSignal.timeout(60000),
     });

     return footer.json();
}

async function useFetcFindProduk({request, params}){
    const finds = await fetch(hostOrigin + '/api/publish/find/' + params?.id, {
     method:'GET',
     headers: new Headers({
          'Content-type' : 'application/json',
     }),
     signal: AbortSignal.timeout(60000),
    });
    return finds.json();
}

async function useFetchFindGrosir({request, params}){
     const fetchGrosir = await fetch(hostOrigin + '/api/publish/grosir/' + params?.id, {
          method: 'GET',
          headers: new Headers({
               'Content-type' : 'application/json'
          }),
          signal: AbortSignal.timeout(60000),
     });
     return fetchGrosir.json();
}

async function useFetchGetCart({request, params}){
     const { access_token } = useHandleTokens();
     const fetchCart = await fetch(hostOrigin + '/api/activation/show-keranjang', {
          method: 'GET',
          headers:new Headers({
               'Content-type'  : 'Application/json',
               'AUTHORIZATION' : 'Bearer ' + access_token,
          }),
          signal: AbortSignal.timeout(60000),
     });
     return await fetchCart.json();
}


export default {
       checkAuth, useLoginAuth,
       useLogoutAuth, useDataProduk, 
       useShowSelection, useInfoFooter,
       useFetcFindProduk, useFetchFindGrosir ,
       useFetchGetCart
};