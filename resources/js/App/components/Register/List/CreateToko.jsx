import React from "react";
import store from '../../../img/store.png';

export default class extends React.Component{

     constructor(props){
          super(props);
     }

     render(){
          return (<>
              <div>
                    <h5 className="text-center">Buat Toko Anda...</h5>
                    <img src={store} className="mx-auto d-block" width={'100px'} height={'100px'} alt="" />
                    <div className="text-center mt-1">
                         <button className="btn btn-success">Create Toko..</button>
                    </div>
              </div>
          </>)
     }
}