import { Card} from "react-bootstrap";
import images from '../../img/welcome_green.svg';
import imgGoogle from '../../img/google.png'
import React, { useState } from "react";
import useFormValidation from "../../validation/useFormValidation";
import { motion } from "framer-motion";
import { Form, useActionData } from "react-router-dom";
import * as Icon from 'react-icons/bs';

export default function(props){
     const { register, error, handleChanges, registerAction } = useFormValidation();
     const formLoginAuth   = useActionData();
     const [type, setType] = useState({
          action: false,
          type:'password'
     })
     const submitActivation = () =>{
          if(registerAction?.name && registerAction?.password  || formLoginAuth?.submit) return true;
          return false
     }

     const HandleshowPassword = () =>{
          let typs = '';
          const { action } = type;
          if(action)  typs = 'password';
          if(!action) typs = 'text';
          setType({action: !action, type: typs})
     }

     return (<>
     <h1 className="titles text-center fs-2 m-3">TOKO SALSABILA</h1>
          <div className="auth-column">
               <div className="row-auth" style={{ maxWidth: '350px' }}>
                    <img src={images} width="350px" height={'350px'} alt="" />
                    <h4 className="text-center fw-bold">Jual Beli Mudah Hanya di Tokosalsabila</h4>
               </div>
               <div className="row-auth">
                    <Card style={{ minWidth: '25rem' }} className="box-login">
                         <Card.Title className="text-center m-2 fs-4 fw-bold">
                              Masuk Sekarang
                              <div className="text-center capt" style={{ color: '#9e9595' }}>Sudah mempunyai Account ? <a href="http://" className="text-decoration-none text-success">Daftar..</a></div>
                         </Card.Title>
                         <Card.Body>
                            <div className="m-3">
                              <button className="btn btn-light form-control mb-3">
                                   <div className="d-flex" style={{ justifyContent:'space-between' }}>
                                        <span><img src={imgGoogle} width='20px' height={'20px'} alt="" /></span>
                                        <span><strong>Google</strong></span>
                                        <div></div>
                                   </div>
                              </button>
                              <hr />
                            <div className="mt-4">
                              <Form method="post" action="/auth/login">
                                   <div className="mb-2">
                                        <label className="form-label fw-bold" style={{ color: '#9e9595' }}>Email</label>
                                        <input style={{ boxShadow:'none' }}
                                             className={error?.name ? 'form-control is-invalid': registerAction?.name ? 'form-control' : 'form-control'}
                                             type="text" id="name"
                                             name="email"
                                             defaultValue={formLoginAuth?.old.email}
                                             onChange={handleChanges}
                                             placeholder="Masukan Email..." {...register('name', { required: true, pattern:/\S+@\S+\.\S+/ })} />
                                             {error?.name === 'required'  &&  <motion.div transition={{ duration: 0.5 }} initial={{ opacity: 0, y:10 }} animate={{ opacity: 1, y:0 }} className="invalid-feedback"> Tidak Boleh Kosong... </motion.div>}
                                             {error?.name === 'pattern'   &&  <motion.div transition={{ duration: 0.5 }} initial={{ opacity: 0, y:10 }} animate={{ opacity: 1, y:0 }} className="invalid-feedback"> Gunakan Username Email Terdaftar... </motion.div>}
                                   </div>
                                   <div className="mb-3">
                                        <label className="form-label fw-bold" style={{ color:'#9e9595' }}>Password</label>
                                        <div className="input-group">
                                             <input style={{ boxShadow:'none' }}
                                                       className={error?.password ? 'form-control is-invalid': registerAction?.password ? 'form-control' : 'form-control'}
                                                       type={type.type}
                                                       id="password"
                                                       name="password"
                                                       defaultValue={formLoginAuth?.old.password}
                                                       onChange={handleChanges}
                                                       placeholder="Masukan Password..." {...register('password', { required: true })} />
                                                       <span className="input-group-text show-pass" onClick={HandleshowPassword}>{type.action ? <Icon.BsEye/> : <Icon.BsEyeSlash/>}</span>
                                        </div>
                                        {error?.password === 'required' && <motion.div transition={{ duration: 0.5 }} initial={{ opacity: 0, y:10 }} id="password" animate={{ opacity: 1, y:0 }} className="invalid-form">Password diwajibkan diisi... </motion.div>}
                                   </div>
                                   <button type={submitActivation() ? 'submit' : 'button'} className={submitActivation() ? 'btn btn-success form-control p-2' : 'btn btn-success form-control p-2 disabled not-allowed'}>Masuk</button>
                              </Form>
                            </div>
                            </div>
                         </Card.Body>
                    </Card>
               </div>
          </div>
     </>)
}