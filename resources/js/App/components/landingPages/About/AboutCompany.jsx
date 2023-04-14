import { Col, Row } from "react-bootstrap";
import images from "../../../img/about.svg";
import * as Icon from "react-icons/bs";
import { motion } from "framer-motion";
export default function AbCompanys (props) {
    return (
        <>
          <motion.div className="box-blur" style={{ minWidth: "800px" }} key={props.id} transition={{ duration:0.4 }} initial={{ opacity:0, x:'100%' }} animate={{ opacity:1, x:0 }}>
          <Row className="row-cols-1 row-cols-md-2 g-4">
                    <Col>
                        <div className="d-flex justify-content-center">
                        <img
                            src={images}
                            width={"300px"}
                            height={"300px"}
                            alt=""
                        />
                        </div>
                        <div className="icon-list">
                            <a href="#">
                                <Icon.BsInstagram className="icon" />
                            </a>
                            <a href="#">
                                <Icon.BsFacebook className="icon" />
                            </a>
                            <a href="#">
                                <Icon.BsTwitter className="icon" />
                            </a>
                            <a href="#">
                                <Icon.BsWhatsapp className="icon" />
                            </a>
                        </div>
                    </Col>
                    <Col>
                        <div
                            className="center-data text-white"
                            style={{
                                minHeight: "300px",
                                color: "white",
                                "--size": "22px",
                            }}
                        >
                            <div>
                                <h2 className="titles text-center text-white">
                                    ABOUT
                                </h2>
                                <div style={{ textAlign: "justify" }}>
                                    {" "}
                                    Lorem ipsum, dolor sit amet consectetur
                                    adipisicing elit. Dicta quod totam facere
                                    optio earum veniam deleniti, numquam a
                                    quaerat nulla eveniet, praesentium tenetur
                                    id dignissimos recusandae placeat quam eaque
                                    ipsam.
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
          </motion.div>
        </>
    );
}
