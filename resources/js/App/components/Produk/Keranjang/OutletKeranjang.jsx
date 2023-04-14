import React from "react";
import { Outlet, useNavigation } from "react-router-dom";
import { ContextFromUsers } from "../../../../Context/Global";
import Loading_1 from "../../../loading/Loading_1";

export default function OutletKeranjang(props){
    const navigations = useNavigation();
    if(navigations.state === 'loading') return <Loading_1/>
    return (
        <ContextFromUsers.Provider value={{ name: 'Aldo Ratmawan' }}>
            <Outlet/>
        </ContextFromUsers.Provider>
    )
}