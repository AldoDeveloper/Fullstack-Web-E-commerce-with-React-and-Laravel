import { Splide, SplideSlide } from "@splidejs/react-splide";
import React from "react";
import { Card } from "react-bootstrap";
import GlobalContextFind from "../../../../../Context/FindContext";
import img from '../../../../img/khkh.jpg';

const optionsSlide = {
     perPage: 5,
     pagination:false,
     gap:'11px',
     arrows:true,
     rewind: false,
     cover:true,
}
export default class Slugh extends React.Component{
     constructor(props){
          super(props);
          this.state = {
               loading:false,
               count:0,
          }
          this.main = React.createRef();
     }
     componentDidMount(){
          const { count } = this.state;
          if(count < 1){
               new Promise((resolve, reject) =>{
                    setTimeout(() =>{
                         this.setState((args) =>{
                              return { ...args, loading: !this.state.loading, count: 1}
                         })
                    }, 5000)
               })
          }    
     }
     render(){
          const { loading } = this.state;
          if(!loading) return <><h4>LOADING...</h4></>;
          
          return <div>
               <h5 style={{padding: '0px 50px'}}>Produk Pilihan untuk anda...</h5>
               <Splide options={optionsSlide} ref={this.main}>
                   {
                    Array.from({length: 6}).map((val, idx) =>{
                        return <SplideSlide key={idx}>
                              <Card>
                                   <Card.Body>
                                        <h6>safkanskf</h6>
                                   </Card.Body>
                              </Card>
                        </SplideSlide>
                    })
                   }
               </Splide>
          </div>
     }
}

Slugh.contextType = GlobalContextFind;