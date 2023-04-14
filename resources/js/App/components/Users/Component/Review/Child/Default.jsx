import React from "react";

export default class Default extends React.Component{

    constructor(props){
        super(props);
    }
    componentWillUnmount(){
        //Removed DOM
    }

    static getDerivedStateFromProps(props, state){

    }

    static Heders(props){
        return (
            <h4 className={"text-center mb-2 " + props?.className}>
                {props?.children}
            </h4>
        )
    }
    static Img({path, width, height}){
        return <img
            src={path}
            width={width !== undefined ? width : ''}
            height={height !== undefined ? height : ''}
            alt="" />
    }
    static Labels(props){
        return(
            <div className="text-center align-self-center w-50 text-black-50">
                {props?.children}
            </div>
        )
    }
    static Bodys(props){
        return(
            <div className="d-flex justify-content-center" style={{ gap: '12px' }}>
                { props?.children }
            </div>
        )
    }

    render(){
        return(
            <div className="d-flex flex-column">
               { this.props?.children }
            </div>
        )
    }
}