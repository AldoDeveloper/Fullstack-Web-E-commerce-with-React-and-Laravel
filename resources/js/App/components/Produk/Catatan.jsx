
import React from "react";
import { Card } from "react-bootstrap";
import GlobalContextFind from "../../../Context/FindContext";
import * as Icons from "react-icons/bs";
import * as Support from '../../Support/supportString';
import { useParams } from "react-router-dom";
import { Form } from "react-router-dom";

function OptionsCatatan(context){
     const {api, template} = context;
     switch(template){
          case 'ECERAN':
               var price = null;
               if(api?.price.promo !== null)
                    price = api?.price.format.format_promo.price;
               else price = api?.price.price;
               return (values) =>{
                    return {...values, stock: api?.stock, max: api?.stock, price: price}
               };
               break;
          case 'GROSIR':
               return (values) =>{
                    return {
                         ...values, stock: api?.stock_grosir,
                          max: api?.stock_grosir,
                          price: api?.price_grosir,
                    }
               };
               break;
          default:
               break;
     }
}

export default class Catatan extends React.Component{

     constructor(props){
          super(props)
          this.state = {
               heightAuto: null,
               count: 1,
               stock:0,
               max:0,
               price:0,
          }
          this.handleCountData = this.handleCountData.bind(this);
     }
     static getDerivedStateFromProps(props, state){
          return { heightAuto: props?.height }
     }
     
     handleCountData({ type }){
          const { stock, count } = this.state;
          switch(type){
               case 'INC':
                    if(count <= stock){
                         this.setState((values) =>{
                              return {...values, count: this.state.count+1}
                         });
                    }
                    break;
               case 'DEC':
                    if(count > 1){
                         this.setState((values) =>{
                              return {...values, count: this.state.count-1}
                         });
                    }
                    break;
               default:
                    break;
          }
     }
     componentDidMount(){
           this.setState(OptionsCatatan(this.context));
     }

     RenderKeranjang(props){
          const { pathname } = new URL(window.location.href);
          return (
               <Form method="post" action="/users/keranjang">
                    <input type="hidden" name='path' value={pathname} />
                    <input type="hidden" name="tokens" value={'sf'} />
                    <button type="submit" className="btn btn-success form-control fw-bold mt-3">
                         <span style={{padding: '2px 7px'}}><Icons.BsBagPlusFill size={'17px'}/></span>
                         <span>Keranjang</span>
                    </button>
               </Form>
          )
     }

     render(){
          const { heightAuto, stock, max, count, price } = this.state;
          var total = count * price;

          return(
               <div className="pages-flx-2">
                    <div className="pg" style={{height: heightAuto}}>
                         <div className="head">
                              <Card>
                                   <Card.Body style={{fontSize: '15px'}}>
                                        <h6 className="text-center">Atur Jumlah dan Catatan</h6>
                                        <div className="d-flex mt-4" style={{gap: '15px'}}>
                                             <div className="bdr-form">
                                                  <button onClick={async(ev) => this.handleCountData({type: 'DEC'})}><Icons.BsDash size={'17px'} color="#198d6e" className="fw-bold"/></button>
                                                  <div>{count}</div>
                                                  <button onClick={async(ev) => this.handleCountData({type: 'INC'})}><Icons.BsPlus size={'17px'} color="#198d6e" className="fw-bold"/></button>
                                             </div>
                                             <div style={{alignSelf: 'center'}} className="mt-2">
                                                  Stock Total: <strong>{stock}</strong>
                                             </div>
                                        </div>
                                        <span style={{fontSize: '12px', color:'GrayText'}} className="fw-bold">Max.Pembelian {max}</span>
                                        <div className="mt-3 click-langganan">
                                             <Icons.BsPlus/>
                                             <span>Code Langganan</span>
                                        </div>
                                        <div className="info-strike">
                                            <strike>Rp {Support.default.formatRupiah(120000)}</strike>
                                        </div>
                                        <div className="price-info">
                                             <span>Total</span>
                                             <span>Rp {Support.default.formatRupiah(total)}</span>
                                        </div>
                                       <div className="action">
                                            <this.RenderKeranjang/>
                                             <button className="btn form-control fw-bold mt-2">
                                                  <span>Beli</span>
                                             </button>
                                       </div>
                                       <div className="list-share-info">
                                             <li>
                                                  <span><Icons.BsCreditCard2Back/></span>
                                                  <span> Kredit</span>
                                             </li>
                                             <li>
                                                  <span><Icons.BsHeart/></span>
                                                  <span> Langganan</span>
                                             </li>
                                              <li>
                                                  <span><Icons.BsShareFill/></span>
                                                  <span> Bagikan</span>
                                             </li>
                                       </div>
                                   </Card.Body>
                              </Card>
                         </div>
                    </div>
               </div>
          )
     }
}
Catatan.contextType = GlobalContextFind;
