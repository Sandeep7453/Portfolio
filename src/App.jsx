import React from "react"
import { Routes, Route } from "react-router-dom"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Contact from "./Pages/Contact"
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"


function App() {


  return (
    <> 
    <div className="bg-gradient-to-br from-gray-900 via-black to-gray-900">
<Routes>
        <Route path="/" element={
          <>
          <Navbar/> <Home/> <Footer/></>
        }   />
        <Route path="/about" element={  <>   <Navbar/> <About/> <Footer/> </>}  />
        <Route path="/contact" element={<>  <Contact/> <Footer/></>} />
</Routes> 

    </div>

       
    </>
  )
}

export default App
