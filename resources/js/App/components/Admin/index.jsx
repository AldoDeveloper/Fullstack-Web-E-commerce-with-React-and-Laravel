
import React, { Suspense, useState } from "react";
import { Await, useRouteLoaderData } from "react-router-dom";

const url = window.location.origin;

function Template(props){
     return <><h1>Hello Templated...</h1></>
}

const OtherCompenent = () =>{
     const [stated, setStated] = useState('');

     new Promise((resolve, reject) => {
          setTimeout(() =>{
               setStated('Aldo Ratmawan...')
          }, 2500)
     });
     return <><h2>Hello Worls... {stated}</h2></>
}

const Loding = (props) =>{
     return <h2>Loading...</h2>
}

export default function Admin(props){
     return <>
          {/* <h1>Hello Admin...</h1> */}
          <Suspense fallback={<Loding/>}>
              <OtherCompenent/>
          </Suspense>
     </>
}