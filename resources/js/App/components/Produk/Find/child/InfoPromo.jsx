import React from 'react';
import GlobalContextFind from '../../../../../Context/FindContext';
import * as Config from '../Config/ConfigInfo';

export default class InfoPromo extends React.Component{
     constructor(props){
          super(props);
          this.state = {
               items: [],
          }
     }
     PromoSet(props){
          const promoSet = Config.default.config_promo({api: props?.api}).find((values) => (
               values.id === props?.template
          ));
          return promoSet.element;
     }
     render(){
          const { api, template } = this.context;
          return <>
               <this.PromoSet api={api} template={template}/>
          </>
     }
}
InfoPromo.contextType = GlobalContextFind;