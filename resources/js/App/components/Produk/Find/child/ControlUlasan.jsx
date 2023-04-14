import React from "react";
import { Col, Row } from "react-bootstrap";
import Ulasan from "./Ulasan";
import CommentUlasan from "./CommentUlasan";
import img from '../../../../img/khkh.jpg';
import UlasanGlobal from "../../../../../Context/ContextUlasanGlobal";

export default class ControlUlasan extends React.Component{
     constructor(props){
          super(props);
     }
     render(){
          return <>
               <UlasanGlobal.Provider value={{ name: 'Aldo' }}>
                         <div id="div-control" className="mt-5">
                              <Row className="row-cols-1 row-cols-md-2 g-4">
                                   <Col md={4}>
                                        <Ulasan key={'asfls'}/>
                                   </Col>
                                   <Col md={8}>
                                        <Row className="row-cols-1 row-cols-md-6 g-2">
                                             {
                                                  Array.from({length: 6}).map((val, key) =>(
                                                       <img key={key} src={img} className="rounded" height={'100px'} alt="" />
                                                  ))
                                             }
                                        </Row>
                                        <CommentUlasan/>
                                   </Col>
                              </Row>
                         </div>
               </UlasanGlobal.Provider>
          </>  
     }
}
ControlUlasan.contextType = UlasanGlobal;