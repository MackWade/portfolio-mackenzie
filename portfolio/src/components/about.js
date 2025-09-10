import React from 'react'
import img2 from '../images/3800_4_06.jpg'
import pythonLogo from "../images/python-logo.png"
import javaLogo from "../images/java-logo.png"
import jsLogo from "../images/javascript-logo.png"
import cppLogo from "../images/cpp-logo.png"

export default function About() {

    const codingLanguage = [
        { img: pythonLogo, name: "Python"},
        { img: javaLogo, name: "Java"},
        { img: jsLogo, name: "JavaScript"},
        { img: cppLogo, name: "C++"},
    ]

    return (

        <div className={' w-full min-h-[100vh] flex flex-col lg:flex-row justify-between items-center px-4 sm:px-8 lg:px-[15%] py-20 bg-[#83b1ff]' } id = "about"  >
            <div className='order-2 lg:order-1 animate-fade-in-left'>
                {/* Creates the image*/}
                <img className={' hidden lg:block h-[40vh] xl:h-[50vh] w-auto object-contain hover:scale-105 transition-transform duration-500' } src={img2} alt="Mackenzie Wade professional photo" />
            </div>
            <div className={" flex flex-col justify-center h-full text-[#381A46] w-full lg:w-auto order-1 lg:order-2 lg:mr-32 animate-fade-in-right"}>
                <h1 className={" text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#FFFFFF] animate-fade-in-up animation-delay-200"} >
                    About!
                </h1>
                <p className='text-sm sm:text-base lg:text-lg text-[#381A46] mt-5 py-4 max-w-[700px] animate-fade-in-up animation-delay-400'>
                    I am a Full Stack Developer with experience mentoring 300+ students and building innovative projects. I specialize in software engineering, cybersecurity, and data science, with expertise in multiple programming languages and frameworks. Currently seeking new graduate positions. Here are a few of the languages I am proficient in:
                </p>
                <div className={" grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 pt-4 gap-4 sm:gap-8 animate-fade-in-up animation-delay-600"}>

                    {codingLanguage.map(({ img, name}, index) => <div key={index} className="block relative animate-fade-in-up" style={{animationDelay: `${800 + index * 200}ms`}}>
                        <div className="flex flex-col items-center">
                            <div className="border-solid border-4 border-[#381A46] h-24 w-24 sm:h-32 sm:w-32 lg:h-36 lg:w-36 bg-[#FFFFFF] rounded-full flex items-center justify-center overflow-hidden hover:scale-110 hover:rotate-6 transition-all duration-300 hover:shadow-lg">
                                <img  alt={`${name} programming language icon`} src={img}
                                     className="h-16 w-16 sm:h-20 sm:w-20 lg:h-24 lg:w-24 object-contain"/>
                            </div>
                            <span className="text-xs sm:text-sm font-semibold text-[#381A46] mt-2 text-center">{name}</span>
                        </div>
                    </div>)}
                </div>
            </div>


        </div>

    )
}
