import React, {useState} from 'react'
import img2 from '../images/Astrowballoons.jpg'
function ProjectCard(props){
    return (
        <div className=" max-w-sm border-solid border-4 border-[#381A46]  rounded shadow-lg bg-[#FFFFFF] group-hover:opacity-25 ">
            <img className="h-60 w-96 divide-y divide-blue-200" src={props.img} alt={props.img} >
            </img>

                <div className="px-9 py-[4%]">
                    <div className="font-bold text-xl mb-2 text-[#381A46]">{props.name}</div>
                    <p className="text-[#381A46] text-base">
                        {props.bio}
                    </p>
                </div>

                <div className="px-9 pt-3 align-baseline ">
                    {props.techStack.split(',').map((project) => <span className={"inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"}> {project}</span>)}
                </div>
        </div>
    );
}
export default ProjectCard;