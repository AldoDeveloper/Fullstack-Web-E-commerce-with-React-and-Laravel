import React from "react";
import Sidebar from "./Component/Sidebar";
import OutletContext from "./Component/OutletContext";
import NavbarsUsers from "./Component/NavbarsUsers";
import Footer from '../Footer';
import { ContextPathUser } from "../../../Context/Global";
import { useLocation, useMatches } from "react-router-dom";

export default function MainUsers(props){
    const location = useLocation();
    React.useEffect(() =>{
        if(!location?.hash){
            window.scrollTo(0, 0);
        }
    }, [location]);

    return (
        <>
            <NavbarsUsers/>
                <ContextPathUser.Provider value={ location?.state }>
                    <section 
                        className="d-flex position-relative mb-4"
                        style={{
                        flexDirection:'row',
                        gap:'10px',
                        paddingTop: '4.5rem' }}>
                        <Sidebar/>
                        <div className="vr"/>
                        <OutletContext/>
                    </section>
                </ContextPathUser.Provider>
            <Footer/>
        </>
    )
}