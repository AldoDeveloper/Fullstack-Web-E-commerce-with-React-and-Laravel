import React from "react";
import { Outlet,useNavigation, useRouteLoaderData } from "react-router-dom";
import AuthenticationContext from "../../Context/AuthenticationContext";
import Loading_1 from "../loading/Loading_1";

export default function RootHome(props){
    const loading     = useNavigation();
    const actionLogin = useRouteLoaderData('id-login');
    const loader      = useRouteLoaderData('auth-check');

    if(actionLogin?.action === 'login')return <><div><Outlet/></div></>
    else{
        if(loading.state === 'loading')  return  <Loading_1/>;
        return <>
            <AuthenticationContext.Provider value={{ auth: loader }}>
                <div>
                    <Outlet/>
                </div>
            </AuthenticationContext.Provider>
        </>
    }
}