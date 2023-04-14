import { Col, Container, Row } from "react-bootstrap";
import * as Icon from "react-icons/bs";
import { useState } from "react";
import { motion } from "framer-motion";
import AboutTeams from "./About/AboutTeams";
import AbCompanys from "./About/AboutCompany";

const listDataAbout = [
     [<AbCompanys id={1}/>, 'about toko grosir', 'ABOUT', 1],
     [<AboutTeams id={2}/>, 'about teams','TEAMS', 2]
];

export default function (props) {
     const [list, setList]  = useState({
          element:<AbCompanys/>,
          titles:'about toko grosir',
          idxActive:1,
     });
     
     const handleClick = ({element, titles, idxActive}) =>{
          setList({element: element, titles:titles, idxActive:idxActive})
     }
    return (
        <>
            <h2
                className="titles mt-4 mb-4 text-center text-white"
                style={{ "--size": "35px" }}>
                {list.titles.toLocaleUpperCase()}
            </h2>
            <Container className="mb-3">
                    <div className="center-data mb-3" style={{ minHeight: "65vh" }}>
                         {list.element}
                    </div>
                <div className="d-flex justify-content-center" style={{ gap:'10px' }}>
                    {
                         listDataAbout.map(([element, titles, txtBtn, id], idx) =>{
                             return <button disabled={list.idxActive === id ? true : false} key={idx} onClick={() => handleClick({element: element, titles:titles, idxActive:id})} className="btn btn-success text-white fw-bold">
                                   <Icon.BsFillPeopleFill size={"22px"} /> {txtBtn}
                              </button>
                         })
                    }
                </div>
            </Container>
        </>
    );
}
