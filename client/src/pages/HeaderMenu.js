import React from "react";
import "./Dashboard.css"
import Image from "./logo/logo.png"
import { Link , useNavigate } from "react-router-dom";

// import Home from "./Navpages/home.js"
// import Insurance from "./Navpages/Insurance.js"
// import Profile from "./Navpages/Profile.js"

// import Axios from "axios";



export default function HeaderMenu() {

  const navigate=useNavigate()

  const warrentyCreate=()=>{
    
    navigate("/createWarrenty")
    // Navigate("/createWarrenty")
  }
  
//   const [role, setRole] = useState("");

  // Axios.defaults.withCredentials = true;
  // useEffect(() => {
  //   Axios.get("http://localhost:3001/").then((response) => {
  //     if (response.data.loggedIn == true) {
  //       setRole(response.data.loggedIn);
  //     }
  //   });
  // }, []);

  return (
    <nav className="navigation">
        <img src={Image} alt="Logo"/>
     
    <div
      className="navigation-menu">
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/insurance">Insurance</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
      </ul>
    </div>
    <button onClick={warrentyCreate}>+ Create Warrenty</button>
  </nav>

  );
}