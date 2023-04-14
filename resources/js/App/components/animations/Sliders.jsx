import { Col, Container, Row } from "react-bootstrap";
import "../../../css/slide.css";
import React, { useState } from "react";
import * as Icon from "react-icons/bs";

const converjoinArrayToString = (array) =>{
    let callbacString = "";
    const data = array;
    if(array instanceof Array){
      callbacString = data.join('-').toLocaleLowerCase();
    }
    return callbacString;
}

export default function({ data, pages }) {
    pages === 0 ? 1 : pages;
    const pg = Math.ceil(data.length / pages);
    const [hov, setHov] = useState(false);
    const paginate = (direction) => {
        pages += direction;
        reset();
        const slides = document.querySelectorAll(".slides");
        slides.forEach((slides, idx) => {
            slides.style.transform = `translateX(${
                100 * (idx - (pages - 1))
            }%)`;
        });
    };
    let reset = () => {
        if (pages > pg) pages = 1;
        if (pages < 1) pages = pg;
    };
    React.useEffect(() => {
        const slides = document.querySelectorAll(".slides");
        const sliders = document.querySelector(".sliders");
        function hoverMe(ev) {
            setHov(ev);
        }
        sliders.addEventListener("mouseover", (ev) => hoverMe(true));
        sliders.addEventListener("mouseout", (ev) => hoverMe(false));
        slides.forEach((slides, idx) => {
            slides.style.transform = `translateX(${idx * 100}%)`;
        });
        return () => {
            sliders.removeEventListener("mouseenter", hoverMe);
            sliders.removeEventListener("mouseleave", hoverMe);
        };
    }, []);
    return (
        <>
            <div className="sliders">
                {data.map((val, idx) => 
                    <div className="slides" key={idx}>
                        <div className="contents">
                            <Container>
                                <Row className="row-cols-1 rows-cols-md-3">
                                    {val.map((value, idx) => {
                                        return (
                                            <Col sm={4} key={idx}>
                                                <a href={`/produk/find/${converjoinArrayToString(value.name.split(' '))}`} className={"text-decoration-none"}>
                                                    <div className="card-produk">
                                                        <img src={value.path} alt="" loading="eager"/>
                                                        <h6 className="titles text-center">{value.name}</h6>
                                                    </div>
                                                </a>
                                            </Col>
                                        );
                                    })}
                                </Row>
                            </Container>
                        </div>
                    </div>
                )}
                <button
                    onClick={() => paginate(1)}
                    className={hov ? "btns active-btn btn-nexts" : "btns btn-nexts"}>
                    <Icon.BsFillArrowRightCircleFill />
                </button>
                <button
                    onClick={() => paginate(-1)}
                    className={hov ? "btns active-btn btn-prevs" : "btns btn-prevs"}>
                    <Icon.BsFillArrowLeftCircleFill />
                </button>
            </div>
        </>
    );
}
