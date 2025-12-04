import React from 'react'
import { Link } from 'react-router-dom';
import { HiArrowCircleRight } from "react-icons/hi";
const About = () => {
  return (
    <div>

   
    <div className='bg-primary h-fit text-white '>


<div className='flex justify-evenly items-center flex-col md:flex-row '>
 <div className=''>
       <img src="./images/about.png" alt="Coding illustration" className='h-[50vh] hover:scale-110 transition-transform duration-300' />
      </div>
      <div className='md:w-[50%]  px-3'>
        <h1 className='md:text-7xl text-3xl'>About <span className='text-cyan-300'> Me - </span></h1>
          <h3 className='md:text-2xl text-xl'> My Journey into <span className='text-cyan-300'>Web Development</span> </h3>
          <p className='mt-4'>I completed my 12th grade in Science in 2019, driven by curiosity about how things work and a natural interest in problem-solving. After that, I pursued a Bachelor of Science, graduating in 2022. While my academic background gave me a strong foundation in logical thinking and analysis, it also made me realize something important — I wanted to build things that people could actually use and experience.</p>
          <p className='mt-4'>In 2022, I made the decision to shift my career path towards the tech field. I explored different areas — from basic programming to understanding the creative side of technology — and one thing stood out: web design and development. It was the perfect combination of logic and creativity.</p>
          <p className='mt-4'>I enrolled in a Web Design course, where I learned HTML, CSS, and JavaScript from scratch. At first, it was just about creating static layouts, but soon, I found myself diving deeper into UI/UX principles, responsive design, and later, modern tools like React and Tailwind CSS. Each project I worked on became more than just code — it was about making interfaces that feel smooth, intuitive, and visually appealing.</p>
          <p className='mt-4'>Since then, I’ve been steadily building my skills, creating small projects, experimenting with animations, and learning best practices. My approach has always been “learn → build → improve,” ensuring that every project teaches me something new.</p>
          <p className='mt-4 mb-10'>Looking ahead, my goal is simple: to keep growing as a frontend developer, contribute to real-world projects, and create digital experiences that are not only functional but also memorable.</p>
   
      </div>
</div>
   <div className="md:w-[90vw] w-[90vw] h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_20px_cyan] mx-10"></div>
<div className="h-[50vh] flex justify-center  flex-col px-5">
  <h1 className='text-3xl md:text-5xl font-extrabold md:font-bold' >Ready To make something Kickass?</h1>
  <div className='flex items-center'> 
 <h3 className='text-2xl md:text-4xl mt-2 font-bold bg-gradient-to-r from-amber-500 to-pink-500 text-transparent bg-clip-text w-fit'>Get In Touch.</h3>
  <Link to="/contact"><button className='text-4xl px-3 md:pt-3 md:mt-2 cursor-pointer'><HiArrowCircleRight  className=' bg-gradient-to-r from-amber-500 to-pink-500  rounded-full'/></button></Link>
  </div>
</div>
    </div>
     </div>
  )
}

export default About