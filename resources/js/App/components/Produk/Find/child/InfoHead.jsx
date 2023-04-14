import React from 'react';
import { ListGroup } from 'react-bootstrap';
import * as Icons from 'react-icons/bs';
import GlobalContextFind from '../../../../../Context/FindContext';
import * as Config from '../Config/ConfigInfo';

export default class InfoHead extends React.Component{
     constructor(props){
          super(props);
          this.handleClick= this.handleClick.bind(this);
     }

     handleClick (){
          console.log('click');
          this.props?.control(true);
     }

     priceProduk(props){
         const priceInfo = Config.default.info_price({api : props?.api})
               .find((values) => values.id.toLocaleLowerCase() === props?.template.toLocaleLowerCase());
          return priceInfo.element;
     }

     render(){
          const { api, template } = this.context;
          return <>
               <ListGroup.Item>
                    <this.priceProduk api={api} template={template}/>
               </ListGroup.Item>
          </>
     }
}
InfoHead.contextType = GlobalContextFind;