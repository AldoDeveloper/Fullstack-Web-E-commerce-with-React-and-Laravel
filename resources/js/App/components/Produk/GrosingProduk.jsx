import React, { Fragment } from "react";
import { Row, Col } from "react-bootstrap";
import CardProduks from "../Card/CardProduks";
import * as Support from '../../Support/supportString';
import { Link } from "react-router-dom";

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            produk: [],
        };
    }
    static getDerivedStateFromProps(props, state) {
        return { produk: props.produk };
    }

    render() {
        const { produk } = this.state;
        return (
            <>
               <h4>Produk Terlaris ditoko kami <a href="#" className="text-success text-decoration-none">Lainya..</a></h4>
               <Row className="row-cols-1 row-cols-md-5 g-4">
                    {
                         produk.map((val, idx) => 
                         <Fragment key={idx}>
                                <Col>
                                    <Link to={'/finds/retail/' + val?.keys} className="text-decoration-none text-success">
                                        <CardProduks fitur={val}/>
                                    </Link>
                                </Col>
                         </Fragment>
                    )}
               </Row>
            </>
        );
    }
}
