
import React from "react";
import { ListGroup } from "react-bootstrap";
import * as Icons from 'react-icons/bs';
import TypePengiriman from "../../Find/child/TypePengiriman";
import { ContextKeranjang } from "../ContextKeranjang";

export default class InfoPembayaran extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        const context  = this.context;
        return (
            <>
                 <div className="light-cart">
                    <div className="content-right-cart">
                        <h5
                            className="text-center mb-2"
                            style={{ color:'GrayText' }}>
                            INFO PEMBAYARAN...
                        </h5>
                        <ListGroup variant="flush">
                            <ListGroup.Item style={{ color: 'GrayText' }}>
                                <div className="box-form-data">
                                    <div className="d-flex" style={{ gap: '10px' }}>
                                        <div style={{ alignSelf:'center' }}>
                                            <Icons.BsFillGeoAltFill color="#198d6e" size={'16px'}/>
                                        </div>
                                        <div style={{ alignSelf:'center', paddingTop:'10px' }}>
                                            <h6>Alamat Pengiriman</h6>
                                        </div>
                                    </div>
                                    <div className="group-form">
                                        <input
                                            type="text"
                                            className="form-input-data"
                                            placeholder="Masukan Alamat Lengkap..." />
                                        <button className="btn">
                                            <Icons.BsFillPenFill color="#198d6e" size={'17px'}/>
                                        </button>
                                    </div>
                                </div>
                                <div className="box-form-data">
                                    <div className="d-flex" style={{ gap: '10px' }}>
                                        <div style={{ alignSelf:'center' }}>
                                            <Icons.BsBox color="#198d6e" size={'16px'}/>
                                        </div>
                                        <div style={{ alignSelf:'center', paddingTop:'10px' }}>
                                            <h6>Code Langganan</h6>
                                        </div>
                                    </div>
                                    <div className="group-form">
                                        <input
                                            type="text"
                                            className="form-input-data"
                                            placeholder="Masukan Code Langganan..." />
                                    </div>
                                </div>
                            </ListGroup.Item>
                            <TypePengiriman type={'CART'}/>
                            <div style={{ padding: '12px' }}>
                                { this.props.children }
                            </div>
                        </ListGroup>
                    </div>
                 </div>
            </>
        )
    }
}
InfoPembayaran.contextType = ContextKeranjang;