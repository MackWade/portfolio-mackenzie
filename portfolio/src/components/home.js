import React, {useState} from 'react'
import img2 from '../images/Astrowballoons.jpg'

export default function Home() {
    return (

            <div className={' w-full h-[100vh] flex flex-row justify-between items-center px-[20%] bg-[#83b1ff]' } id = "home"  >

                    <div className='  flex flex-col justify-center h-full text-[#381A46]'>
                        <p className='text-4xl '>Hi, my name is</p>
                        <h1 className='text-7xl  font-bold text-[#FFFFFF]'>
                            Mackenzie Wade,
                        </h1>
                        <h2 className='text-7xl font-bold text-[#381A46]'>
                            Full Stack Developer.
                        </h2>
                        <p className='text-[#381A46] py-4 max-w-[700px]'>
                            I’m a full-stack developer looking for a Fall 2023 co-op. Currently, focused on
                            building a responsive crypto managing application using C++ and R.
                        </p>
                        <div className={'flex space-x-6' }>
                            <a href="https://www.linkedin.com/in/mackenziew8/" target="_blank" rel="noopener noreferrer">
                                <button  className='text-white  hover:border-[#381A46] hover:text-[#381A46] group border-2 px-6 py-3 my-2 flex items-center '>
                                    Linkedin
                                </button>
                            </a>
                        </div>
                    </div>
                    <div>
                        {/* Creates the image*/}
                        <img className={' hidden 2xl:block h-[50vh]' } src={img2} alt={""} />
                    </div>
            </div>

    )
}
