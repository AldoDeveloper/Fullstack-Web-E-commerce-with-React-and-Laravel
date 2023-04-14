import React, { useState } from "react";
import GlobalContextFind from "../../../../Context/FindContext";
import Footer from "../../Footer";
import Navbar from "../Navbar";
import Slugh from "./child/Slugh";

const options = {
     root:null,
     rootMargin: '0px',
     threshold: 0.7,
};

export default function Template(props){
     var has = new Map();
     const [state, setState] = useState({
          konditions:false
     });
     const [counterScrolls, setCounterScroll] = useState(new Map);
     const handleChanges = (props) =>{
          setState((values) => {
               return {...values, konditions: true}
          })
     }
     React.useEffect(() =>{
          const intersectionCallback =(entries) =>{
               entries.forEach((entry, idx) =>{
                    if(entry.isIntersecting){
                         if(entry.intersectionRatio >= 0.7 && !has.has(entry.target.id)){
                              has.set(entry.target.id, {
                                    step:entry.target.getAttribute('data-type'),
                              });
                              setCounterScroll(() => {
                                   return new Map([['keys', {
                                        id : entry.target.id,
                                        count: 1,
                                        step:entry.target.getAttribute('data-type'),
                                        el:<Slugh key={ Math.random() }/>
                                        }]
                                   ]) 
                              })
                        }
                    }
               })
          }
          const observer  = new IntersectionObserver(intersectionCallback, options);
          const elControl = document.querySelectorAll('#val-scr');
          elControl.forEach((element, idx) =>{
               observer.observe(element);
          });
          observer.takeRecords().forEach((val) =>{
               console.log(val);
          })
     }, []);

     const { konditions } = state;
     const items   = props?.apis;

     return(
          <>
                <GlobalContextFind.Provider value={{ kondisi: konditions , template: props?.template, api: items, callback: handleChanges }}>
                    <Navbar/>
                    { props?.children }
                     <section id="val-scr" data-type="step-1">
                         {
                              Array.from(counterScrolls).map(([keys, {el, id, step}]) => {
                                   return el;
                              })
                         }
                    </section>
               </GlobalContextFind.Provider>
               <Footer/>
          </>
     )
}