import { Link } from "react-router-dom";
import React, { useState } from 'react';
export default function Header(){
   

    return(
        <div className="header">
            <ul type = "none">
                <li className="home">
                    <Link to="/"><img src={"/" + "nike.png"} alt="" className="logo" /></Link>
                </li>

                <li className="Aboutus">
                    <Link to="/AboutUs">About Us</Link>
                </li>
                <li className="contact">
                    <Link to="/contacts">Contacts</Link>
                </li>
            </ul>

            <nav className="headernav">
           <Link to="/Basket">  <img src = "shopping-bag.png"  className="shoppinglogo" /></Link>
            </nav>
        </div>
    )
}
﻿
