import React from 'react'
function ProjectCard(props){
    return (
        <div className="w-full max-w-sm border-solid border-4 border-[#381A46] rounded shadow-lg bg-[#FFFFFF] hover:shadow-xl transition-all duration-300 group cursor-pointer">
            <div className="overflow-hidden rounded-t">
                <img className="h-48 sm:h-56 lg:h-60 w-full object-cover group-hover:scale-110 transition-transform duration-500" src={props.img} alt={`${props.name} project screenshot`} >
                </img>
            </div>

                <div className="px-4 sm:px-6 lg:px-9 py-3 sm:py-4 group-hover:bg-gray-50 transition-colors duration-300">
                    <div className="font-bold text-lg sm:text-xl mb-2 text-[#381A46] group-hover:text-[#83b1ff] transition-colors duration-300">{props.name}</div>
                    <p className="text-[#381A46] text-sm sm:text-base">
                        {props.bio}
                    </p>
                </div>

                <div className="px-4 sm:px-6 lg:px-9 pt-2 pb-4 align-baseline group-hover:bg-gray-50 transition-colors duration-300">
                    {props.techStack.split(',').map((tech, index) => <span key={index} className={"inline-block bg-gray-200 hover:bg-[#83b1ff] hover:text-white rounded-full px-2 sm:px-3 py-1 text-xs sm:text-sm font-semibold text-gray-700 mr-1 sm:mr-2 mb-2 transition-all duration-300 hover:scale-105"}> {tech}</span>)}
                </div>
        </div>
    );
}
export default ProjectCard;