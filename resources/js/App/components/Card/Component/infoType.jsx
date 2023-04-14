import React from "react";
import * as Alert from '../Config/AlertInfo';
import * as Support from '../../../Support/supportString';

export default class extends React.Component{
     constructor(props){
          super(props);
          this.state = {
               itemsPrice : null,
               category:null,
          }
     }

     static getDerivedStateFromProps(props, state){
          return { itemsPrice : props?.price, category : props?.category };
     }

     ElementInfo(props){
          const { promo, format, type } = props?.price;
          const typed = Alert.default.Info.filter(([key, val], idx) => {
               return key === type?.type;
          });
          if(typed.length > 0)
               return typed.map(([key, val], idx) =>(
                         <div key={idx} className={"promo-back " + val}>
                              <h6>{Support.default.ucfrist(key)}</h6>
                         </div>
                    )
               )
          return <>
               <div  className={'promo-back bg-success'}>
                 <h6>sfkakfnsaf</h6>
               </div>
          </>
     }    

     render(){
          const { itemsPrice } = this.state;
          return <this.ElementInfo price = {itemsPrice}/>
     }
}