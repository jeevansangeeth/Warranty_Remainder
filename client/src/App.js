import React from "react";
import { BrowserRouter , Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/login.js";
import Registration from "./pages/Registration.js";
// import Header from "./pages/header.js"
import Dashboard from "./pages/Dashboard.js"
import Home from "./pages/Navpages/Home.js"
import Insurance from "./pages/Navpages/Insurence.js"
import Profile from "./pages/Navpages/Profile.js"
import CreateWarrenty from "./pages/Navpages/CreateWarrenty.js"
function App() {
  return (
    <BrowserRouter>

    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/registration" element={<Registration />}/>
      <Route path="/dashboard" element={ <Dashboard />} />
      <Route path="/home"  element={ <Home />} />
      <Route path="/insurance"  element={ <Insurance />} />
      <Route path="/profile"  element={ <Profile />} />
      <Route path="/createWarrenty" element={<CreateWarrenty/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;

