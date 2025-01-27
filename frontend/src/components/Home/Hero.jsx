import React from 'react'
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className='h-[75vh] flex'>
        <div className=' w-full lg:w-3/6 flex-col items-center lg:items-start  justify-center '>
        <h1 className='text-4xl lg:text-6xl font-semibold text-yellow-100 text:centre lg:text-left'>
            EventSphere
            </h1>
            <p className='mt-4 text-xl text-zinc-300 text-center lg:text-left'>
            At EventSphere, we turn your event vision into reality with seamless planning and flawless execution, ensuring every moment is unforgettable.
            </p>
            <div className='mt-8'>
                <Link
                to ="/event-lists" className='text-yellow-100 text-xl lg:text-2xl font-semibold border border-yellow-100 px-10 py-3 hover:bg-zinc-800 rounded-full'>Discover evnents
            </Link></div>
            </div>
        <div className=' w-full lg:w-3/6 h-auto lg:h-[100%] flex items-center justify-center'>
        <img src='./Hero.jpg' alt='Hero' width="600" height="200" />
        </div>
    </div>
  )
}

export default Hero