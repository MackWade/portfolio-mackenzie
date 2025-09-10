import React from 'react'
import img2 from '../images/Astrowballoons.jpg'

export default function Home() {
    return (

            <div className={' w-full min-h-[100vh] flex flex-col lg:flex-row justify-between items-center px-4 sm:px-8 lg:px-[20%] py-20 bg-[#83b1ff]' } id = "home"  >

                    <div className=' flex flex-col justify-center h-full text-[#381A46] w-full lg:w-auto animate-fade-in-up'>
                        <p className='text-2xl sm:text-3xl lg:text-4xl animate-fade-in-up animation-delay-200'>Hi, my name is</p>
                        <h1 className='text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#FFFFFF] animate-fade-in-up animation-delay-400'>
                            Mackenzie Wade,
                        </h1>
                        <h2 className='text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#381A46] animate-fade-in-up animation-delay-600'>
                            Full Stack Developer.
                        </h2>
                        <p className='text-[#381A46] py-4 max-w-[700px] text-sm sm:text-base lg:text-lg animate-fade-in-up animation-delay-800'>
                            I'm a full-stack developer looking for new graduate roles. Currently, focused on
                            building a responsive crypto managing application using C++ and R.
                        </p>
                        <div className={'flex space-x-6 animate-fade-in-up animation-delay-1000' }>
                            <a href="https://www.linkedin.com/in/mackenziew8/" target="_blank" rel="noopener noreferrer">
                                <button  className='text-white hover:border-[#381A46] hover:text-[#381A46] group border-2 px-4 sm:px-6 py-2 sm:py-3 my-2 flex items-center text-sm sm:text-base transition-all duration-300 hover:scale-105 hover:shadow-lg'>
                                    Linkedin
                                </button>
                            </a>
                        </div>
                    </div>
                    <div className='mt-8 lg:mt-0 animate-fade-in-right animation-delay-1200'>
                        {/* Creates the image*/}
                        <img className={' hidden lg:block h-[40vh] xl:h-[50vh] w-auto object-contain hover:scale-105 transition-transform duration-500' } src={img2} alt="Mackenzie Wade with balloons" />
                    </div>
            </div>

    )
}
