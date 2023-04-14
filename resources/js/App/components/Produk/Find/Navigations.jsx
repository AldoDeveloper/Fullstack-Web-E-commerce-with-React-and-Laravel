import React from "react";
import {  useLoaderData } from "react-router-dom";
import Main from "./Main/Main";

export default function Navigations(props){
    const api = useLoaderData();
    return (
        <Main apis={api} template={props?.template}/>
    )
}