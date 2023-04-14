import React from "react";
import { Card, Col, Container, Form, ListGroup, Row } from "react-bootstrap";
import { ContextFromUsers } from "../../../../Context/Global";
import  * as Icons from 'react-icons/bs';
import NavbarsUsers from "../../Users/Component/NavbarsUsers";
import { Navigate, useLocation } from "react-router-dom";
import Loading_1 from '../../../loading/Loading_1';
import * as Support from  '../../../Support/supportString';

export default class PaymentProduk extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            loading: false,
            items:null,
            no_rek: null,
            bank: null,
            nama_bank: null,
        }
        this.Navigations        = this.Navigations.bind(this);
        this.handleClickPayment = this.handleClickPayment.bind(this);
        this.handleChangeInfoPayment = this.handleChangeInfoPayment.bind(this);
    }
    
    componentDidMount(){
        new Promise((resolve, reject) => {
            setTimeout(() =>{
                this.setState((val) =>{
                    return {...val, loading: true}
                })
            }, 1500);
        })
    }

    handleClickPayment({event, items}){
        this.setState((values) =>{
            return {...values, 
                items: {
                    ...this.state.items,
                    items, info_payment:{
                        no_rek: this.state.no_rek,
                        bank: this.state.bank,
                        nama_bank: this.state.nama_bank
                    }}
        }});
    }

    handleChangeInfoPayment({type, event}){
        switch(type){
            case 'B':
                this.setState({bank: event.target.value});
                break;
            case 'R':
                this.setState({no_rek: event.target.value});
                break;
            case 'N':
                this.setState({nama_bank: event.target.value});
                break;
            default:
                break;
        }
    }

    Navigations() {
        const location = useLocation();
        if(location.state === null) return <Navigate to={'/users/dasboard'} replace={true}/>
        return <>
            <NavbarsUsers/>
                <section style={{ paddingTop: '5rem' }}>
                    <h4
                        className="text-center mb-4"
                        style={{ color: 'GrayText' }}>
                        Pilih Metode Pembayaran
                    </h4>
                    <Container fluid style={{ color: 'GrayText' }}>
                        <Row className="row-cols-1 row-cols-md-2 g-3">
                            <Col md={8}>
                                <Card 
                                    style={{ 
                                        border: 'none', 
                                        boxShadow: '2px 3px 3px 2px rgba(0, 0, 0, 0.4)'
                                    }}>
                                    <Card.Header
                                     style={{ color:'GrayText', borderBottom: '2px solid green' }}>
                                        Total Tagihan:
                                        Rp <strong>{Support.default.
                                        formatRupiah(location.state?.total_orders)}
                                        </strong>
                                    </Card.Header>
                                    <Card.Header style={{ padding: '12px' }}>
                                       <div className="d-flex" style={{ gap: '10px' }}>
                                           <div><Icons.BsCheckCircleFill color="green"/></div>
                                           <span>Transfer Manual..</span>
                                       </div>
                                    </Card.Header>
                                    <Card.Body>
                                       <div className="box-form ltr mb-4">
                                           <div className="label">
                                                <span><Icons.BsBank size={'14px'} color='#198d6e'/></span>
                                                <span>Bank Tujuan</span>
                                           </div>
                                           <select
                                                name="name_bank" id="bank"
                                                className="select"
                                                placeholder="Masukan Bank"
                                                onChange={async(event) => 
                                                this.handleChangeInfoPayment({type: 'B', event: event})}>
                                                <option value="">Masukan Bank</option>
                                                <option value="BRI">BRI</option>
                                                <option value="BCA">BCA</option>
                                                <option value="BNI">BNI</option>
                                           </select>
                                       </div>
                                       <div className="box-form">
                                            <div className="label mb-3">
                                                <span><Icons.BsBox size={'14px'} color='#198d6e'/></span>
                                                <span>Informasi Rekening Pengirim</span>
                                            </div>
                                            <div className="d-flex" style={{ gap: '10px' }}>
                                                <div className="box-form" style={{ padding: '0px' }}>
                                                    <div className="label">
                                                        <span>
                                                            <Icons.BsBank size={'14px'}
                                                             color='#198d6e'/>
                                                        </span>
                                                        <span>Nama Pemilik Rekening</span>
                                                    </div>
                                                     <input
                                                        type="text"
                                                        onChange={async (event) => 
                                                        this.handleChangeInfoPayment(
                                                        {type: 'N', event: event})}
                                                        className="select"
                                                        placeholder="Masukan Nama Rekening"/>
                                                </div>
                                                <div className="box-form" style={{ padding: '0px' }}>
                                                    <div className="label">
                                                        <span><Icons.BsBank size={'14px'}
                                                          color='#198d6e'/>
                                                         </span>
                                                        <span>No Rekening</span>
                                                    </div>
                                                    <input onChange={async (event) => 
                                                        this.handleChangeInfoPayment(
                                                        {type: 'R', event: event}) }
                                                        type="text"
                                                        className="select"
                                                        placeholder="Masukan No Rekening"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div style={{ padding: '0px 10px' }}>
                                           <div className="mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, deserunt?</div>
                                            <Form.Check 
                                                type="switch"
                                                id="check-id"
                                                label="Simpan Nomor Rekening..">
                                            </Form.Check>
                                        </div>
                                        <button 
                                            className="btn float-end d-flex"
                                            onClick={async(event) => 
                                            this.handleClickPayment
                                            ({event: event, items: location.state})}
                                            style={{ 
                                                backgroundColor:'#198d6e',
                                                color: 'white',
                                                gap: '10px'
                                            }}>
                                            <span>
                                                <Icons.BsArrowDownCircleFill size={'17px'}/>
                                            </span>
                                             Bayar Sekarang
                                        </button>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={4}>
                                <Card
                                 style={{ 
                                    border: 'none',
                                    boxShadow: '2px 3px 3px 2px rgba(0, 0, 0, 0.4)'
                                 }}>
                                    <Card.Header>
                                        <div className="d-flex" style={{ gap:'10px' }}>
                                            <span>
                                                <Icons.BsCreditCard color="#198d6e" size={ "22px"}/>
                                            </span>
                                            <h6>Ringkasan Pembayaran</h6>
                                        </div>
                                    </Card.Header>
                                    <Card.Body>
                                        <ListGroup variant="flush">
                                            <ListGroup.Item className="text-black-50">
                                                <div 
                                                    className="d-flex"
                                                    style={{ 
                                                        justifyContent:'space-between',
                                                        marginBottom: '7px'
                                                    }}>
                                                    <span>Total Transaksi</span>
                                                    <span>
                                                        Rp <strong className="text-black-50">
                                                            {Support.default
                                                        .   formatRupiah(location.state?.total_orders)}
                                                        </strong>
                                                    </span>
                                                </div>
                                                <div 
                                                    className="d-flex"
                                                    style={{ 
                                                        justifyContent:'space-between',
                                                        marginBottom: '7px'
                                                    }}>
                                                    <span>Biaya Langganan</span>
                                                    <span>Gratis</span>
                                                </div>
                                            </ListGroup.Item>
                                            <ListGroup.Item>
                                                <div 
                                                    className="d-flex"
                                                    style={{ 
                                                        justifyContent:'space-between',
                                                        marginBottom: '7px'
                                                    }}>
                                                    <span>Total Tagihan</span>
                                                    <span
                                                        style={{ fontWeight:'bold' }}>
                                                        <strong>
                                                            Rp {Support.default
                                                            .formatRupiah(location.state?.total_orders)}
                                                        </strong>
                                                    </span>
                                                </div>
                                            </ListGroup.Item>
                                        </ListGroup>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </>
        }
    render(){
        const { loading } = this.state;
        if(!loading) 
            return <Loading_1/>
        return <this.Navigations/>
    }
}
PaymentProduk.contextType = ContextFromUsers;