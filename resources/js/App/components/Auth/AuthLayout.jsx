import { Outlet, useRouteLoaderData } from "react-router-dom";


export default function(props){
     const { login, users } = useRouteLoaderData('auth-check');
     if(login) return window.location.href = '/produk';
     return <Outlet/>;
}