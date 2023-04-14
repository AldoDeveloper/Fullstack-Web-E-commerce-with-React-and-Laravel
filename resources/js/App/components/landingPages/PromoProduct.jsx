import { Card, CardImg, Col, Container, Row, Button } from "react-bootstrap";
import images from '../../img/cf.jpg';
import img2 from '../../img/windows.jpg';
import img3 from '../../img/cf3.jpg';
import { motion } from "framer-motion";
import { useState } from "react";
import * as Icon from 'react-icons/bs';

const listImages = [
   images, img2, img3
];

function CardPromo(props){
     const [img, setImg]       = useState(null);
     const [active, setActive] = useState(null);
     const handleCLick = ({src, idx}) =>{
          setImg(src);
          setActive(idx);
     }
     return (
          <Card style={{ border:'none', backgroundColor:'transparent', backdropFilter:'blur(10px)' }}>
               <div className="crd position-relative">
                    <Card.Img src={img === null ? listImages[0] : img} alt="#" height={'300px'}/>
                    <div className="content-promo">
                        <div className="box-promo">
                              <h4 className="text-center text-white titles">
                                   +2 Hari Promo Harga...
                              </h4>
                              <h5 className="text-center titles text-white">Stok Barang: <strong>5</strong> pcs</h5>
                        </div>
                    </div>
               </div>
               <Card.Body>
               <Card.Title className="text-center titles fs-5">Hello World</Card.Title>
               <div className="d-flex justify-content-center">
                         <div className="mt-1 mb-2">
                         <div className="kolom-3">
                              {
                                   listImages.map((val, keys) =>{
                                        return <div key={keys} className="items-list" style={{ cursor:'pointer' }} onClick={() => handleCLick({src:val, idx:keys})}>
                                                  <motion.img animate={active === keys ? {border:'2px solid #198d6e', boxShadow:'1px 2px 2px 1px rgba(0, 0, 0, 0.3)'} : {border:'none'}} src={val} alt="" className="rounded" width={'50px'} height={'50px'} />
                                                </div>
                                   })
                              }
                         </div>
                    </div>
               </div>
               <h4 className="text-center mt-2">Rp 20.000,00</h4>
               <strike className="text-danger text-style-italic"><h5 className="text-center mt-2">Rp 20.000,00</h5></strike>
               <hr />
               </Card.Body>
          </Card>
     )
}

export default function PromoProduct(props){
     return (<>
          <h2 className="titles mt-4 mb-4 text-center" style={{ '--size':'35px' }}>PROMO PRODUCT</h2>
          <Container className="mt-4">
               <Row className="row-cols-1 row-cols-md-3 g-3">
                    {
                     [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((val, idx) =>{
                         return <> 
                         <Col key={`cons${idx}`}>
                              <CardPromo key={idx} index={val}/>
                         </Col></>
                     })
                    }
               </Row>
          </Container>
     </>)
}