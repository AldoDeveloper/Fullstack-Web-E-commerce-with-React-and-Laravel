import React from "react";
import { Card, ListGroup, Table } from "react-bootstrap";
import Footer from "../../Footer";
import * as Icons from 'react-icons/bs';
import InfoPembayaran from "./child/InfoPembayaran";
import { ContextFromUsers } from "../../../../Context/Global";
import { Navigate, useLoaderData } from "react-router-dom";
import NavbarsUsers from "../../Users/Component/NavbarsUsers";
import { ContextKeranjang } from "./ContextKeranjang";
import * as Support from '../../../Support/supportString';
const map = new Map;

const mapOrders = (produks, count) =>{
    const { id, name_produk, category_type, price }  = produks;
    return {
        id: id,
        name_produk: name_produk,
        category_type: category_type,
        promo: price?.promo,
        type: price?.type,
        price: price?.promo === null ? price?.price : price?.format.format_promo.price,
        count: count,
        total: count * (price?.promo === null ? price?.price : price?.format.format_promo.price)
    }
}

export default class Keranjang extends React.Component{

    constructor(props){
        super(props);
        this.handleRender = this.handleRender.bind(this);
        this.handleClick  = this.handleClick.bind(this);
        this.handelSelectOngkir    = this.handelSelectOngkir.bind(this);
        this.hanldeClickPembayaran = this.hanldeClickPembayaran.bind(this);
        this.state = {
            list: [], 
            ongkir: null,
            total: 0,
            payment: false,
            body: null,
        }
    }
    componentWillUnmount(){}

    getCart(){
        return useLoaderData();
    }

    handleClick(){
        const entries = Object.fromEntries(map.entries());
        var tot = 0;
        this.setState((values) => {
            return {...values, list: Object.values(entries)}
        });
        Object.values(entries).forEach(({produks: {total}}) => {
            tot += total
        });
        this.setState({total: tot})
    }

    handelSelectOngkir(props){
        this.setState({ongkir: props});
    }

    hanldeClickPembayaran(props){
        this.setState((values) =>{
            return {...values, payment:true, body: props}
        })
    }

