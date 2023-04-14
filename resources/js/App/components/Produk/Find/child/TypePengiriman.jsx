
import React from 'react';
import { ContextTypePengiriman } from '../../../../../Context/ContextTypePengiriman';
import { ConfigPengiriman } from '../Config/ConfigTypePengiriman';
const host = window.location.origin;

export default class TypePengiriman extends React.Component{
     constructor(props){
          super(props);

          this.state = {
               isLoading: false,
               items:[],
               error:null,
               type: '',
          }
     }
     static getDerivedStateFromProps(props, state){
          return { type: props?.type }
     }

     componentDidMount(){
          (async() => {
               try{
                    const fetchApis = await fetch(host + '/api/publish/list-pengiriman', {
                         method: 'GET',
                         headers: new Headers({
                              'Content-type':'application/json'
                         }),
                         signal: AbortSignal.timeout(60000)
                    });
                    if(fetchApis.ok){
                         const data = await fetchApis.json();
                         this.setState((values) => {
                              return {...values, isLoading: true, items: data}
                         })
                    }
                    if(!fetchApis.ok) this.setState({error : 'error'});

               }catch(e){
                   this.setState({error : e});
               }
          })()
     }

     TypeConfigPengiriman(props){
          const finds = ConfigPengiriman.find((values) => {
               return values.type === props?.type;
          });
          return finds.element;
     }

     render(){
          const {isLoading, items, error, type} = this.state;
          if(error) return;
          if(!isLoading) return <h5>Loading...</h5>
          return <>
              <ContextTypePengiriman.Provider value={{ items: items }}>
                    <this.TypeConfigPengiriman type={type}/>
              </ContextTypePengiriman.Provider>
          </>
     }
}