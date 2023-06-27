import React from 'react'

export default function Nav() {

    /*
        The following menu items represents the contents of the page that can be accessed through the menu
     */
    const menus = [
        { name: "Home" },
        { name: "Projects" },
        { name: "About" },
        { name: "Contact Me" },
    ]

    return (
        /*
            The Nav bar is established within this div
                * fixed is used to position an element relative to the browser window
                * w - means the width
                * h - means the height
         */
        <div className={'fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#83b1ff]'}>
            <div></div>
        </div>
    )
}
