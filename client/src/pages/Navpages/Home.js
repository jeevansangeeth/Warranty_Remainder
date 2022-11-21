import React from "react";
import Header from "../HeaderMenu.js";
import Image from "../logo/logo.png"
import "./Home.css"

export default function home(){
    

 return(
    
    <div>
        <Header/>
        <div className="homePageBox">
        <div className="sideNavBar">
         <div className="logo">
            {/* <img src={Image} alt="Logo"/> */}
            <div className="All">

            </div>
         </div>
        </div>
        <div className="sideBarPage">

        </div>
        </div>
        
    </div>
    )
}