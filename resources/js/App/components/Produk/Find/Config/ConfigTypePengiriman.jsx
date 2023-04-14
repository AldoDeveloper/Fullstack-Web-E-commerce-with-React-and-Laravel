import React from "react";
import { ListGroup, Row, Col } from "react-bootstrap";
import { ContextTypePengiriman } from "../../../../../Context/ContextTypePengiriman";
import * as Icons from 'react-icons/bs';
import { ContextKeranjang } from "../../Keranjang/ContextKeranjang";

function FromInfoElement(props){
    const { items } = React.useContext(ContextTypePengiriman);
    return (
        <ListGroup.Item style={{minHeight: '120px'}}>
             <Row className='row-cols-1 row-cols-md-2 g-3'>
                {
                    items.map((val, idx) =>(
                        <Col key={idx}>
                            <div className="card-list-type">
                                <div>
                                    <img src={val?.thumbnails} className="rounded-circle" alt="" />
                                    <span style={{ fontWeight: 'bold' }}>{ val?.name_type }</span>
                                </div>
                                <div style={{alignSelf: 'center'}}>
                                    <h6 className='text-center'>Ongkir</h6>
                                    <span>{val?.format_biaya}</span>
                                </div>
                            </div>
                        </Col>
                    ))
                }
            </Row>
      </ListGroup.Item>
    )
}

function FromCartElement(props){
    const { items } = React.useContext(ContextTypePengiriman);
    const { onClickOngkir } = React.useContext(ContextKeranjang);

    const [typeTrs, setTypeTrs] = React.useState({
         active: false,
         items:null
    });
    const handleClick = ({active, items}) =>{
        setTypeTrs((values => {
            return {...values, active: active, items: items}
        }));
        onClickOngkir(items);
    }

    return (
       <>
           <div style={{ padding:'15px' }}>
                <div className="d-flex mb-2" style={{ gap: '10px' }}>
                    <div style={{ alignSelf:'center' }}>
                        <Icons.BsBicycle color="#198d6e" size={'22px'}/>
                    </div>
                    <div 
                    style={{ 
                            alignSelf:'center',
                            paddingTop:'10px',
                            color: 'GrayText' 
                        }}>
                        <h6>Pilih Pengiriman</h6>
                    </div>
                </div>
                <div
                 style={
                    { display:'flex',
                      flexDirection:'row',
                      gap:'10px',
                      flexWrap:'wrap'}}>
                        
                    {
                        items.map((val, idx) =>(
                            <Col key={idx}>
                                <div
                                  className="card-list-type position-relative"
                                  onClick={ async(event) =>
                                  handleClick({active: !typeTrs.active, items: val})}
                                  style={{ justifyContent:'center', padding:'20px' }}>
                                    <div>
                                        <img src={val?.thumbnails}
                                          className={"rounded-circle " +
                                          (typeTrs.items?.id === val?.id ? '' : 'gry-img')}
                                          alt=""/>
                                        <span style={{ fontWeight: 'bold' }}>{ val?.name_type }</span>
                                    </div>
                                    <div
                                     style={
                                        { 
                                            position: 'absolute',
                                            top:0,
                                            left:0,
                                            fontSize:'12px',
                                            fontStyle:'italic'
                                        }}>
                                        {
                                            typeTrs.items?.id === val?.id ?
                                            <span 
                                                style={{
                                                color: '#198d6e',
                                                fontWeight:'bold' }}>
                                                { val?.format_biaya }
                                            </span> : 
                                            <strike>{val?.format_biaya}</strike>
                                        }
                                    </div>
                                </div>
                            </Col>
                        ))
                    }
                </div>
           </div>
       </>
    )
}

const ConfigPengiriman =  [
    {
        type: 'INFO',
        element: <FromInfoElement/>
    },
    {
        type: 'CART',
        element: <FromCartElement/>
    }
];
export { ConfigPengiriman }