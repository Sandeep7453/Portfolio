import React from "react"
import { Routes, Route } from "react-router-dom"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Contact from "./Pages/Contact"
import Navbar from "./Components/Navbar"


function App() {


  return (
    <> 
    <div className="bg-gradient-to-br from-[#0f0f0f] via-[#1a1a1a] to-[#000000]    isko normal css me likho ">
<Routes>
        <Route path="/" element={
          <>
          <Navbar/> <Home/></>
        }   />
        <Route path="/about" element={<About/>}  />
        <Route path="/contact" element={<Contact/>} />
</Routes> 

    </div>

       
    </>
  )
}

export default App
