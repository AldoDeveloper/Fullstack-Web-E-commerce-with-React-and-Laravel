import React  from "react";
import Footer from "../../../Footer";
import Navbar from "../../Navbar";

export default class NotFound extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            error: null,
        }
    }
    
    static getDerivedStateFromProps(props, state){
        return {error : props?.data}
    }

    render(){
        const {error} =  this.state;
        console.log(error);
        return(
            <>
                <Navbar/>
                <section style={{ paddingTop: '7rem' }}>
                    <h3 className="text-center text-danger">PRODUK TIDAK DITEMUKAN...</h3>
                    <div className="not-found-find-produk">
                        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima magni perferendis numquam aliquam itaque esse ab, officiis praesentium asperiores libero!</span>
                        <img src={error?.path} alt="" />
                    </div>
                </section>
                <Footer/>
            </>
        )
    }
}