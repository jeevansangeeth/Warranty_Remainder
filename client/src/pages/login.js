import React, { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import Header from "./pages/header.js"
import Header from "./header.js"
import Axios from "axios";
import "./login.css"

export default function login() {
 
  const[email,setEmailLog]=useState("")
  const[password,setPasswordLog]=useState("")

  // const [loginStatus, setLoginStatus] = useState("");
  const navigate=useNavigate();

 Axios.defaults.withCredentials = true

  const login = () => {    
    Axios.post("http://localhost:3001/", {
       email: email,
       pass: password,
      }).then((response)=>{
        if(response.data.message){
          console.log(response.data.message);
        }
        else{
          // console.log(response);
          // setLoginStatus(response.data[0].Name);
          //<Navigate to="/dashboard"/>
          navigate('/home');
        }
     })
  };
  
   useEffect(()=>{
    Axios.get("http://localhost:3001/").then((response)=>{
      if(response.data.loggedIn === true)
      // setLoginStatus(response.data.user[0].Name);
      navigate('/home');
    })

   })

  return (
    
    <div>    
      <Header/> 
    <div className="login-container">
   
      <div className="login-box">
        <h1>login</h1>
          <input 
            type="email" 
            placeholder="Email" 
            name="name" 
            onChange={(e)=>setEmailLog(e.target.value)} >
            </input>
          <input 
            type="password" 
            placeholder="Password" 
            name="name"
            onChange={(e)=> setPasswordLog(e.target.value)} >
            </input>

          <button onClick={login}> LOG IN</button>
          <p className="reg-link">New for this app  <a href="/registration">Register Now</a></p>
          
        </div>
        {/* <h1>{loginStatus}</h1> */}
    </div>
   

    </div>
  );
}
