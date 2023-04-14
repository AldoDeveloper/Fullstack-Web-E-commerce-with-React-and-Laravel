import React, { useState } from "react";
import { ListGroup, Card, Pagination } from "react-bootstrap";
import * as Icons from 'react-icons/bs';
import * as FaIcons from 'react-icons/fa';
import img from '../../../../img/team.png';
import { motion } from "framer-motion";
import PaginationUlasan from "./PaginationUlasan";
import UlasanGlobal from "../../../../../Context/ContextUlasanGlobal";

const setVariantData = {
     isActive:{
          opacity: 1, 
          height: '100%',
     },
     isHidde:{
          opacity: 0, 
          height: '0px',
     }
}

const DrovdownHandling = (props) =>{
     const [active, setActived]  = useState(false);
     const handleClick = (props) =>{
          setActived(!active);
     }
     const IconsValid = () =>{
          return active ? <Icons.BsChevronDown/> : <Icons.BsChevronUp/>
     }
     const ShowDrovdown = () =>{
          return <motion.div initial={'isHidde'} transition={{duration: 0.5}} key={props.id} animate={active ? 'isActive' : 'isHidde'} variants={setVariantData} style={{border: 'none'}} className="card bg-bls mt-3">
                    <Card.Body>
                         <div className="d-flex" style={{gap: '7px'}}>
                              <img src={img} width={'40px'} height={'40px'} className="rounded-circle" alt="" />
                              <span style={{alignSelf: 'center', fontSize:'15px'}} className="fw-bold">Aldo Ratmawan</span>
                              <span style={{fontSize: '15px', alignSelf: 'center', color: 'GrayText'}} className="fw-bold">Lebih dari 2 Bulan...</span>
                         </div>
                         <div className="content mt-2" style={{color: 'GrayText'}}>
                              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, velit quam. Amet autem ipsum rem.
                         </div>
                    </Card.Body>
               </motion.div>
     }
     return (
          <>
               <div className="d-flex justify-content-between mt-2">
                    <span><Icons.BsHandThumbsUpFill color="gray"/> Membantu</span>
                    <div style={{cursor:'pointer'}} onClick={async (ev) => handleClick('asf')}>
                         <span>Lihat Balasan  <IconsValid/></span>
                    </div>
               </div>
               <ShowDrovdown/>
          </>
     )
}

export default class CommentUlasan extends React.Component{

     constructor(props){
          super(props);
          this.state = {
               itemsActive:null,
          }
          this.clickHandleDrovdown = this.clickHandleDrovdown.bind(this)
     }

     clickHandleDrovdown(props){
          console.log(props);
     }

     render(){
          return(
               <>
                     <div className="d-flex justify-content-between mt-3">
                         <div>
                              <h5>Ulasan Pilihan</h5>
                              <span style={{fontSize: '12px'}}>Menampilan 160 dari 10</span>
                         </div>
                         <div style={{alignSelf:'center'}}>
                              <div className="d-flex" style={{gap: '10px'}}>
                                   <span style={{alignSelf: 'center'}}>Urutkan</span>
                                   <input type="text" className="form-control" />
                              </div>
                         </div>
                    </div>
                    <ListGroup variant="flush" className="mt-5">
                    {
                         Array.from({length: 8}).map((val, idx) =>(
                              <ListGroup.Item key={idx}>
                                  <div className="d-flex justify-content-between">
                                        <div>
                                             <div className="d-flex"style={{gap: '5px'}}>
                                                  {
                                                       Array.from({length: 5}).map((val, indexs) =>(
                                                            <Icons.BsStarFill key={indexs} style={{alignSelf: 'center'}} size={'15px'} color="orange"/>
                                                       ))
                                                  }
                                                  <span style={{fontSize:'14px', color: 'gray'}} className="fw-bold">Lebih dari satu tahun</span>
                                             </div>
                                        </div>
                                        <div>
                                             <FaIcons.FaEllipsisV color="gray"/>
                                        </div>
                                  </div>
                                  <div className="d-block">
                                        <div className="d-flex" style={{gap: '7px'}}>
                                             <img src={img} width={'50px'} height={'50px'} className="rounded-circle" alt="" />
                                             <span style={{alignSelf: 'center'}} className="fw-bold">Aldo Ratmawan</span>
                                        </div>
                                        <div className="content">
                                             Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit expedita deserunt eveniet ullam ipsum rem accusamus eum quaerat delectus harum.
                                        </div>
                                        <DrovdownHandling key={idx} id={idx}/>
                                  </div>
                              </ListGroup.Item>
                         ))
                    }
                   <PaginationUlasan/>
               </ListGroup>
               </>
          )
     }
}
CommentUlasan.contextType = UlasanGlobal;