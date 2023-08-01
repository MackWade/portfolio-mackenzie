import React, {useState} from 'react'
import img2 from '../images/3800_4_06.jpg'
import img3 from "../images/c-.png"
import img4 from "../images/js.png"
import img5 from "../images/python.png"
import img6 from "../images/swift.png"
import ProjectCard from "../utils/project-card";
import {Link} from "react-scroll";

export default function About() {

    const codingLanguage = [
        { img: img3},
        { img: img4},
        { img: img5},
        { img: img6 },
    ]

    return (

        <div className={' w-full h-[100vh] flex flex-row justify-between items-center px-[15%] bg-[#83b1ff]' } id = "about"  >
            <div>
                {/* Creates the image*/}
                <img className={' hidden 2xl:block h-[50vh] '} src={img2} alt={""} />
            </div>
            <div className={" flex flex-col  mr-32 justify-center h-full text-[#381A46]"}>
                <h1 className={" text-6xl font-bold text-[#FFFFFF]"} >
                    About!
                </h1>
                <p className='sm:text-1xl text-[#381A46] mt-5 py-4 max-w-[700px]'>
                    I am a 5th year software engineering major who specializes in both back-end and front-end software development. My current graduation date is August 2024, so in addition to a Fall co-op I will be seeking both summer internship and New grad positions within the foreseeable future. I have experience building web and mobile applications for both personal projects and in industry. Here are a few of the languages I am proficient in:
                </p>
                <div className={" hidden md:grid pt-4  grid-cols-4 gap-8"}>

                    {codingLanguage.map(({ img}) => <a href="#" className="block relative">
                        <img  alt="name" src={img}
                             className=" border-solid border-4 border-[#381A46]  h-36 w-36 bg-[#FFFFFF] rounded-full object-none "/>
                    </a>)}
                </div>
            </div>


        </div>

    )
}
