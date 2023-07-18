import React, {useState} from 'react'
import ProjectCard from "../utils/project-card";

export default function Projects() {

    /*
        The following menu items represents the contents of the page that can be accessed through the menu
     */
    const projects = [
        { name: "MicroBuy", bio:"E-Store Web Application used to buy PC Products", img:"", techStack: "Angular,TypeScript,CSS/HTML" },
        { name: "Healthy Wealthy", bio:"collaborated with one other engineer and two UI/UX designers to create an app that enables users to keep track of their mental health ", img:"", techStack: "Swift and Figma"  },
        { name: "Library Management Tool", bio:"Library management tool used to manage books within a library", img:"", techStack: "Python, React, SQL, JavaScript"},
    ]

    return (
        /*

            The Nav bar is established within this div
                * fixed is used to position an element relative to the browser window
                * w - means the width
                * h - means the height
         */

            <div className={' w-full h-[100vh] flex flex-col items-center px-2 bg-[#83b1ff]'}>
                <h1 className={"pt-7 sm:text-6xl font-bold text-[#381A46]"} >
                    Follow My Projects
                </h1>
                <div className={"flex flex-row py-60 rounded overflow-hidden "}>
                    {projects.map((project) => <ProjectCard name={project.name} bio={project.bio} img={project.img} />)}
                </div>

            </div>




    )
}
