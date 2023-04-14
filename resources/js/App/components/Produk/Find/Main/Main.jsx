import React, { useState } from "react";
import ListImages from "../child/ListImages";
import Info from "../child/Info";
import Catatan from "../../Catatan";
import ControlUlasan from "../child/ControlUlasan";
import Template from '../Template';

export default class extends React.Component{
     constructor(props){
          super(props);
          this.state = {
               items : null,
               template: '',
          }
     }
     static getDerivedStateFromProps(props, state){
          return {items : props?.apis, template: props?.template};
     }
     componentDidMount(){}
    
     render(){ 
          const { items, template } = this.state;
          return (
               <Template apis={items} template={template}>
                     <section id="val-scr" data-type="step-0">
                         <div className="flx" id="flx-one">
                              <div className="pages-flx-1">
                                   <div className="flx" id="div-control">
                                        <div style={{flex:'35%'}}>
                                             <div className="pg" style={{height: '99%'}}>
                                                  <div className="head">
                                                       <ListImages/>
                                                  </div>
                                             </div>
                                        </div>
                                        <div style={{flex: '65%'}}>
                                             <Info/>
                                        </div>
                                   </div>
                                   <ControlUlasan/>
                              </div>
                              <Catatan height={ '99%' }/>
                         </div>
                    </section>
               </Template>
          )
     }
}