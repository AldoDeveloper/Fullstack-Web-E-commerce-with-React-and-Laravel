
import React, { Fragment } from "react";
import { Col, Row } from "react-bootstrap";
import CardProduks from "../Card/CardProduks";

export default class extends React.Component{
     constructor(props){
          super(props);
          this.state = {
               produk_spesial_promo: [],
          }
     }

     static getDerivedStateFromProps(props, state){
          return {produk_spesial_promo : props.items};
     }

     render(){
          const { produk_spesial_promo } = this.state;
          return (
               <>
                    <h4>Promo Produk Sepesial... <a href="#" className="text-decoration-none text-success">Lainya</a></h4>
                    <Row className="row-cols-2 row-cols-md-5 g-4">
                         {
                              produk_spesial_promo.map((items, key) => 
                                   <Fragment key={Math.random().toString()}>
                                        <Col>
                                             <a href="#" key={key} className="text-decoration-none text-info">
                                                  <CardProduks key={key} fitur={items}/>
                                             </a>
                                        </Col>
                                   </Fragment>
                              )
                         }
                    </Row>
               </>
          )
     }
}