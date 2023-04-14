import React from "react";
import team from '../../../img/team.png';
import * as Icon from 'react-icons/bs';

export default class extends React.Component{

     constructor(props){
          super(props);
     }

     render(){
          return (<>
                <div>
                    <h5 className="text-center">Daftar Langganan ditoko Kami...</h5>
                    <img src={team} width={'100px'} height={'100px'} className="mx-auto d-block" alt="" />
                    <div className="text-center">
                         <button className="btn btn-success text-center"><Icon.BsSignpostFill/> Daftar..</button>
                    </div>
                </div>
          </>)
     }
}