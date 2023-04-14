import React from "react";
import imgs from '../img/not_found.svg';
import { ComunicationElement } from "../Context/GlobalContextFindProduk";
import * as Icons from 'react-icons/bs';
// status ACTIVE, NOT_ACTIVE, WAIT

export default class PemesananStatus extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
       const { redirect } = this.context;
       return (
            <div className="d-flex justify-content-start gap-4">
                <div className="d-flex justify-content-start" style={{ gap: '12px', flex:'40%' }}>
                    <img src={imgs} className="rounded border p-2" width={'150px'} height={'150px'} alt="" />
                    <div className="text-center">
                       Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis, enim?
                    </div>
                </div>
                <div style={{ flex: '60%' }}>
                    <h5 className="text-success">NO.F-21912-1957-1580-12</h5>
                    <div className="d-flex text-black-50 fw-bold mb-2 gap-2">
                        <span>Tanggal Transaksi: 12 April 2023</span>
                        <div className="vr"></div>
                        <span>Total: <strong>Rp 120.000,00</strong></span>
                    </div>
                    <div className="bg-light-success p-2 text-black-50" style={{ borderRadius: '4px' }}>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore quisquam, quia necessitatibus veniam eius doloribus facere voluptas magni laudantium repudiandae, sed sapiente fuga corrupti sequi aperiam praesentium ea. Molestiae, quia!
                    </div>
                    <div className="d-flex justify-content-start mt-2 gap-2">
                        <button className="btn btn-outline-secondary btn-sm"><Icons.BsCheckCircleFill/> Sudah diterima</button>
                        <button id="id-tabs" onClick={ async(event) => redirect(event) } className="btn btn-outline-secondary btn-sm"><Icons.BsFillGeoAltFill/> Lacak</button>
                    </div>
                </div>
            </div>
       )
    }
}
PemesananStatus.contextType = ComunicationElement;