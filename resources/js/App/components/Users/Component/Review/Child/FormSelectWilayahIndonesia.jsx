import React from "react";
import { Col } from "react-bootstrap";

export default class FormSelectWilayahIndonesia extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            path: null,
            placholder: null,
            items:[],
            callback:null
        };
        this.handleForceUpdated = this.handleForceUpdated.bind(this);
    }
    static getDerivedStateFromProps(props, state){
        return {path: props?.path, placholder: props?.placholder, callback: props?.callback}
    }

    componentDidMount(){
        if(this.state.path !== undefined){
            (async() =>{
                const getProvincies = await fetch(`https://www.emsifa.com/api-wilayah-indonesia/api/${this.state.path}.json`, {
                     method: 'GET',
                    'Content-Type' : 'Application/json'
                });
                if(getProvincies.status === 200){
                    const response = await getProvincies.json();
                    this.setState((values) => {
                        return {...values, items: response};
                    })
                }
            })();
        }
    }
    static Labels(props){
        return(
            <Col md={3}>
                <label htmlFor="" className="col-form-label">
                    { props?.children }
                </label>
            </Col>
        )
    }
    handleForceUpdated(event){
        this.updatedOptions(this.state.path);
        this.state.callback(event.target.value);
    }
    
    updatedOptions(path){
        (async() =>{
            const getProvincies = await fetch(`https://www.emsifa.com/api-wilayah-indonesia/api/${path}.json`, {
                 method: 'GET',
                'Content-Type' : 'Application/json'
            });
            if(getProvincies.status === 200){
                const response = await getProvincies.json();
                console.log(response)
                this.setState((values) => {
                    return {...values, items: response};
                })
            }
        })();
    }

    render(){
        const {items, placholder, callback, path}  = this.state;
        console.log(path)
        return (
            <>
                { this.props?.children }
                <Col md={9}>
                    <select name="" id=""
                        className="form-select"
                        onChange={async (event) => this.handleForceUpdated(event)}>
                        <option value="">{ placholder }</option>
                        {
                            items?.map((values) => (
                                <option key={values?.id} value={JSON.stringify(values)}> { values?.name } </option>
                            ))
                        }
                    </select>
                </Col>
            </>
        )
    }
}