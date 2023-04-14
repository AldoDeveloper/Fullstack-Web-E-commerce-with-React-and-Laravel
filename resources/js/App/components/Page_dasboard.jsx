import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom"
import DasboardContext from "../../Context/login";

const Dasboard = (props) =>{
    const {data, setData} = useContext(DasboardContext);
    if(data){
       const loader = useLoaderData();
       console.log(loader);
       return <h2>Hello World Dasboard...</h2>
    }
    return window.location.href = '/';
}

export default Dasboard;