import { Card, ListGroup, Col } from 'react-bootstrap';
import * as Icons from 'react-icons/bs';
import { ChildInfo, RetailsInfo } from './ChildComponent/ChildInfo';

const config_info  = ({children, callback}) =>{
    return [
         {
              id: 'GROSIR',
              element: <ChildInfo child={children}/>
         },
         {
              id: 'ECERAN',
              element:<RetailsInfo child={children}/>
         }
    ]
}

const info_price = ({ api }) =>{
  return [
     {
          id: 'ECERAN',
          element:
          <>
                    <h4 style={{ color:'black', fontWeight:'bold' }}>{api?.name_produk}</h4>
                    <div className="d-flex justify-content-start">
                         <div style={{ padding:'8px' }}>
                              <h6>Terjual <span style={{ color:'darkgray' }}>{api?.sold}+</span></h6>
                         </div>
                         <div style={{ padding:'8px' }}>
                              <h6><Icons.BsStarFill size={'18px'} color="yellow"/> <span>4.6 <span style={{ color:'darkgray' }}>(30 Rating)</span></span></h6>
                         </div>
                         {/* <div style={{ padding:'8px' }} onClick={ this.handleClick }>Diskusi <span style={{ color:'darkgray' }}>(1)</span></div> */}
                         <div style={{ padding:'8px' }}>Comment <span style={{ color:'darkgray' }}>(100)</span></div>
                    </div>
               {
                    api?.price?.promo === null ? 
                    <div>
                         <h3><strong>{ api?.price?.format.format_after_discount }</strong></h3>
                    </div> : 
                    <div>
                         <h3><strong>{api?.price?.format.format_promo.api?.price_format}</strong></h3>
                         <div className="discount">
                              <span>{api?.price?.promo.discount}%</span>
                              <span><strike>{api?.price?.format.format_after_discount}</strike></span>
                         </div>
                    </div>
               }
          </>
     },
     {
          id:'GROSIR',
          element:
          <>
                    <h4 style={{ color:'black', fontWeight:'bold' }}>{api?.grosir_name}</h4>
                    <div className="d-flex justify-content-start">
                         <div style={{ padding:'8px' }}>
                              <h6>Terjual <span style={{ color:'darkgray' }}>{api?.sold_grosir}+</span></h6>
                         </div>
                         <div style={{ padding:'8px' }}>
                              <h6><Icons.BsStarFill size={'18px'} color="yellow"/> <span>4.6 <span style={{ color:'darkgray' }}>(30 Rating)</span></span></h6>
                         </div>
                         {/* <div style={{ padding:'8px' }} onClick={ this.handleClick }>Diskusi <span style={{ color:'darkgray' }}>(1)</span></div> */}
                         <div style={{ padding:'8px' }}>Comment <span style={{ color:'darkgray' }}>(100)</span></div>
                    </div>
               {
                    api?.promo === null ?
                    <div>
                         <h3><strong>{ api?.format_price }</strong></h3>
                    </div> :
                    <div>
                         <h3><strong>{api?.format_price}</strong></h3>
                         <div className="discount">
                              <span>{api?.promo.discount}%</span>
                              <span><strike>{api?.format_price_old}</strike></span>
                         </div>
                    </div>
               }
          </>
     }
  ]
}

const config_promo = ({ api }) =>{
     return [
          {
               id: 'ECERAN',
               element: 
               <>
                    {
                         api?.promo === undefined ? 
                         api?.promo?.map((val, idx) => (
                              <ListGroup.Item className="p-2">
                              <h4>Promo</h4>
                                   <Row className="row-cols-1 row-cols-md-1 g-2 justify-content-center">
                                        <Col key={idx}>
                                             <div className="card-promo-info">
                                                  <div className="content">
                                                       <div>
                                                            <h2>{ val?.discount }%</h2>
                                                            <p>{ val?.ket }</p>
                                                       </div>
                                                       <div className="align-data-center">
                                                            <span>
                                                                 <strong>Batas Promo</strong>
                                                            </span>
                                                            <div>
                                                                 {
                                                                 (new Date(val?.exp)).toLocaleString(['ban', 'id'])
                                                                 }
                                                            </div>
                                                       </div>
                                                  </div>
                                             </div>
                                        </Col>
                                   </Row>
                              </ListGroup.Item>
                         ))
                         :<></>
                    }
               </>
          },
          {
               id: "GROSIR",
               element: <>
                    {
                        api?.list_promo === undefined ? <></>
                        :api?.list_promo?.map((val, idx) => (
                         <ListGroup.Item className="p-2">
                         <h4>Promo</h4>
                              <Row className="row-cols-1 row-cols-md-1 g-2 justify-content-center">
                                   <Col key={idx}>
                                        <div className="card-promo-info">
                                             <div className="content">
                                                  <div>
                                                       <h2>{ val?.discount }%</h2>
                                                       <p>{ val?.ket }</p>
                                                  </div>
                                                  <div className="align-data-center">
                                                       <span>
                                                            <strong>Batas Promo</strong>
                                                       </span>
                                                       <div>
                                                            {
                                                            (new Date(val?.expired)).toLocaleString(['ban', 'id'])
                                                            }
                                                       </div>
                                                  </div>
                                             </div>
                                        </div>
                                   </Col>
                              </Row>
                         </ListGroup.Item>
                      ))
                    }
               </>
          }
     ]
}
export default { config_info, info_price, config_promo }