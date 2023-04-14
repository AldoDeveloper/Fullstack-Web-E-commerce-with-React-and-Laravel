import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import * as Icons from 'react-icons/bs';

export default class MainIndexs extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
       return (
            <Row className="row-cols-1 row-cols-md-4 g-2">
                {
                    Array.from({length: 4}).map((val) =>(
                        <Col>
                            <Card className="border-0 shadow p-3 mb-5 bg-body rounded text-black-50">
                                <Card.Body>
                                    <div className="d-flex justify-content-between">
                                        <div>
                                            <h2>120</h2>
                                            <span>Lorem, ipsum</span>
                                        </div>
                                         <div style={{ alignSelf:'center' }}>
                                            <Icons.BsBookFill size={'25px'}/>
                                         </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))
                }
            </Row>
       )
    }
}