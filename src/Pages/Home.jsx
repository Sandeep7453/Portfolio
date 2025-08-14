import React from "react";
import { motion } from "framer-motion";
import SkillCard from "../Components/SkillCard";
import { DiHtml5 } from "react-icons/di";
import { DiGithubFull } from "react-icons/di";
import { DiFirebase } from "react-icons/di";
import { DiCss3 } from "react-icons/di";
import { DiJavascript } from "react-icons/di";
import { DiReact } from "react-icons/di";
import { DiCss3Full } from "react-icons/di";
import { MdArrowRightAlt } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";
import DownlodCv from "../Components/DOwnlodCv";


const morphVariants = {
  animate: {
    borderRadius: [
      "60% 40% 30% 70% / 60% 30% 70% 40%",
      "30% 60% 70% 40% / 50% 60% 30% 50%",
      "60% 40% 30% 70% / 60% 30% 70% 40%", // back to original
    ],
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const Home = () => {
  return (
      <div className="h-full flex flex-col justify-center md:items-center items-center mt-10">

<div className="md:h-[80%] h-[50%] w-[95%] md:w-[85%] flex  flex-col md:flex-row justify-evenly items-center  bg-white/10 backdrop-blur-lg border  border-white/20  rounded-2xl shadow-[0_0_15px_5px_rgba(255,255,255,0.4)] py-20 md:py-10">
          <div className="text-white/85 font-serif">
          <h3 className=""> <span className="text-5xl md:text-9xl font-extrabold pl-5">Hey..!</span> <span className="text-3xl md:text-7xl">I'm </span><span className="text-4xl md:text-6xl font-bold italic text-cyan-400">Sandeep</span></h3> 
          <h3 className="text-xl md:text-3xl pt-1 md:pt-5 flex justify-center md:justify-start font-serif pl-5 italic text-gray-400"> "Frontend Developer | Building beautiful, fast websites"</h3>

          <DownlodCv/>
          </div>  




 
      <div className="relative w-[60vmin] h-[60vmin] border border-none border-white/10 rounded-full my-5 md:-my-5">
        <div className="absolute rounded-full border border-none border-white/40 "></div>

        <motion.div
          className="relative w-full h-full"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        >
          <motion.div
            className="absolute w-full h-full overflow-hidden z-10"
            variants={morphVariants}
            animate="animate"
          >
            <motion.div
              className="absolute w-[142%] h-[142%] left-[-21%] top-[-21%] flex items-center justify-center text-5xl font-bold uppercase text-[#003] bg-cover bg-center opacity-100 z-5 "
              style={{
                backgroundImage: `url(./images/1000005594-01.jpg)`,
                backgroundPosition: 'center 30%'
              }}
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            />
            
          </motion.div>
        </motion.div>
      </div>
      
    </div>
 <div className="w-[80vw] h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_20px_cyan]"></div>
 <div className="w-[80vw] h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_20px_cyan]"></div>
    <section className="h-full md:w-[80%] w-[100%]  pl-5">
                  <h1 className="text-6xl flex justify-center items-center mt-15 text-gray-200 font-sans font-bold my-5">Development Toolkit</h1>
                  <p className="text-gray-400 text-md italic  flex justify-center md:mb-8">Technologies I use to build fast, responsive apps</p>
                <div className="grid md:grid-cols-4 grid-cols-2 space-x-10 place-items-center place-content-center ">


          
       <SkillCard title="HTML 5" description="Standard language to structure web content using elements and tags. " icon={<DiHtml5 size={100} className="text-orange-500 hover:scale-105" />}/>
       <SkillCard title="CSS" description="CSS styles the web — bringing HTML to life with responsive designs." icon={< DiCss3 size={100} className="text-blue-600" />}/>
       <SkillCard title="JavaScript" description="JavaScript adds interactivity and dynamic behavior to websites, from animations to logic-driven actions. " icon={< DiJavascript size={100} className="text-yellow-500" />}/>
       <SkillCard title=" React" description="React is a JavaScript library for building fast and modular user interfaces using reusable components and hooks. " icon={<DiReact size={100} className="text-cyan-400" />}/>
       <SkillCard title="Tailwind CSS" description="A utility-first CSS framework that helps you build modern, responsive UIs quickly with minimal custom CSS.

 " icon={<DiCss3Full size={100} className="text-sky-400" />}/>
       <SkillCard title="Git & GitHub" description="Git tracks code changes, and GitHub lets you collaborate and manage projects in the cloud using version control." icon={<DiGithubFull size={100} className="text-gray-200" />}/>
       <SkillCard title=" Firebase" description="A backend-as-a-service by Google that offers real-time databases, authentication, hosting, and more." icon={<DiFirebase size={100}  className="text-yellow-400"/>}/>
   
      </div>

    </section>

<div className="md:w-[90vw] w-[100vw] h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_20px_cyan]"></div>

<h1 className="text-3xl md:text-5xl font-bold font-serif text-white/80 mt-20">My Journey (2022–2025)</h1>

{/* for dekstop view */}
<div className="h-screen w-[60%] md:flex justify-around text-gray-200 hidden ">
  
  <div className="relative h-[80vh]">
 
    <div className="absolute w-[28vw] rounded-2xl -ml-44 top-[28%]  py-2 px-2 bg-blue-500/10  shadow-[0_0_15px_5px_rgba(0,0,255,0.7)]">
  <h3 className="text-md">2023 — Web Design Course</h3>
  <h1 className="text-2xl font-bold">Oxford Software Institute, New Delhi</h1>
  <p className="text-sm italic">Learned core web design principles including HTML, CSS, JavaScript.
Built multiple static websites and improved design thinking.</p></div>



    <div className="absolute w-[28vw] rounded-2xl pl-2 py-1 -ml-44 top-[80%] bg-orange-500/10 shadow-[0_0_15px_5px_rgba(255,121,44,1)] ">
  <h3 className="text-md"> Business Building Journey</h3>
  <h1 className="text-2xl font-bold">Currently focused on:</h1>
  <p className="text-sm italic">📌 Starting my own web or product-based business
    </p>
  <p className="text-sm italic">
📌 Building a strong brand identity
</p> 
 <p className="text-sm italic">
📌 Creating websites, tools, or services for a target audience
</p>  
<p className="text-sm italic">
📌 Learning marketing, customer feedback, and product launches</p>
 </div>
</div>




<div className="h-[80vh] w-1 bg-white relative">

    <div className="absolute h-7 w-7 rounded-full -ml-3 top-[10%] bg-red-500"> </div>
    <div className="absolute h-7 w-7 rounded-full -ml-3 top-[35%] bg-blue-500"></div>
    <div className="absolute h-7 w-7 rounded-full -ml-3 top-[60%] bg-green-800"></div>
    <div className="absolute h-7 w-7 rounded-full -ml-3 top-[85%] bg-orange-500"></div>
</div>




<div className="relative h-[80vh]">
 <div className="absolute w-80 -ml-70 -mb-20 top-[5%] px-2 rounded-2xl py-1 backdrop-blur-lg shadow-[0_0_15px_5px_rgba(255,0,0,0.4)] bg-red-500/10">

    <h3 className="text-md">2022 — Graduation Complete</h3>
  <h1 className="text-2xl font-bold">Bachelor of Science (B.Sc)</h1>
  <p className="text-sm italic">Sri Dev Suman Garhwal University</p>
  <p className="text-lg">Completed undergraduate studies with a focus on science fundamentals.</p>
 </div>

    <div className="absolute w-[33vw] rounded-2xl px-2 -ml-70 top-[52%] shadow-[0_0_15px_5px_rgba(0,255,0,0.4)] bg-green-500/20 ">
<h3 className="text-md"> 2024 — Frontend Development</h3>
  <h1 className="text-2xl font-bold">Learned modern frontend technologies:</h1>
  <p className="text-sm italic">✅ React.js
                                ✅ Tailwind CSS
                                ✅ Basic knowledge of React Hooks, Component-based architecture, and Responsive Design</p>
  <p className="text-lg">Started building real-world UI projects and component libraries.</p></div>
</div>
</div>



{/* For mobile screen view */}
<div className="h-screen flex justify-start items-start w-[80vw] md:hidden">

<div className="h-[90vh] w-1 bg-white relative mr-2">
  <div className="absolute top-[10%] h-5 w-5 bg-red-600 rounded-full -ml-2"></div>
  <div className="absolute top-[35%] h-5 w-5 bg-blue-400 rounded-full -ml-2"></div>
   <div className="absolute top-[60%] h-5 w-5 bg-green-400 rounded-full -ml-2"></div>
    <div className="absolute top-[85%] h-5 w-5 bg-orange-400 rounded-full -ml-2"></div>

</div>

<div className="relative h-[80vh] w-1  text-white">
            <div className="absolute top-[7%] w-[80vw] ml-3">
                    <h3 className="text-md">2022 — Graduation Complete</h3>
                    <h1 className="text-2xl font-bold">Bachelor of Science (B.Sc)</h1>
                    <p className="text-sm italic">Sri Dev Suman Garhwal University</p>
                    <p className="text-lg">Completed undergraduate studies with a focus on science fundamentals.</p>
            </div>



   <div className="absolute top-[32%] w-[80vw] ml-3"> 
              <h3 className="text-md">2023 — Web Design Course</h3>
              <h1 className="text-2xl font-bold">Oxford Software Institute, New Delhi</h1>
              <p className="text-sm italic">Learned core web design principles including HTML, CSS, JavaScript.
                  Built multiple static websites and improved design thinking.</p>
  </div>



    <div className="absolute top-[56%] w-[80vw] ml-3"><h3 className="text-md"> 2024 — Frontend Development</h3>
              <h1 className="text-2xl font-bold">Learned modern frontend technologies:</h1>
              <p className="text-sm italic">✅ React.js ✅ Tailwind CSS✅ Basic knowledge of React Hooks, Component-based architecture, and Responsive Design</p>
              <p className="text-lg">Started building real-world UI projects and component libraries.</p>
        </div>



         <div className="absolute top-[90%] w-[80vw] ml-3"> <h3 className="text-md"> Business Building Journey</h3>
                    <h1 className="text-2xl font-bold">Currently focused on:</h1>
                    <p className="text-sm italic">📌 Starting my own web or product-based business
                  </p>
                    <p className="text-sm italic">
                  📌 Building a strong brand identity
                  </p> 
                  <p className="text-sm italic">
                  📌 Creating websites, tools, or services for a target audience
                  </p>  
                  <p className="text-sm italic">
                  📌 Learning marketing, customer feedback, and product launches</p>
          </div>
</div>


</div>






{/* Horizontal line with shadow effect */}
 <div className="md:w-[90vw] w-[100vw] h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_20px_cyan]"></div>


<section4 className=" text-white my-10 md:w-[70%] h-fit">

  <h1 className="text-4xl md:text-5xl font-semibold">A Peek Into My Creations</h1>
  <p className="text-md font-sans md:mt-2">A glimpse into my latest projects and designs</p>
  <div className="mt-10 flex justify-evenly w-full flex-col md:flex-row">
    <div className=" w-72  bg-transparent backdrop-blur-lg border  border-white/10  rounded-2xl shadow-[0_0_3px_1px_rgba(10,244,237,0.4)]">
    <img src="./images/Gobox_project.png" alt="" className="rounded-t-2xl" />
    <p className="mx-2"> <span className="text-lg text-cyan-500 font-bold">Men’s Fashion Hub</span>  – A stylish and responsive e-commerce website designed for men’s fashion lovers. Built with <span className="text-cyan-300"> React & Tailwind</span> React & Tailwind focusing on clean UI and smooth navigation.</p>
    <button className=" font-bold px-2 py-1 mt-3 rounded-2xl mx-3 mb-5 bg-cyan-300 text-black hover:text-white hover:bg-cyan-900"> <a href="https://gobox-menfashion.netlify.app/" target="_blank"> View Now</a></button>
    </div>


     <div className="w-72 mt-5 flex flex-col items-center justify-center border border-cyan-500 rounded-xl p-6 text-center 
bg-black/40 text-white cursor-pointer 
animate-pulse hover:animate-none hover:scale-105 hover:shadow-[0_0_20px_rgba(6,182,212,0.7)] 
transition-all duration-300 ease-in-out">
  
  <span className="text-8xl mb-2">+</span>
  <p className="text-lg font-medium">Next Big Thing Loading...</p>

</div>

  </div>
</section4>

 <div className="md:w-[90vw] w-[100vw] h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_20px_cyan] mt-10"></div>










      <section3 className="h-fit md:w-[80vw] w-[90vw] flex flex-col md:flex-row justify-between  text-white pt-10" >
                          <div className="md:text-5xl text-2xl font-extrabold flex flex-col font-serif mb-10 ">
                              Why I’m a Good Fit for Your Project. 
                              <div className="flex justify-center">
     <img src="./images/glowing_lineart.png" alt="" className="hover:scale-105 transition-transform duration-300 size-100 mx-10 my-10 bg-transparent mix-blend-screen shadow-[0_0_15px_5px_rgba(48,241,224,0.8)] rounded-2xl " />
                              </div>
                       
                            </div>
                            <div className="flex flex-col ">
                              <div className="mb-10">
                                <h1 className="text-3xl font-bold mb-1"> Practical Learning Focused</h1>
                                <ul className="text-sm ">
                                  <li>I learn by building real projects, not just watching tutorials.</li>
                                  <li>My focus is on practical implementation and solving real-world problems.</li>
                                </ul>
                                <div className="h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_20px_cyan]"></div>
                              </div>
                              <div className="my-6"> <h1 className="text-3xl font-bold mb-1"> Fast & Responsive Web Development</h1>
                                <ul className="text-sm ">
                                  <li>I build websites that are fast, mobile-friendly, and user-centric.</li>
                                  <li>Proficient in React.js, Tailwind CSS, and modern frontend tools.</li>
                                </ul>
                                  <div className=" h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_20px_cyan]"></div>
                                </div>
                              <div className="my-6"> <h1 className="text-3xl font-bold mb-1"> Strong Work Ethic</h1>
                                <ul className="text-sm ">
                                  <li>I take deadlines seriously and work with full dedication.</li>
                                  <li>Open to feedback and continuously improving my skills.</li>
                                </ul>
                                  <div className=" h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_20px_cyan]"></div>
                                </div>
                              <div className="my-6"> <h1 className="text-3xl font-bold mb-1"> Business-Oriented Mindset</h1>
                                <ul className="text-sm ">
                                  <li>Not just coding, I understand product building, branding, and user experience.</li>
                                  <li>Currently building my own projects to understand market needs.</li>
                                </ul>
                                  <div className=" h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_20px_cyan]"></div>
                                </div>
                              <div className="my-6"> <h1 className="text-3xl font-bold mb-1"> Practical Learning Focused</h1>
                                <ul className="text-sm ">
                                  <li>I maintain clear communication and give regular progress updates.</li>
                                  <li>Collaborative team player who is always eager to learn from others.</li>
                                </ul>
                                  <div className=" h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_20px_cyan] hidden md:flex"></div>
                                </div>
                            </div> 
      </section3>
 <div className="md:w-[90vw] w-[100vw] h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_20px_cyan]"></div>




      </div>




  );
};

export default Home;
