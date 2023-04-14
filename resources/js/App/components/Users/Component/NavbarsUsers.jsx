import React from "react";
import { Navbar, Container, Nav, InputGroup, Form } from "react-bootstrap";
import * as Icons from 'react-icons/bs';
import imgs from '../../../img/google.png';

export default class NavbarsUsers extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <Navbar bg="white" style={{ height: '68px', padding:'10px', justifyContent:'flex-start', gap: '10px' }}>
                <Navbar.Brand href="#home"><h3 className="tk">TOKO SALSABILA</h3></Navbar.Brand>
                <Navbar.Toggle />
                <div className="vr" style={{ margin: '10px' }}/>
                <Navbar.Text style={{ letterSpacing:'1px' }}>
                   <span>Kategory</span>
                </Navbar.Text>
                <InputGroup style={{ maxWidth: '50%' }}>
                    <Form.Control
                        placeholder="Recipient's username"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                    />
                    <InputGroup.Text 
                        id="basic-addon2"
                        style={{ backgroundColor: 'white', padding: '0px' }}>
                        <select
                           name="" id=""
                           className="form-select"
                           style={{ border:'none', color: 'GrayText', fontSize: '15px' }}>
                          <option value="">Semua Category</option>
                        </select>
                    </InputGroup.Text>
                    <InputGroup.Text id="basic-addon2">
                        <Icons.BsSearch color="green"/>
                    </InputGroup.Text>
                </InputGroup>
                <Navbar.Text>
                    Bantuan.
                </Navbar.Text>
                <div className="vr" style={{ margin: '10px' }}></div>
                <Navbar.Collapse>
                   <div className="d-flex" style={{ gap: '20px' }}>
                        <Icons.BsBellFill size={'20px'} style={{ alignSelf:'center' }}/>
                        <img
                            src={imgs}
                            style={{ alignSelf:'center' }}
                            width={'20px'}
                            height={'20px'} alt="" />
                        <div className="text-center" style={{ maxWidth: '100px' }}>ALDO</div>
                   </div>
                </Navbar.Collapse>
                <div className="vr" style={{ margin: '10px' }}></div>
                <Navbar.Collapse>
                    <Icons.BsCart2  size={'20px'}/>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}