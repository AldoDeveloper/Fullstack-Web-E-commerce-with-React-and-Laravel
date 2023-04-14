import React from 'react';
import { Card, Col , ListGroup, ProgressBar, Row } from 'react-bootstrap';
import * as Icons from 'react-icons/bs';
import UlasanGlobal from '../../../../../Context/ContextUlasanGlobal';

export default class Ulasan extends React.Component{
     constructor(props){
          super(props)
     }

     render(){
          return <>
               <Card>
                    <Card.Header className="bg-success text-white">
                         <h5 className="text-center">Ulasan Pembeli</h5>
                    </Card.Header>
                    <Card.Body>
                         <div className="info-ulasan">
                              <div><Icons.BsStarFill  size={'2rem'} color='orange'/></div>
                              <div>4.8</div>
                              <span>/5.0</span>
                         </div>
                         <div className='text-center' style={{fontSize: '14px'}}>
                              <span className="fw-bold">92% Pembelian merasa Puas</span>
                              <div className='d-flex justify-content-center' style={{gap: '6px', color: 'gray'}}>
                                   <div>200 Rating</div>
                                   <div style={{ alignSelf: 'center', width: '5px', height: '5px', borderRadius: '50%', backgroundColor:'gray' }}></div>
                                   <div>100 Ulasan</div>
                              </div>
                         </div>
                         <div className="mt-3">
                              {
                                   Array.from({length: 5}).map((val, idx) => 
                                        <div className="rating" key={idx}>
                                             <div className="start">
                                                  <Icons.BsStarFill color='orange'/>
                                             </div>
                                             <div className="num">
                                                  {idx + 1}
                                             </div>
                                             <div className="progres">
                                                  <ProgressBar variant='success' now={'20'} style={{height: '7px'}}/>
                                             </div>
                                             <div className="num">
                                                  100
                                             </div>
                                        </div>
                                   )
                              }
                         </div>
                    </Card.Body>
               </Card>
               <Card className="mt-3">
                    <Card.Header className="bg-success text-white text-center"><h5>Filter Ulasan..</h5></Card.Header>
                    <Card.Body style={{ padding: '0px' }}>
                         <ListGroup>
                              <ListGroup.Item>
                                 <div className="d-flex" style={{gap: '10px'}}>
                                       <input type="checkbox" className="" name="" id="" />
                                 </div>
                              </ListGroup.Item>
                              <ListGroup.Item>
                                   Lorem ipsum dolor sit.
                              </ListGroup.Item>
                         </ListGroup>
                    </Card.Body>
               </Card>
          </>
     }
}
Ulasan.contextType = UlasanGlobal;