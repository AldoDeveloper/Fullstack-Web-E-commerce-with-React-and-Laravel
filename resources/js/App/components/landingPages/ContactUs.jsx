import { Container, Row, Col, Form, Button } from "react-bootstrap";
import imgs from "../../img/ggh.svg";

export default function (props) {
    return (
        <>
            <h2
                className="titles mt-4 mb-4 text-center" 
                style={{ "--size": "35px" }}>
                CONTACT US..
            </h2>
            <div className="center-data" style={{ minHeight: "60vh" }}>
                <div
                    className="box-blur"
                    style={{ minWidth: "900px", boxShadow: "1.5px 2px 2px 1.5px rgba(0, 0, 0, 0.4)"}}>
                    <Container>
                    <Row className="row-cols-1 row-cols-md-2 g-2">
                        <Col>
                            <div className="d-flex justify-content-lg-center">
                            <img
                                src={imgs}
                                width={"350px"}
                                height={"350px"}
                                alt=""
                            />
                            </div>
                        </Col>
                        <div className="center-data" style={{ minHeight:'350px' }}>
                              <Col>
                                   <Form>
                                        <Form.Group
                                             as={Row}
                                             className="mb-3"
                                             controlId="formHorizontalEmail">
                                             <Form.Label column sm={2}>
                                                  Email
                                             </Form.Label>
                                             <Col sm={10}>
                                                  <Form.Control type="email" style={{ backgroundColor:'transparent' }} placeholder="Email"/>
                                             </Col>
                                        </Form.Group>
                                        <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                                             <Form.Label column sm={2}>
                                                  Password
                                             </Form.Label>
                                             <Col sm={10}>
                                                  <Form.Control type="password" style={{ backgroundColor:'transparent' }} placeholder="Password"/>
                                             </Col>
                                        </Form.Group>
                                        <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                                             <Form.Label column sm={2}>
                                                  Message
                                             </Form.Label>
                                             <Col sm={10}>
                                                 <textarea className="form-control" style={{ backgroundColor:'transparent' }} name="" id="" rows="5"></textarea>
                                             </Col>
                                        </Form.Group>
                                        <Form.Group as={Row} className="mb-3">
                                             <Col sm={{ span: 10, offset: 2 }}>
                                                  <Button type="submit" className="form-control btn-success">Submit..</Button>
                                             </Col>
                                        </Form.Group>
                                   </Form>
                              </Col>
                        </div>
                    </Row>
                    </Container>
                </div>
            </div>
        </>
    );
}
