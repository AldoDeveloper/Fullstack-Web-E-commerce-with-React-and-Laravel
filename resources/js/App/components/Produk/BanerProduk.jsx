import { Carousel } from "react-bootstrap";
import React from "react";

export default class extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            items: [],
        }
    }
    static getDerivedStateFromProps(props, state){
        return { items: props?.advertisment }
   }

    render(){
        const { items } = this.state;
        return (
            <>
                <Carousel>
                    {
                        items.map((values, idx) =>{
                            return (
                                <Carousel.Item key={idx}> 
                                    <img
                                        className="d-block w-100 rounded"
                                        src={values?.path}
                                        alt="First slide"
                                        loading="lazy"
                                    />
                                    <Carousel.Caption>
                                        <h2>{values?.title}</h2>
                                        <p>
                                            {values?.ket}
                                        </p>
                                        <button className="btn btn-success">ORDER..</button>
                                    </Carousel.Caption>
                                 </Carousel.Item>
                            )
                         })
                    }
                </Carousel>
            </>
        );
    }
}
