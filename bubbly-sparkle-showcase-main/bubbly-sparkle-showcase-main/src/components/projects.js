import React from 'react'
import ProjectCard from "../utils/project-card";
import img1 from '../images/HealthyWealthy.png'
import img2 from '../images/LibraryProj.png'
import img3 from '../images/MicroBuyEStore.png'
export default function Projects() {

    /*
        The following menu items represents the contents of the page that can be accessed through the menu
     */
    const projects = [
        { name: "MicroBuy", bio:"Collaborated with one other engineer to create E-Store Web Application used to buy PC Products", img:img3, techStack: "Angular, TypeScript, CSS/HTML" },
        { name: "Healthy Wealthy", bio:"Collaborated with one other engineer and two UI/UX designers to create an app that enables users to keep track of their mental health", img:img1, techStack: "Swift, Figma"  },
        { name: "Library Management Tool", bio:"Library management tool used to manage books across libraries", img:img2, techStack: "Python, React, SQL, JavaScript"},
    ]

    const projects2 = [
        { name: "MicroBuy", bio:"Collaborated with one other engineer to create E-Store Web Application used to buy PC Products", img:img3, techStack: "Angular, TypeScript, CSS/HTML" },
        { name: "Healthy Wealthy", bio:"Collaborated with one other engineer and two UI/UX designers to create an app that enables users to keep track of their mental health", img:img1, techStack: "Swift, Figma"  },

    ]
    return (
        /*

            The Projects section is established within this div
                * w - means the width
                * h - means the height
         */

            <div className={' w-full min-h-[100vh] px-4 sm:px-8 lg:px-[20%] flex bg-[#83b1ff] py-20'} id = "project">

                <div className={" flex flex-col justify-center h-full text-[#381A46] w-full"}>
                    <h1 className={" text-2xl sm:text-3xl lg:text-4xl text-[#FFFFFF] animate-fade-in-up animation-delay-200"} >
                        Follow My
                    </h1>
                    <h1 className={" text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#381A46] animate-fade-in-up animation-delay-400"} >
                        Projects
                    </h1>
                    <p className='text-sm sm:text-base lg:text-lg text-[#381A46] mt-5 py-4 max-w-[700px] animate-fade-in-up animation-delay-600'>
                        The following projects showcase both my skills and capabilities within a real-world setting. Each project is readily available through a quick redirection to its GitHub page. It reflects my ability to effectively adapt to new challenges, solve complex problems, and work within a team.
                    </p>
                    <div className={"grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 lg:gap-11 mt-8 sm:mt-16 lg:mt-28 rounded overflow-hidden animate-fade-in-up animation-delay-800"}>
                        {projects.map((project, index) => <div key={index} className="animate-fade-in-up" style={{animationDelay: `${1000 + index * 200}ms`}}>
                            <ProjectCard name={project.name} bio={project.bio} img={project.img} techStack={project.techStack} />
                        </div>)}
                    </div>

                </div>
            </div>




    )
}
