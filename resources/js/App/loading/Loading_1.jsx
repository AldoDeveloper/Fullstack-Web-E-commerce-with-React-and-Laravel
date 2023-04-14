import React from "react";
import './loading.css';

export default class Loading_1 extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            height: null,
        }
    }

    static getDerivedStateFromProps(props, state){
        return {height : props?.height === null ? '100vh' : props?.height};
    }
    componentWillUnmount(){}

    render(){
       const { height } = this.state;
       return (
        <section className="loading" style={{ '--height': height }}>
            <div className="lds-ellipsis">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </section>
       )
    }
}