import React, { useRef } from "react";
import img1 from '../../img/cf3.jpg';
import img2 from '../../img/back_vect.jpg';
import img3 from '../../img/windows.jpg';
import Navbar from "../navbars";
import * as Icon from 'react-icons/bs';
import Typed from 'typed.js';
import PromoProduct from "./PromoProduct";
import AboutCompany from "./AboutCompany";
import ContactUs from "./ContactUs";
import Footer from "./Footer";

const lengthScrool = [
     [<PromoProduct/>, {images:img2, size:'contain', id:'prod'}],
     [<AboutCompany/>, {images:img3, size:'cover', id:'about'}],
     [<ContactUs/>, {images:img2, size:'cover', id:'contact-us'}]
];

const ScroolAnimation = (props) => {
     const images   = props.img;
     const typeSize = props.size;
     const id       = props.id;
     return (
          <section id={id} key={id} className="pages" style={{minHeight: id === 'foot' ? props.height : '100vh', backgroundColor:id === 'foot' ? props.bg : '', backgroundImage:`url(${images})`, backgroundSize:typeSize === null ? 'cover' : typeSize }}>
                {props.children}
          </section>
     )
}
const PagesScroolAnimation = ()=>{
     return (<>
          {
               lengthScrool.map(([element, {images, size, id}], idx) =>{
                    return (
                         <ScroolAnimation key={idx} img={images} size={size} id={id}>
                              <div className="raveal">
                                   {element}
                              </div>
                          </ScroolAnimation>
                    )
               })
          }
     </>)
};
const ViewFirst = () =>{
     React.useEffect(() =>{
          const text = new Typed('#txt',{
               strings:['Hello 1', 'Aldo Ratmawan', 'Otong AjA bRO'],
               typeSpeed:100,
               backSpeed:100,
               loop:true,
          });
     }, []);
     return <section className="pages" style={{ backgroundImage:`url(${img1})` }}>
         <Navbar/>
         <div className="center-data">
            <div className="box-blur">
                   <div className="text-center text-white mb-5">
                    <div className="titles text-white" id="txt" style={{ '--size':'37px', minHeight:'14vh' }}>
                    </div>
                         Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati itaque esse, molestiae sint quaerat, cum quibusdam placeat nam deserunt et maxime explicabo totam accusantium qui voluptatum, at nobis dolorum officia eligendi doloremque quisquam! Fugiat vel, quibusdam accusantium qui pariatur porro eius aperiam earum unde, ad suscipit voluptatem est corrupti sunt.
                   </div>
                   <div className="d-flex justify-content-lg-center align-items-baseline" style={{ gap:'10px' }}>
                         <button className="btn btn-success"><Icon.BsShop size={'20px'} style={{ marginRight:'6px' }}/> SHOP</button>
                         <button className="btn btn-success"><Icon.BsArrow90DegRight size={'20px'} style={{ marginRight:'6px' }}/> LOGIN</button>
                   </div>
            </div>
         </div>
     </section>
}
export default function() {
     React.useEffect(() =>{
          function scrool(ev){
               const pages = document.querySelectorAll('.raveal');
               Array.from(pages).forEach((val) =>{
                    let windowHeight   = window.innerHeight;
                    let topElement     = val.getBoundingClientRect().top;
                    let visibleElement = 80;
                    if(topElement < windowHeight - visibleElement) return val.classList.add('active-raveal');
                    return val.classList.remove('active-raveal');
               })
          }
          window.addEventListener('scroll', scrool);
          return () =>{
              return window.removeEventListener('scroll', scrool)
          }
     }, []);
     return (
          <>
             <ViewFirst/>
             <PagesScroolAnimation/>
             <ScroolAnimation id={'foot'} bg={'black'} height={'65vh'}>
                <Footer/>
             </ScroolAnimation>
          </>
      );
}
