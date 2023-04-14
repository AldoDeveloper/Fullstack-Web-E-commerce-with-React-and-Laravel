
import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import GlobalContextFind from '../../../../../Context/FindContext';

const mainOptions = {
     type       : 'slide',
     heightRatio: 0.5,
     pagination : false,
     arrows     : false,
     cover      : true,
     width      : 550,
     height     : '20rem',
}

const thumbsOptions = {
     rewind          : false,
     width           : 550,
     height          : 550,
     fixedWidth      : 104,
     fixedHeight     : 58,
     isNavigation    : true,
     gap             : 10,
     focus           : 'center',
     pagination      : false,
     cover           : true,
     top             :0,
     dragMinThreshold: {
     mouse: 4,
     touch: 10,
     },
     breakpoints : {
     640: {
          fixedWidth  : 66,
          fixedHeight : 38,
       },
     },
}


export default class ListImages extends React.Component{

     constructor(props){
          super(props);
          this.mainRef   = React.createRef();
          this.thumbsRef = React.createRef();
     }

     componentDidMount(){
          if(this.mainRef.current && this.thumbsRef.current && this.thumbsRef.current.splide){
               this.mainRef.current.sync(this.thumbsRef.current.splide)
          }
     }

     generateSlides(props){
          return (
               props?.images.map((val, idx) => (
                    <SplideSlide key={idx}>
                         <img src={val} width={'250px'} alt="" />
                    </SplideSlide>
               ))
          )
     }
     
     render(){
          const { api, template } = this.context;
          return ( 
               <div style={{width:'400px', paddingTop:'35px'}}>
                    <Splide ref={this.mainRef}  options={mainOptions} style={{ padding: '5px' }}>
                         <this.generateSlides images={api?.images}/>
                    </Splide>
                    <Splide ref={this.thumbsRef} options={thumbsOptions} style={{ padding: '28px' }}>
                         <this.generateSlides  images={api?.images}/>
                    </Splide>
               </div>
          )
     }
}
ListImages.contextType = GlobalContextFind;