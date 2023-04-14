import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Voices from "./Voice";
import { motion } from "framer-motion";
import BreadCrumb from "./BreadCrumb";

const SlidAnimations = {
    show:{
        opacity: 1,
        x:0,
        scale:1,
    },
    hidde:{
        opacity: 0,
        x:50,
        scale: 0.3
    }
}

export default function OutletContext(props){
    const location = useLocation();
    return (
        <section className="side-flx-2 p-3">
            <BreadCrumb/>
            <Voices/>
            <motion.div
              key={location?.key}
              transition={{ duration: 0.5 }}
              initial={'hidde'}
              variants={SlidAnimations}
              animate={'show'}>
              <Outlet/>
            </motion.div>
        </section>
    )
}