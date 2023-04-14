
import React from "react";
import { NavLink, Navigate, useLocation, useMatches, useParams } from "react-router-dom";

export default function BreadCrumb(props){
    const matches  = useMatches();
    const params   = useParams();
    
    const filterd  = matches
        .filter((match) => Boolean(match.handle?.crumbUserLocation))
        .map((match)    => match.handle.crumbUserLocation(match));
    return(
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                {
                    filterd.map(({id, to, text}, idx) => (
                        filterd.length === (idx + 1) ?
                        <li key={idx} className="breadcrumb-item active">{ Boolean(params?.id) ? params?.id : text}</li> :
                        <li key={idx} className="breadcrumb-item">
                            <NavLink to={to} replace={true}>{text}</NavLink>
                        </li>
                    ))
                }
            </ol>
        </nav>
    )
}