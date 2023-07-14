import React, {useState, useRef} from 'react'
import img1 from '../images/astronaut.png'
import {
    FaBars,
    FaTimes,
    FaGithub,
    FaLinkedin,
    FaFacebook,
    FaLinkedinIn,
} from 'react-icons/fa';
import { Link } from 'react-scroll';
import Scroll from 'react-scroll'
const ScrollLink = Scroll.ScrollLink
export default function Nav() {

    const [nav, setNav] = useState(false);
    const [click,setClick] = useState(false)

    const handleClick = () => setNav(!nav);


    /*
        The following menu items represents the contents of the page that can be accessed through the menu
     */
    const menus = [
        { name: "Home", ref:"home" },
        { name: "Projects", ref:"" },
        { name: "About", ref: ""},
        { name: "Contact Me", ref: "" },
    ]

    return (
        /*

            The Nav bar is established within this div
                * fixed is used to position an element relative to the browser window
                * w - means the width
                * h - means the height
         */
        <div className={'fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#83b1ff]'}>

            <div>
                {/* Creates the logo at within the menu bar*/}
                <img src={img1} alt={""} style={{width:'50px'}}/>
            </div>
            <div>
                {/***Normal Screen Menu****/}
                <ul  className='hidden md:flex space-x-6 '>
                    {menus.map(({ name,ref }) => <li className=' font-bold py-6 text-2xl text-[#FFFFFF] hover:underline underline-offset-8 decoration-[#381A46]'>
                        <Link to={ref} spy={true} smooth={true} offset={-100} durration={500} >
                            {name}
                        </Link>
                    </li>)}
                </ul>
                {/***Mobile Screen Menu****/}
                <div onClick={handleClick} className='md:hidden z-10'>
                    {!nav ? <FaBars /> : <FaTimes />}
                </div>

                <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#444444] flex flex-col justify-center items-center'}>
                    {menus.map(({ name,ref }) => <li className='py-6 text-4xl' >
                        <Link to={ref} spy={true} smooth={true} offset={-100} durration={500} >
                            {name}
                        </Link>
                    </li>)}
                </ul>
            </div>
        </div>
    )
}
