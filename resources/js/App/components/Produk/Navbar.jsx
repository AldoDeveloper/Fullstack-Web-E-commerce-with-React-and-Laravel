import React, { useState } from "react";
import { Container, Form, InputGroup, Modal } from "react-bootstrap";
import * as Icon from 'react-icons/bs';
import { motion } from "framer-motion";
import imgs from '../../img/google.png';
import { Form as Forms, redirect, useHref, useRouteLoaderData } from "react-router-dom";
import GlobalContextFind from "../../../Context/FindContext";

const SlideHead = ({info}) => {
     if(info) return <h5>GROSIR</h5>;
     return <></>
}

const variantAnimatonShow = {
     show: {
          width:'82%',
          height:'200px',
          zIndex:1,
          opacity:1,
          backgroundColor:'white',
          borderRadius:'3px',
          boxShadow:'2px 3px 3px 2px rgba(0, 0, 0,0.4)',
          marginTop:'3px',
          padding: '20px'
     },
     hidde: {
          y: 0,
          position:'absolute',
          width:'82%',
          opacity:0,
          zIndex:1,
          backgroundColor:'white',
          height:'0',
          padding: '20px'}
}

export default function(props){

     const auth = useRouteLoaderData('auth-check');
     const [actived, setActived]  = useState(false);
     const [showModal, setModal]  = useState(false);
     const [selection, setSelection] = useState(false);
     const { callback } = React.useContext(GlobalContextFind);
     const { pathname } = new URL(window.location.href);

     const clickShowSearch = () =>{
          setActived(!actived);
          if(!actived) return document.body.classList.add('drov');
          else document.body.classList.remove('drov')
     }

     const handleClickLogin = () =>{
          window.localStorage.setItem('back', pathname);
          window.location.href = '/auth/login';
     }

     React.useEffect(() =>{
          const scroolSelection = (ev) => {
              if(window.scrollY > 10) return setSelection(true)
              return setSelection(false)
          }
          if(props?.type === 'selection'){
               window.addEventListener('scroll', scroolSelection)
          }
          return () =>{
               window.removeEventListener('scroll', scroolSelection)
          }
     }, [selection])
     
     React.useEffect(() =>{
          const hov = document.querySelector('.kategoris');
          const elemen = document.querySelector('#nav-bar');
          if(elemen != undefined && typeof callback === 'function'){
               callback({navbarHeight: elemen.getBoundingClientRect().height})
          }
          function callbackt(ev){
              setModal(!showModal)
          }
          hov.addEventListener('mouseenter', callbackt);
          return () =>{
               return hov.removeEventListener('mouseenter', callbackt);
          }
     }, []);
     return <>
     <Modal
          key={Math.random()}
          show={showModal}
          onHide={() => setModal(false)}
          backdrop={"static"}
          className="modal-xl"
          dialogClassName="modal-90w"
          aria-labelledby="modal-show-category">
               <Modal.Header closeButton>
                    <Modal.Title id="modal-show-category">
                         Hello World...
                    </Modal.Title>
               </Modal.Header>
               <Modal.Body>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa enim magnam ipsum accusantium architecto nulla, aperiam nihil nam adipisci ea.</p>
               </Modal.Body>
     </Modal>
          <div className="position-relative">
               <div className="navbar-produk" id="nav-bar">
                    <div className="d-flex">
                         <div className="flex-30">
                              <div className="content">
                                   <a href="/" className="text-decoration-none"> <h3 className="tk">SALSABILA</h3></a>
                                   <span style={{ fontSize:'14px' }} className={'kategoris'}>Kategori</span>
                                   <div className="form-control" style={{ border:'none', margin:0 }}>
                                        <InputGroup>
                                                  <Form.Control placeholder="Search Produk..." onClick={() => clickShowSearch({data: 'aldo ratmawan'})}></Form.Control>
                                                  <InputGroup.Text style={{ backgroundColor:'#198d6e', color:'white' }}><Icon.BsSearch/></InputGroup.Text>
                                        </InputGroup>
                                        <div className="favorit-produk" style={{ float:'left' }}>
                                             {
                                                  ['Produk 1', 'Produk 2', 'Produk 3', 'Produk 4'].map((val, kidx) =>
                                                    <span key={kidx}>{val}</span>)
                                             }
                                        </div>
                                   </div>
                              </div>
                         </div>
                         <div className="flex-60">
                              <div className="content"> 
                                   <div className="end-navbar-produk">
                                        <Icon.BsCart3 color="#198d6e" size={'22px'}/>
                                   </div>
                                   <div className="content" style={{ gap:'15px' }}>
                                        {
                                             auth?.login ?
                                             <>
                                                  <Forms method="post" action="/auth/logout">
                                                       <input type="hidden" name="tokens" value={auth?.token} />
                                                       <input type="hidden" name="path" value={pathname} />
                                                       <input type="hidden" name="logout" value={true} />
                                                       <button type="submit" className="btn-login" style={{ backgroundColor:'#198d6e', color:'white' }}>
                                                            Keluar
                                                       </button>
                                                  </Forms>
                                                  <div>
                                                       <img src={auth?.users?.profile.path ? auth?.users?.profile.path : imgs } width={'40px'} height="40px" className="roundex-circle" alt="" />
                                                  </div>
                                             </>
                                             :
                                             <>
                                                  <button onClick={handleClickLogin} className="btn-login" style={{  }}>Masuk</button>
                                                  <button className="btn-login" style={{ backgroundColor:'#198d6e', color:'white' }}>
                                                       Daftar
                                                  </button>
                                             </>
                                        }
                                   </div>
                              </div>
                         </div>
                    </div>
                    <SlideHead info={selection}/>
               </div>
          </div>
         <Container>
               <motion.div initial={false} className="position-absolute" transition={{ duration:0.6 }}
                    animate={actived ? 'show' : 'hidde'} variants={variantAnimatonShow}>
                    naknan
               </motion.div>
         </Container>
     </>
}