import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='md:mb-10 flex justify-center pt-5 text-white/70 '>

      <div className="bg-white/10 backdrop-blur-lg border border-white/15 shadow-2xl rounded-xl  h-[8vh] w-[95%] md:w-[85%] flex justify-around items-center ">
            <div>
              <h1 className='text-xl md:text-3xl font-serif '>{`< Sandeep.dev />`}</h1>
            </div>
            <div> 
              
            </div>
          

          <ul className='flex justify-between gap-4 md:gap-12'>
          <Link to="/"> <li className='hover:text-cyan-400 active:text-cyan-300 focus:text-cyan-300'>Home</li>   </Link> 
           <Link to="/about">  <li className='hover:text-cyan-400'>About</li>  </Link> 
           <Link to="/contact">  <li className='hover:text-cyan-400'>Contact</li>   </Link>
          </ul>
      
      </div>
    </div>
  )
}

export default Navbar