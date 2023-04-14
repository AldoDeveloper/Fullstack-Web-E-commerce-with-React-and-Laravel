import React from "react"
import { ListGroup } from "react-bootstrap"
import { Link } from "react-router-dom";
import GlobalContextFind from "../../../../../../Context/FindContext"

const ChildInfo = (props) =>{
    const { api } = React.useContext(GlobalContextFind);
    return(
        <ListGroup variant="flush">
            { props?.child }
            {
                api?.eceran !== null ?
                <ListGroup.Item>
                    <h4>Info Eceran</h4>
                    <Link to={'/finds/retail/' + api?.eceran.keys} className="text-decoration-none">
                        <ListGroup  style={{ color: '#198d6e', fontStyle:'italic' }}>
                            <ListGroup.Item>
                                <img className="rounded mx-auto d-block" src={api?.eceran.cover} width={'100%'} height={'160px'} alt="" />
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <h5 className="text-center" style={{ color: '#198d6e'}}>{api?.eceran.name_produk}</h5>
                            </ListGroup.Item>
                        </ListGroup>
                    </Link>
                </ListGroup.Item>
            :<></>
            }
        </ListGroup>
    )
}

const RetailsInfo = (props) =>{
    const { api }= React.useContext(GlobalContextFind);
    return(
            <ListGroup variant="flush">
                { props?.child }
                {
                    api?.grosir !== null ?
                    <ListGroup.Item>
                        <h4 style={{ cursor:'pointer' }}>Info Grosir</h4>
                        <Link to={'/finds/grosir/' + api?.grosir.keys} className="text-decoration-none">
                            <ListGroup style={{ color: '#198d6e', fontStyle:'italic' }}>
                                <ListGroup.Item>
                                    <img className="rounded mx-auto d-block" src={api?.grosir.cover} alt="" width={"100%"} height={"160px"} />
                                </ListGroup.Item>
                                <ListGroup.Item>
                                <h5 className="text-center" style={{ color: '#198d6e' }}>{api?.grosir.grosir_name}</h5>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <h6 className="text-center" style={{ color: '#198d6e' }}>{api?.grosir.sold_grosir}+ terjual</h6>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <h6 className="text-center" style={{ color: '#198d6e' }}>{api?.grosir.stock_grosir} stock</h6>
                                </ListGroup.Item>
                            </ListGroup>
                        </Link>
                    </ListGroup.Item>
                    :<></>
                }
            </ListGroup>
    )
}
export { ChildInfo, RetailsInfo }