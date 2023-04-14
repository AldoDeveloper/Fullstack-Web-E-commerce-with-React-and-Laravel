
import React from "react";
import { Row, Col } from "react-bootstrap";
import CardProduks from "../Card/CardProduks";

const CardTawaran = (props) =>{
    return  <Col>
          <div className="card-info" style={{ backgroundColor:`rgb(132, 79, ${props.color_random})` }}>
               <h4 className={"text-center"}>asfamskf</h4>
          </div>
      </Col>
}

export default class extends React.Component{
     constructor(props){
          super(props);
          this.state  = {
               error: false,
               isLoad: false,
               items:[],
          }
     }
     getRandomInt(min, max){
          min = Math.ceil(min);
          max = Math.floor(max);
          return Math.floor(Math.random() * (max - min + 1) + min);
     }
     static getDerivedStateFromProps(props, state){
          return {items: props.items}
     }

     render(){
          const { error, isLoad, items } = this.state;
          return <>
                <h4 className="mt-3">
                    Tawaran Harga Untuk Pengguna Langganan <a href="#" className="text-success text-decoration-none">Lainya..</a>
                </h4>
               <div className="grid-pages">
                    <Row className="row-cols-1 row-cols-md-4 g-4 justify-content-md-center">
                    {
                         Array.from({length: 4}).map((key)=>{
                              return <CardTawaran color_random={this.getRandomInt(100, 255)}/>
                         })
                    }
                    </Row>
                    <Row className="row-cols row-cols-md-5 g-4 justify-content-md-center">
                         {
                              items.map((val, idx) => 
                              <Col key={idx}>
                                   <a href="#" className="text-decoration-none text-warning">
                                        <CardProduks key={idx} fitur={val}/>
                                   </a>
                              </Col>
                              )
                         }
                    </Row>
               </div>
          </>
     }
}