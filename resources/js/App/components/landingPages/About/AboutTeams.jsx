import { Row, Card, Col } from "react-bootstrap";
import img from "../../../img/cf.jpg";
import { motion } from "framer-motion";

export default function (props) {
    return (
        <>
            <motion.div
                key={props.id}
                transition={{ duration: 0.4 }}
                initial={{ opacity: 0, x:'-100%' }}
                animate={{ opacity: 1, x:0 }}
            >
                <Row className="row-cols-1 row-cols-md-3 g-3">
                    {[1, 2, 3].map((val, idx) => {
                        return (
                            <>
                                <Col key={`cons${idx}`}>
                                    <Card style={{ maxWidth:'19rem' }}>
                                        <Card.Img
                                            src={img}
                                            alt="#"
                                            height={"200px"}
                                            variant={"top"}
                                        />
                                        <Card.Body>
                                            <Card.Title>Hello World</Card.Title>
                                            <Card.Text>
                                                This is a wider card with
                                                supporting text below as a
                                                natural lead-in to additional
                                                content. This content is a
                                                little bit longer.
                                            </Card.Text>
                                        </Card.Body>
                                        <Card.Footer>
                                            <small className="text-muted">
                                                Last updated 3 mins ago
                                            </small>
                                        </Card.Footer>
                                    </Card>
                                </Col>
                            </>
                        );
                    })}
                </Row>
            </motion.div>
        </>
    );
}
