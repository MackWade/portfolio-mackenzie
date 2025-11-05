import React, {useState} from 'react'
import img1 from '../images/astronaut.png'
import {
    FaBars,
    FaTimes,
} from 'react-icons/fa';
import { Link } from 'react-scroll';
export default function Nav() {

    const [nav, setNav] = useState(false);

    const handleClick = () => setNav(!nav);
    const handleClick2 = () => setNav(!nav);

    /*
        The following menu items represents the contents of the page that can be accessed through the menu
     */
    const menus = [
        { name: "Home", ref:"home" },
        { name: "Projects", ref:"project" },
        { name: "About", ref: "about"},
        { name: "Contact Me", ref: "contact" },
    ]

    return (
        /*

            The Navigation bar is established within this div
                * fixed is used to position an element relative to the browser window
                * w - means the width
                * h - means the height
         */
        <div className={'fixed w-full h-[70px] sm:h-[80px] flex justify-between items-center px-4 sm:px-6 lg:px-8 bg-[#83b1ff] z-50'}>

            <div>
                {/* Creates the logo at within the menu bar*/}
                <img src={img1} alt="Mackenzie Wade logo" className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14"/>
            </div>
            <div>
                {/***Normal Screen Menu****/}
                <ul  className='hidden md:flex space-x-4 lg:space-x-6 '>
                    {menus.map(({ name,ref }, index) => <li key={index} className=' font-bold py-6 text-lg lg:text-xl xl:text-2xl text-[#FFFFFF] hover:underline underline-offset-8 decoration-[#381A46] transition-all duration-300'>
                        <Link to={ref} spy={true} smooth={true} offset={-100} duration={500} >
                            {name}
                        </Link>
                    </li>)}
                </ul>
                {/***Mobile Screen Menu****/}
                <div onClick={handleClick} className='md:hidden z-10 cursor-pointer text-white text-2xl'>
                    {!nav ? <FaBars /> : <FaTimes />}
                </div>

                <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#83b1ff] flex flex-col justify-center items-center z-40'}>
                    {menus.map(({ name,ref }, index) => <li key={index} className='font-bold text-[#FFFFFF] py-4 sm:py-6 text-2xl sm:text-3xl lg:text-4xl hover:text-[#381A46] transition-colors duration-300' >
                        <Link onClick={handleClick2}  to={ref} spy={true} smooth={true} offset={-100} duration={500} >
                            {name}
                        </Link>
                    </li>)}
                </ul>
            </div>
        </div>
    )
}
