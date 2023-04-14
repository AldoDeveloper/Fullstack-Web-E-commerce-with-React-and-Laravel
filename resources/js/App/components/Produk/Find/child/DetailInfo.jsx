import React from "react";
import { ListGroup } from "react-bootstrap";
import GlobalContextFind from "../../../../../Context/FindContext";
import * as Support from '../../../../Support/supportString';
import { motion } from "framer-motion";

export default class DetailInfo extends React.Component{

     constructor(props){
          super(props);
          this.state = {
               isLoadingInfoDetails: false,
               items: [],
               info:{},
               actived:0,
          }
          this.changeInfoDetails = this.changeInfoDetails.bind(this);
     }

     componentDidMount(){
         const { api }  = this.context;
         if(api?.info_details.length > 0){
               const find  =  api?.info_details.find(({type}) => type === 'detail');
               if(find !== null){
                    this.setState((values) =>{
                         return {...values, info: find, actived: find.id}
                    })
               }
         }
     }

     changeInfoDetails({ info, event }){
         if(info !== null){
          this.setState((values) => {
               return {...values, info: info, actived: info?.id}
             });
         }
     }

     render(){
          const { info, actived } = this.state;
          const { api }  = this.context;
          if(api?.info_details.length < 1) return <></>
          return <>
               <div className="navbar-find-info-detail">
                    {
                         api?.info_details.map((info, idx) => (
                              <button key={idx} className={"find-btn-list " + (actived === info?.id ? 'text-danger' : '')} onClick={async (ev) => this.changeInfoDetails({info: info, event: ev})}>
                                   {Support.default.ucfrist(info?.type)}
                              </button>
                         ))
                    }
               </div>
               <ListGroup.Item>
                   <motion.div transition={{ duration: 0.3 }} key={info?.id} initial={{ y:20, opacity: 0 }} animate={{ y:0, opacity: 1 }} dangerouslySetInnerHTML={ {__html: info?.info_detail}}></motion.div>
               </ListGroup.Item>
          </>
     }
}
DetailInfo.contextType = GlobalContextFind;