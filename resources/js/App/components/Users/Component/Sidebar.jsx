import React from "react";
import { Link, NavLink, useOutletContext } from "react-router-dom";
import imgs from '../../../img/google.png';
import * as Icons from 'react-icons/bs';
import { ContextPathUser } from "../../../../Context/Global";

const ListSidebars = [
    {
        id    : 'notif',
        path  : 'notification',
        text  : 'Informasi',
        icons :  <Icons.BsPeopleFill size={'20px'}/>
    },
    {
        id    : 'review',
        path  : 'review',
        text  : 'Review',
        icons : <Icons.BsDoorOpenFill size={'20px'}/>
    },
    {
        id    : 'status-pesanan',
        path  : 'status-message',
        text  : 'Status Pesanan',
        icons : <Icons.BsFillBagCheckFill size={'20px'}/>
    },
    {
        id    : 'info-alamat',
        path  : 'info-alamat',
        text  : 'Info Alamat',
        icons : <Icons.BsFillGeoAltFill size={'20px'}/>
    },
]

export default class Sidebar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            actived: null,
        }
    }
    ActivedNavigate(props){
        if(props?.boolean)
            return(
                <div className="navigation-actived">
                    <Icons.BsCheckCircleFill/>
                </div> 
            )
        return <></>;
    }

    render(){
        const path_id = this.context;
        
        return (
            <div className="side-flx-1"> 
                <section className="section-side-stik">
                    <div className="box-side">
                        <div className="list">
                           <NavLink to={'/users/dasboard'}
                            className={"text-decoration-none text-dark"}>
                            <div 
                                className="d-flex p-3"
                                style={{ gap:'15px' }}>
                                <img src={imgs} style={{ alignSelf:'center' }} width={'29px'} height={'29px'} alt="" />
                                <div style={{ position:'relative', width:'100%' }}>
                                    <span>Aldo Ratmawan..</span>
                                    <div>
                                        <span>Rp 0</span>
                                        <div 
                                            className="position-absolute"
                                            style={{ right:0, bottom: 0 }}>
                                            <span><Icons.BsCashCoin color="green" size={'20px'}/></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                           </NavLink>
                        </div>
                        <div className="list">
                            <div className="p-3">
                                <div className="mb-2 text-center">Anda Belum Langganan..</div>
                                <button className="btn btn-success form-control">Daftar Langganan...</button>
                            </div>
                        </div>
                    </div>
                    <div className="mt-2" style={{ margin:'5px', width: '100%' }}>
                        <div className="list-items actived-list">
                           <div className="d-flex" style={{ gap: '10px' }}>
                              <div><Icons.BsBriefcase size={'18px'}/></div>
                              <div style={{ alignSelf:'center' }}>Kontak Masuk</div>
                           </div>
                        </div>
                         {
                            ListSidebars.map(({id, path, text, icons}, idx) =>(
                                <NavLink
                                    id={id}
                                    key={idx}
                                    to={'/users/dasboard/' + path}
                                    relative="path"
                                    state={{ id: id }}
                                    className="text-decoration-none"
                                    preventScrollReset={false}
                                    end>
                                    <div className="list-items">
                                        <div className="label-and-icons">
                                            <div className="align-self-center">
                                               { icons }
                                            </div>
                                            <div>{ text }</div>
                                        </div>
                                       <this.ActivedNavigate boolean={id === path_id?.id}/>
                                    </div>
                                </NavLink>
                            ))
                         }
                    </div>
                    <div className="mt-2" style={{ margin:'5px', width: '100%' }}>
                        <div className="list-items actived-list">
                           <div className="d-flex jusify-content-between" style={{ gap: '10px' }}>
                              <div><Icons.BsPersonBoundingBox size={'18px'}/></div>
                              <div style={{ alignSelf:'center' }}>Profile Saya</div>
                           </div>
                        </div>
                    </div>
                    <div style={{ margin:'-4px 5px', width: '100%' }}>
                        <div className="list-items actived-list">
                           <div className="d-flex" style={{ gap: '10px' }}>
                              <div><Icons.BsPersonBoundingBox size={'18px'}/></div>
                              <div style={{ alignSelf:'center' }}>Profile Saya</div>
                           </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
Sidebar.contextType = ContextPathUser