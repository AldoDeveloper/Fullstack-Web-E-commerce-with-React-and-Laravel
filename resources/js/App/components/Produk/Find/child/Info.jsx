
import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import * as Icons from 'react-icons/bs';
import GlobalContextFind from '../../../../../Context/FindContext';
import TypePengiriman from './TypePengiriman';
import DetailInfo from './DetailInfo';
import InfoPromo from './InfoPromo';
import InfoHead from './InfoHead';
import * as Config from '../Config/ConfigInfo';

export default class Info extends React.Component{
     constructor(props){
          super(props);
          this.state = {
               count: 0,
          }
          this.RenderChildren = this.RenderChildren.bind(this);
          this.hanldeChanges  = this.hanldeChanges.bind(this);
     }
     componentDidMount(){
          const { kondisi, callback, api } = this.context;
          const el = document.querySelector('.info-data');
          callback({height: el.getBoundingClientRect().height})
     }
     
     RenderChildren(){
          const [test, setTest] = React.useState(false);
          const children = 
          [
               <InfoHead key={1} control={setTest}/>,
               <DetailInfo key={2}/>,
               <TypePengiriman key={3} type={'INFO'}/>,
               <InfoPromo key={4}/>
          ];
          return <>
               {
                    children.map((element, idx) => {
                         return element;
                    })
               }
          </>
     }
     hanldeChanges(props){
          console.log(props)
     }

     TemplateConfig(props){
          const configInfo = Config.default.config_info({
                 children: props?.children,
                 callback: props?.callback
               }).find((values) => (
                  values.id === props?.template
               ));
          return configInfo.element;
     }

     render(){
          const { template } = this.context;
          return (
               <Card style={{ border:'none', padding: '0px' }} id="info">
                    <Card.Body className="info-data">
                         <ListGroup variant="flush">
                              <this.TemplateConfig children={<this.RenderChildren/>} template={template} callback={this.hanldeChanges}/>
                              <ListGroup.Item>
                                   <div className="d-flex justify-content-between">
                                        <span style={{ fontStyle:'italic' }}>Ada Masalah dengan Produk ini ?</span>
                                        <span className="text-warning fw-bold" style={{ cursor: 'pointer'}}><Icons.BsExclamationLg/>Laporkan</span>
                                   </div>
                              </ListGroup.Item>
                         </ListGroup>
                    </Card.Body>
               </Card>
          )
     }
}
Info.contextType = GlobalContextFind;