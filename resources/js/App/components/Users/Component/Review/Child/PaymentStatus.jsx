import React from "react";
import imgs from '../img/payment.svg';

export default class PaymentStatus extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
           <div className="d-flex justify-content-center">
                <div className="card-info-payment shadow text-black-50">
                    <h5 className="text-center mb-3 fw-bold text-info">STATUS PEMBAYARAN</h5>
                    <img src={imgs} alt="" className="rounded mx-auto d-block mb-3" width={'175px'} height={'175px'}/>
                    <div className="hr"></div>
                    <h5 className="text-success text-center">NO.F-21912-1957-1580-12</h5>
                    <div className="d-flex gap-2 justify-content-center">
                        <h6 className="text-secondary text-center fw-bold">SUDAH TERBAYAR</h6>
                        <div className="vr"></div>
                        <h6 className="text-secondary text-center fw-bold">Tanggal Pembayaran: 12 April 2023</h6>
                    </div>
                </div>
           </div>
        )
    }
}