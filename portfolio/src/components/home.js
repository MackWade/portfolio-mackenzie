import React, {useState} from 'react'
import img2 from '../images/Astrowballoons.jpg'
import img1 from "../images/astronaut.png";
import { HiArrowNarrowRight } from 'react-icons/hi';

export default function Home() {
    return (
        <div className={' w-full h-[100vh] flex justify-between items-center px-4 bg-[#83b1ff]'}>

            <div className='max-w-[1000px] mx-auto px-3 flex flex-col justify-center h-full text-[#333333]'>
                <p className='text-4xl sm:text-4xl '>Hi, my name is</p>
                <h1 className='text-4xl sm:text-7xl font-bold text-[#FFFFFF]'>
                    Mackenzie Wade
                </h1>
                <h2 className='text-4xl sm:text-7xl font-bold text-[#555555]'>
                    Full Stack Developer.
                </h2>
                <p className='text-[#555555] py-4 max-w-[700px]'>
                    I’m a full-stack developer looking for a Fall 2023 co-op. Currently, focused on
                    building responsive crypto managing application using C++ and R.
                </p>
                <div>
                    <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
                        View Work
                        <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
                    </button>
                </div>
            </div>
            <div>
                {/* Creates the image*/}
                <img className={'h-[50vh]'} src={img2} alt={""} />
            </div>
        </div>
    )
}
