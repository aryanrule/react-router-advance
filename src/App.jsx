import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Contact from "./components/Contact";
import { Route , Routes  } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { useState } from "react";
import DashBoard from "./pages/DashBoard";


function App() {

  const [isloggedIn , setLoggedIn] = useState(false); //initiaily 
  
  return (
      <div className="w-screen bg-richblack-900 h-screen flex flex-col">

         <Navbar isloggedIn = {isloggedIn} setLoggedIn = {setLoggedIn}/>

         <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element = {<Contact/>} />  
            <Route path="/login" element={<Login setLoggedIn = {setLoggedIn}/>} />
            <Route path="/signup" element={<Signup setLoggedIn = {setLoggedIn}/>} />
            <Route path="/dashboard" element={<DashBoard/>}/>
                  
         </Routes>

      </div>
  );
}

export default App;
