import React from 'react'


const SkillCard = ({title , description, icon}) => {
  return (
    <div className='md:h-[35vh] md:w-[12vw] bg-transparent mt-10 mb-10 rounded-2xl flex flex-col flex-wrap justify-center items-center shadow-[0_0_10px_2px_rgba(255,255,255,0.2)] hover:shadow-[0_0_15px_5px_rgba(255,255,255,0.5)] text-white/75 hover:scale-105 hover:animate-pulse cursor-pointer  '>

       
        <div className=" text-white">{icon}</div>
        <div className='flex justify-center items-center flex-col gap-1'>
            <h2 className='flex justify-center text-2xl font-bold'>{title}</h2>
            <p className='flex justify-center items-center px-2 text-sm'>{description}</p>
        </div>
    </div>
  )
}

export default SkillCard