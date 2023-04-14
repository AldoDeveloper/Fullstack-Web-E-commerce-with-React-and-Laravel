import React from "react";
import { Card } from "react-bootstrap";
import imgs from '../../../img/google.png';
import * as Icons from 'react-icons/bs';
import imgs_error from '../../../img/message.png';

export default class Notifications extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            items: null,
            page:5,
        }
        this.ShowPanelNotifications  = this.ShowPanelNotifications.bind(this);
        this.HandleNotFoundShowPanel = this.HandleNotFoundShowPanel.bind(this);
        this.HandleChanges = this.HandleChanges.bind(this);
    }

    HandleChanges(props){
       this.setState((values) => {
        return {...values, page: parseInt(props.target.value)}
       })
    }

    HandleNotFoundShowPanel(){
        return(
            <div className="d-flex justify-content-center">
                <div 
                    className="d-flex align-items-center"
                    style={{ gap: '15px', height: '300px', width: '85%' }}>
                    <img src={imgs_error} width={'130px'} height={'130px'} alt="" />
                    <div className="align-self-center text-center text-black-50 fw-bold">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo rerum magni provident impedit sit aliquam cumque voluptatum harum animi deleniti.
                    </div>
                </div>
            </div>
        )
    }
    ShowPanelNotifications(){
        const { items } = this.state;
        if(items !== null)
            return (
              <>
                 <div className="d-flex p-2 justify-content-between border-bottom">
                        <div className="d-flex" style={{ gap:'10px' }}>
                            <div>
                                <img src={imgs} width={'35px'} height={'35px'} alt="" />
                            </div>
                            <div className="vr"></div>
                            <div className="align-self-center text-black-50">
                                <div>Admin</div>
                                <div style={{ fontSize: '12px' }}>Info Notification</div>
                            </div>
                        </div>
                        <div className="align-self-center">
                            <button className="btn btn-danger">
                                 <Icons.BsTrashFill size={'15px'}/>
                            </button>
                        </div>
                    </div>
                    <div className="hr"></div>
                    <div className="p-2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur temporibus expedita facilis quod ea cupiditate voluptate molestias odit velit quam.
                    </div>
                    <div className="mt-5">
                        <div className="d-flex p-2 justify-content-between border-top">
                            <div className="text-center">
                                <div>
                                    Lorem, ipsum dolor.
                                </div>
                                <div className="d-flex align-items-end" style={{ height: '70px' }}>
                                    Lorem ipsum dolor sit amet.
                                </div>
                            </div>  
                            <div>
                                <div className="text-center">
                                    <div>
                                        Lorem, ipsum dolor.
                                    </div>
                                    <div className="d-flex align-items-end" style={{ height: '70px' }}>
                                        Lorem ipsum dolor sit amet.
                                    </div>
                                </div>  
                            </div>
                        </div>
                    </div>
               </>)
        return(<this.HandleNotFoundShowPanel/>)
    }

    render(){
        const { items, page } = this.state;
        return(
            <>
                <div className="d-flex flex-row" style={{ gap: '12px' }}>
                    <div className="flex-2">
                        <div className="d-flex justify-content-between mb-3">
                            <div className="d-flex w-50" style={{ gap: '7px' }}>
                                <div className="align-self-center">Filter</div>
                                <select name="" id="" className="form-select w-100">
                                    <option value="">Pilih</option>
                                </select>
                            </div>
                            <div className="align-self-center">
                                <select name="" id="" className="form-select w-100" onChange={this.HandleChanges}>
                                    <option value="">Pilih No</option>
                                    {
                                        Array.from({length: 5}).map((val, idx) => (
                                            <option key={idx} value={(idx + 1) * 10}>{(idx + 1) * 10}</option>
                                        ))
                                    }
                                </select>
                            </div>
                        </div>
                        {
                            Array.from({length: page}).map((values, idx) => (
                                <Card key={idx} className="w-100 border-0 shadow rounded mb-2">
                                    <Card.Body>
                                        <div className="d-flex justify-content-between">
                                            <div className="d-flex" style={{ gap:'10px' }}>
                                                <div>
                                                    <img src={imgs} width={'35px'} height={'35px'} alt="" />
                                                </div>
                                                <div className="vr"></div>
                                                <div className="align-self-center">
                                                    Lorem, ipsum dolor.
                                                </div>
                                            </div>
                                            <div className="align-self-center">
                                                <Icons.BsBellFill size={'20px'} color="green"/>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            ))
                        }
                    </div>
                    <div className="vr"></div>
                    <div className="flex-3">
                        <this.ShowPanelNotifications items={items}/>
                    </div>
                </div>
            </>
        )
    }
}