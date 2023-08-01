import React, {useState} from 'react'
import ProjectCard from "../utils/project-card";
import img1 from '../images/HealthyWealthy.png'
import img2 from '../images/LibraryProj.png'
import img3 from '../images/MicroBuyEStore.png'

import { Element } from 'react-scroll'
export default function Projects() {

    /*
        The following menu items represents the contents of the page that can be accessed through the menu
     */
    const projects = [
        { name: "MicroBuy", bio:"Collaborated with one other engineer to create E-Store Web Application used to buy PC Products", img:img3, techStack: "Angular,TypeScript,CSS/HTML" },
        { name: "Healthy Wealthy", bio:"collaborated with one other engineer and two UI/UX designers to create an app that enables users to keep track of their mental health ", img:img1, techStack: "Swift, Figma"  },
        { name: "Library Management Tool", bio:"Library management tool used to manage books across libraries", img:img2, techStack: "Python, React, SQL, JavaScript"},
    ]

    const projects2 = [
        { name: "MicroBuy", bio:"Collaborated with one other engineer to create E-Store Web Application used to buy PC Products", img:img3, techStack: "Angular,TypeScript,CSS/HTML" },
        { name: "Healthy Wealthy", bio:"collaborated with one other engineer and two UI/UX designers to create an app that enables users to keep track of their mental health ", img:img1, techStack: "Swift, Figma"  },

    ]
    return (
        /*

            The Nav bar is established within this div
                * fixed is used to position an element relative to the browser window
                * w - means the width
                * h - means the height
         */

            <div className={' w-full h-[100vh] px-[20%] flex bg-[#83b1ff]'} id = "project">

                <div className={" flex flex-col justify-center h-full text-[#381A46]"}>
                    <h1 className={" sm:text-4xl  text-[#FFFFFF]"} >
                        Follow My
                    </h1>
                    <h1 className={" sm:text-6xl font-bold text-[#381A46]"} >
                        Projects
                    </h1>
                    <p className='sm:text-1xl text-[#381A46] mt-5 py-4 max-w-[700px]'>
                        The following projects showcase both my skills and capabilities within a real world setting. Each project is readily available through a quick redirection to its github page. It reflects my ability to effectively adapt to new challenges, solve complex problems, and work within a team
                    </p>
                    <div className={"hidden 2xl:grid grid-cols-3 gap-11 mt-28 rounded overflow-hidden "}>
                        {projects.map((project) => <ProjectCard   name={project.name} bio={project.bio} img={project.img} techStack={project.techStack} />)}
                    </div>
                    <div className={"hidden 2xl:hidden sm:grid grid-rows-2 gap-11 mt-16 rounded  "}>
                        {projects2.map((project) => <ProjectCard   name={project.name} bio={project.bio} img={project.img} techStack={project.techStack} />)}
                    </div>

                </div>
            </div>




    )
}
