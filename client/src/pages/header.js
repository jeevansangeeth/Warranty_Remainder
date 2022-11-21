import React from "react";
import Image from "./logo/logo.png"
import "./header.css"


export default function header(){
    return(
    <div className="header">
        <img src={Image} alt=""/>
        <h4 className="logo-exp">Save your warranty bills</h4>
    </div>
    )
}