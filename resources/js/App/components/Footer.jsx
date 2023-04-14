
import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import * as apis from '../api/controller'
import * as Support from '../Support/supportString';
import * as Icon from 'react-icons/bs'

export default class Footer extends React.Component{
     constructor(props){
          super(props);
          this.state = {
               isLoading:true,
               error:null,
               items:{},
          }
     }

     componentDidMount(){
          const getFetch = apis.default.useInfoFooter();
          getFetch.then((res) =>{
               this.setState((values) => {
                    return {...values, isLoading: false, items:res}
               })
          });
     }

     ListInfoFooter(props){
          return (
               <Row className="row-cols-1 row-cols-md-2 g-4">
                    {
                         props?.data.map((val, idx) => {
                              const values = Object.keys(val);
                              values.push(val[values[0]])
                              const [key, items] = values;
                              return (
                                   <Col key={idx}>
                                        <Card style={{ border: 'none', minHeight: '25vh', backgroundColor:'transparent' }}>
                                             <Card.Body>
                                                  <h5 className="text-warning">{Support.default.ucfrist(key)}</h5>
                                                  <div>
                                                       {
                                                            items.map(([title, link], indexs) => (
                                                                 <a href={link} key={indexs} className="text-decoration-none text-white">
                                                                      <li className="list-foot" style={{ listStyle:'none'}}>
                                                                           <p>{ title }</p>
                                                                      </li>
                                                                 </a>
                                                            ))
                                                       }
                                                  </div>
                                             </Card.Body>
                                        </Card>
                                   </Col>
                              )
                         })
                    }
               </Row>
          )
     }
     SocialInfoFooter(props){
          return  <div className="mt-2">
                    {
                         props?.data.map((val, idx) => {
                              const values = Object.keys(val);
                              values.push(val[values[0]]);
                              const [key, items] = values;
                              return (
                                   <Col key={idx}>
                                        <h5 className="text-warning">{Support.default.ucfrist(key)}</h5>
                                        <div className="d-flex g-2 mt-3">
                                             {
                                                  items.map(([path, link], idx) => (
                                                      <a href={link} key={idx} className="m-2"><img src={path} alt={link} width={'30px'} height={'30px'} /></a>
                                                  ))
                                             }
                                        </div>
                                   </Col>
                              )
                         })
                    }
                    <div className="mt-3 input-group">
                         <input style={{ backgroundColor:'transparent', color:'white' }} type="email" className="form-control" name="email" placeholder="Email..." />
                         <span className="input-group-text bg-warning text-white">Submit</span>
                    </div>
                 </div>
          }    

     BackInfoFooter(props){
          return <>
               <div>
                    <h4 className="text-center text-warning">Toko Salsabila</h4>
                    <div className="d-flex justify-content-center">
                         <img src={props.data?.img} alt="" width={'300px'} height={'300px'} /> 
                    </div>
                    <div className="d-flex justify-content-center">
                         {
                              props.data?.button_info.map(([text, path], idx) => (
                                   <button key={idx} className="btn btn-warning m-1 text-white fw-bold"><Icon.BsBoxArrowRight/> {Support.default.ucfrist(text)}</button>
                              ))
                         }
                    </div>
               </div>
          </>
     }

     mainList({data1, data2, data3}){
          return [<this.ListInfoFooter data={data1}/>, <this.SocialInfoFooter data={data2}/>, <this.BackInfoFooter data={data3}/>]
     }
     render(){
          const {items, isLoading, error} = this.state;
          if(isLoading) return <h2>Loading....</h2>
          else if(error) return <h2>{error.getMessage()}</h2>
          else
          return <>
               <div>
                    <Col className="bg-dark" style={{ minHeight: '70vh' }}>
                    <h2 className="text-center pt-3 pb-3 text-warning">TOKO SALSABILA...</h2>
                         <Row className="row-cols-1 row-cols-md-3 g-2 m-2">
                            {
                                this.mainList({data1: items?.config?.info, data2: items?.config?.sosmed, data3: items?.config?.bg}).map((val, idx) => (
                                    <Col key={idx}>
                                        <Card className="bg-dark text-white" style={{ border:'none', minHeight:'50vh' }}>
                                            <Card.Body>
                                               {val}
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                ))
                            }
                        </Row>
                    </Col>
               </div>
          </>
     }
}