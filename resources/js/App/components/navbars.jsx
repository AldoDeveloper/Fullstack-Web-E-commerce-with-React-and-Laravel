import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = (props) => {
    // React.useEffect(() => {
    //     var prevScrollpos = window.pageYOffset;
    //     window.onscroll = function () {
    //         var currentScrollPos = window.pageYOffset;
    //         if (prevScrollpos > currentScrollPos) {
    //             document.querySelector(".navbar").style.top = "0px";
    //         } else {
    //             document.querySelector(".navbar").style.top = "-100px";
    //         }
    //         prevScrollpos = currentScrollPos;
    //     };
    // }, []);

    return (
        <>
            <div className="navbar">
                <div className="nav-link">
                    <li>
                        <a href="#prod">PROMO</a>
                    </li>
                    <li>
                        <a href="#about">ABOUT</a>
                    </li>
                </div>
                <div>
                    <h2 className="titles" style={{ "--size": "35px" }}>
                        TOKO SALSABILA...
                    </h2>
                </div>
                <div>
                    <li>
                        <NavLink to={'produk'}>PRODUK</NavLink>
                    </li>
                    <li>
                        <a href="#">LOGIN</a>
                    </li>
                </div>
            </div>
        </>
    );
};

export default Navbar;