    ListTableProduks(props){
        const animatedCheck =
         {
            show  : { opacity: 1 },
            hidde : { opacity: 0 },
         }
        const [activedList, setActivedList] = React.useState(false);
        const [count, setCount] = React.useState(0);
        const handleClick = ({produks}) => {
            setActivedList(!activedList);
            if(!activedList) {
                setCount(count + 1)
                map.set('orders_' + produks.id, { produks: mapOrders(produks, count + 1)})
            }
            else{
                map.delete('orders_' + produks.id);
                setCount(0);
            }
            props?.callback();
        }

        const handleCountProduk = ({type, produks}) =>{
           if(activedList){
            switch(type){
                case 'INC':
                    setCount(count + 1);
                    map.set('orders_' + props?.values.id, { produks: mapOrders(produks, count + 1)});
                    props?.callback();
                    break;
                case 'DEC':
                    setCount(count - 1);
                    map.set('orders_' + props?.values.id, { produks: mapOrders(produks, count - 1)});
                    props?.callback();
                    break;
                default:
                    break;
             }
           }
        }   
        const ActivedCheck = (propss) =>{
            if(propss?.boolean)
                return(
                    <div
                        className="position-absolute"
                        style={{ left:0, transform: 'translateY(50%)', padding:'12px'}}>
                        <Icons.BsCheckCircleFill color="green" size={'16px'}/>
                    </div>)
            return(
                    <div
                        className="position-absolute"
                        style={{ left:0, transform: 'translateY(50%)', padding:'12px'}}>
                        <Icons.BsDashCircleFill color="red" size={'16px'}/>
                    </div>
            )
        }
        return (
            <tr>
                <td className="td-list position-relative">
                    <img style={{ cursor:'pointer' }}
                        onClick={async (event) => handleClick({produks: props?.values})}
                        className="rounded"
                        src={props?.values.cover}
                        width={'100px'}
                        height={'100px'}
                        alt="" />
                    <div
                       className="text-center"
                       style={{ alignSelf:'center', width:'200px' }}> {props?.values.name_produk}
                    </div>
                    <ActivedCheck boolean={activedList}/>
                </td>
                <td>
                    <div className="align-items-text-center">
                        <div className="fw-bold text-black-50">
                            {
                                props?.values.price.promo === null
                                 ? props?.values.price.format.format_after_discount
                                 : <div>
                                    <div>{ props?.values.price.format.format_promo.price_format }</div>
                                    <strike
                                        className="fw-bold text-black-50"
                                        style={{ fontSize: '12px', fontStyle: 'italic' }}>
                                        {props?.values.price.format.format_after_discount}
                                    </strike>
                                 </div> 
                            }
                        </div>
                    </div>
                </td>
                <td>
                    <div className="align-items-text-center">
                        <div>
                            <span 
                                style={{ fontSize:'14px' }}
                                className="text-danger">
                                {props?.values.format_stock} pcs
                            </span>
                            <div className="bdr-form">
                                <button
                                    className={activedList ? '' : 'disabled not-allowed'}
                                    onClick={async(ev) => 
                                    handleCountProduk({type: 'DEC', produks: props?.values})}>
                                    <Icons.BsDash size={'17px'} color="#198d6e" className="fw-bold"/>
                                </button>
                                <div>{ count }</div>
                                <button
                                    className={activedList ? '' : 'disabled not-allowed'}
                                    onClick={async(ev) =>
                                     handleCountProduk({type: 'INC', produks: props?.values})}>
                                    <Icons.BsPlus size={'17px'} color="#198d6e" className="fw-bold"/>
                                </button>
                            </div>
                        </div>
                    </div>
                </td>
                <td>
                    <div className="align-items-text-center fw-bold text-black-50">
                       {
                        props?.values.price.promo === null ? '0' : props?.values.price.promo.discount
                       } %
                    </div>
                </td>
                <td>
                    <div className="align-items-text-center">
                        <button className="btn"><Icons.BsFillTrashFill color="red" size={'20px'}/></button>
                    </div>
                </td>
            </tr>
        )
    }
    handleRender(props){
        const { name } = this.context;
        const { keranjang } = this.getCart();
        const { list, total, ongkir } = React.useContext(ContextKeranjang);
        var Price_Total = total + ongkir;

        return (
            <>
             <NavbarsUsers/>
               <div className="layout-cart mb-2" style={{ paddingTop: '4rem' }}>
                  <div className="right-cart">
                     <div className="main-cart">
                     <Table striped>
                        <thead className="text-center text-black-50">
                            <tr>
                                <th>Produk</th>
                                <th>Total</th>
                                <th>Jumlah</th>
                                <th>Discount</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                           {
                           keranjang?.map(({ produks }, idx) =>{
                                return (
                                    <this.ListTableProduks
                                      key={idx}
                                      values={ produks }
                                      callback={this.handleClick}
                                    />
                                )
                            })
                           }
                        </tbody>
                        </Table>
                     </div>
                  </div>
                 <InfoPembayaran>
                    <Card className="mb-2">
                        <Card.Body>
                            <ListGroup variant="flush">
                                <ListGroup.Item>
                                    <div
                                        className="d-flex info-data-list">
                                        <span>Total Harga(<strong>{ list.length }</strong> Produk)</span>
                                        <span>Rp {Support.default.formatRupiah(total)}</span>
                                    </div>
                                    <div
                                        className="d-flex info-data-list">
                                        <span>Total Ongkos kirim</span>
                                        <span>Rp {Support.default.formatRupiah(ongkir)}</span>
                                    </div>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <div
                                     className="d-flex"
                                     style={{ 
                                            justifyContent:'space-between',
                                            color:'GrayText',
                                            fontSize: '15px'
                                         }}>
                                        <h6>Total Tagihan</h6>
                                        <span
                                            style={{ fontWeight:'bold', color: '#198d6e' }}>
                                           Rp {Support.default.formatRupiah(Price_Total)}
                                        </span>
                                    </div>
                                </ListGroup.Item>
                            </ListGroup>
                        </Card.Body>
                    </Card>
                    <div>
                        <button
                            onClick={async() =>
                            this.hanldeClickPembayaran({
                                orders : list,
                                total_orders: Price_Total,
                                ongkir: ongkir
                            })}
                            className={list.length < 1 || ongkir < 1
                             ? 'btn btn-success form-control disabled'
                             : 'btn btn-success form-control'}>
                            <Icons.BsCreditCard2Back size={'20px'}/> Pilih Pembayaran..
                        </button>
                    </div>
                 </InfoPembayaran>
               </div>
            </>
        )
    }
    render(){
        const { list, total, ongkir, payment, body } = this.state;
        return <>
            <ContextKeranjang.Provider
                 value={{ list: list, total: total,
                 ongkir: Boolean(ongkir?.biaya)
                  ? ongkir?.biaya
                  : 0, onClickOngkir: this.handelSelectOngkir }}>
                 {
                     payment ? <Navigate
                     to={'/users/' + Support.default.uuidv4() + '/payment'} state={body}/> : ''
                 }
                <this.handleRender/>
                <Footer/>
            </ContextKeranjang.Provider>
        </>
    }
}

Keranjang.contextType = ContextFromUsers;