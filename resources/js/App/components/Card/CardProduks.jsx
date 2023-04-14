
import React from "react";
import place from "../../img/destination.png";
import * as Icons from 'react-icons/bs';
import * as Support from '../../Support/supportString';
import { motion } from "framer-motion";
import InfoType from "./Component/infoType";

const SelectionPromo = ({price}) =>{
     const {promo, format}  = price
     if(promo !== null) 
          return (
               <>
                    <div className="discount">
                         <span>{promo?.discount} %</span>
                         <span><strike>{ format?.format_after_discount }</strike></span>
                    </div>
               </>
          );
     return;
}

const selectionPrice = ({pricing}) =>{
     const {promo, format} = pricing;
     if(promo === null)
          return format?.format_after_discount;
     return format?.format_promo?.price_format;
}

export default function(props){
     return (
          <>
               <motion.div transition={{ durations:0.7 }} key={props.fitur?.tokens} initial={{ y:20, opactity:0 }} animate={{ y:0, opacity:1 }} className="produk-list-single">
                    <img src={props.fitur?.cover} alt="" className="back" />
                    <InfoType price={props?.fitur?.price} category={props?.fitur?.category_type}/>
                    <div className="m-2">
                         <div className="tags">
                              <span style={{ fontSize:'15px' }} className="name-produk">
                                   { Support.default.limitString(props.fitur?.name_produk, 37, '...') }
                              </span>
                              <div className="price">
                                  {selectionPrice({pricing : props?.fitur?.price})}
                              </div>
                              <SelectionPromo price={props?.fitur.price}/>
                              <div className="place mt-1">
                                   <img src={place} alt="" />
                                   <span className="ms-2">
                                        Bandar Lampung...
                                   </span>
                              </div>
                              <div className="mt-1"><Icons.BsStars/><small> Terjual <span className="fw-bold">{props.fitur?.sold}</span> pcs +</small></div>
                         </div>
                    </div>
               </motion.div>
          </>
     )
}