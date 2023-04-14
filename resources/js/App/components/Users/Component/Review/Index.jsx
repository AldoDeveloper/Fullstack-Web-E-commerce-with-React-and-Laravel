import React from "react";
import { Card, Col, ListGroup, Row } from "react-bootstrap";
import imgs from '../../../../img/credit_card.svg';
import CountDownTimer from "../../../CountDownTimer";
import Loading_1 from "../../../../loading/Loading_1";
import { Navigate } from "react-router-dom";
import * as Icons from 'react-icons/bs';

const TestJam = ['Apr 10, 2023 14:20:10', 'Apr 10, 2023 18:30:50', 'Apr 10, 2023 19:30:03'];

export default class Index extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            loading: false,
            redirect: false,
            to: null,
        }
        this.navigateClick = this.navigateClick.bind(this);
    }
    componentWillUnmount(){}
    componentDidMount(){
        new Promise((resolve, reject) => {
            setTimeout(() =>{
                this.setState((values) => {
                    return {...values, loading: !this.state.loading}
                })
            }, 1500)
        })
    }
    navigateClick({to}){
        this.setState((values) =>{
            return {...values, redirect: !this.state.redirect, to: to}
        })
    }
    render(){
        const { loading, redirect, to } = this.state;
        if(!loading) return <Loading_1 height={'40vh'}/>
        return (
            <section>
                { redirect ? <Navigate to={ "/users/dasboard/review/" + to } replace={ true }/> : '' }
                <ListGroup variant="flush">
                    {
                        Array.from({length: 3}).map((val, idx) => (
                            <ListGroup.Item key={idx} className="ps-0 pe-0 pb-4 mb-3">
                               <div className="d-flex justify-content-start gap-4">
                                    <div className="d-flex justify-content-start gap-4" style={{ flex:'40%' }}>
                                        <img src={imgs} className="rounded border p-2 shadow" width={'150px'} height={'150px'} alt="" />
                                        <div className="text-center text-black-50">
                                            <h5>BANK BRI</h5>
                                            <div>NO: 91491-12414-129129</div>
                                        </div>
                                    </div>
                                    <div style={{ flex: '60%' }}>
                                        <h5 className="text-success">NO.F-21912-1957-1580-12</h5>
                                        <div className="d-flex text-black-50 fw-bold mb-2 gap-2">
                                            <span>Tanggal Transaksi: 12 April 2023</span>
                                            <div className="vr"></div>
                                            <span>Total: <strong>Rp 120.000,00</strong></span>
                                        </div>
                                        <div className="bg-light-info p-2 shadow text-center" style={{ borderRadius: '4px' }}>
                                            <h6>SEGERE LAKUKAN PEMBAYARAN SEBELUM WAKTU..</h6>
                                            <CountDownTimer date={TestJam[idx]} id={'keys' + idx}/>
                                            <Card className="border-0 shadow">
                                                <Card.Body className="text-center text-black-50">
                                                    <h5 className="text-black-50 fw-bold">Total Yang Harus dibayar</h5>
                                                    <div className="fw-bold fs-5 text-danger">Rp 120.000.00</div>
                                                </Card.Body>
                                            </Card>
                                        </div>
                                    </div>
                                </div>
                            </ListGroup.Item>
                        ))
                    }
                </ListGroup>
            </section>
        )
    }
}