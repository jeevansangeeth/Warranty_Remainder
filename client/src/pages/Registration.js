import React,{useState} from "react"
import Axios from "axios"
import Header from "./header.js"

import "./Registration.css"



export default function Registration() {
  const[nameReg,setNameReg]=useState("")
  const[mobileReg,setMobileReg]=useState("")
  const[emailReg,setEmailReg]=useState("")
  const[passwordReg,setPasswordReg]=useState("")

  // Axios.defaults.withCredentials = true

  const register =()=>{
    Axios.post("http://localhost:3001/registration",{
      name: nameReg,
      mobile: mobileReg,
      email: emailReg,
      pass: passwordReg,
    }).then((response)=>{
       if(response.data.message){
        alert(response.data.message);
              
        
       }else{
        console.log(response);
       }
    });
   };

  
  return (
    
    <div className="App">
      <Header/>
     
       <div className="registration">
        <h1>Sign up</h1>
         
          <input 
            type="text"
             name="name" 
             placeholder="Name" 
             onChange={(e)=>setNameReg(e.target.value)}
             autoComplete="off"
             />
          
          <input 
            type="number" 
            name="name" 
            placeholder="Mobile Number" 
            onChange={(e)=>setMobileReg(e.target.value)}
            autoComplete="off"
            />          
          <input 
            type="email" 
            name="name" 
            placeholder="Email" 
            onChange={(e)=>setEmailReg(e.target.value)}
            autoComplete="off"
            />          
          <input 
            type="password" 
            name="name" 
            placeholder="Password" 
            onChange={(e)=>setPasswordReg(e.target.value)}
            autoComplete="off"
            />

          <button onClick={register}>Register</button>

          <p className="reg-link">go to  <a href="/">Login page</a></p>
         
          
       </div>
      
    </div>
  );
  }

