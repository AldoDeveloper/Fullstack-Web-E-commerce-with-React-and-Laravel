import { toast } from "react-toastify";
import * as fetchApi from '../api/controller';
import { redirect } from "react-router-dom";
import { useGetAuth } from "../Storages/GetStorage";

const url_host = window.location.origin;

async function Login({params, request}){
     const form        = await request.formData();
     const bodys       = Object.fromEntries(form);
     const fetchLogin  = fetchApi.default.useLoginAuth(bodys);

     const responses = await toast.promise(fetchLogin, {
          pending:{
               render(){ return 'Please wait...'},
               autoClose:3000,
          },
     });
     const { code, login } = await responses;
     if(code === 401) {
          toast.error('Login Failed Retry...', {
               position: toast.POSITION.TOP_RIGHT,
               autoClose: 3500,
               closeButton:true
          })
     }
     if(login){
          toast.success('Login Success..', {
               position: toast.POSITION.TOP_RIGHT,
               autoClose: 3500,
               closeButton:true
          });
          window.localStorage.setItem('login_web', JSON.stringify(responses));
          if(window.localStorage.getItem('back') === null)
           return redirect('/produk');
          const pathnames = window.localStorage.getItem('back');
          window.localStorage.removeItem('back');
          return redirect(pathnames);
     }
     return{ old: bodys, submit: true };
}

async function Logout ({request, params}){
     const form       = await request.formData();
     const object     = Object.fromEntries(form);
     const { tokens, path } = object;
     const response   = await fetchApi.default.useLogoutAuth(tokens);
     const { logout } = response;

     if(logout){
          toast.success('Logout Success...', {
               position: toast.POSITION.TOP_RIGHT,
               autoClose: 3500,
          });
          window.localStorage.removeItem('login_web');
          return redirect(path)
     }
     return object;
}

async function AuthActionKeranjang({params, request}){
     const formData = await request.formData();
     const object   = Object.fromEntries(formData);
     const { pathname } = new URL(window.location.href)
     if(window.localStorage.getItem('login_web') === null){
          toast('Harap Login Terlebih Dahulu...', {
               autoClose: 2000,
               type:'error'
          });
          window.localStorage.setItem('back', pathname);
          return redirect('/auth/login');
     }
     return object;
}

export default { Login, Logout, AuthActionKeranjang }