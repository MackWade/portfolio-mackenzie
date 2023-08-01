import React, { useRef } from 'react'
import img2 from '../images/4200_10_02.jpg'

import emailjs from '@emailjs/browser';
export default function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
                "service_048rsam",
                "template_g7c6gzp",
                form.current,
                "aU0IjBM3Ci5E-09pH"
            )
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };
    return (


        <div className={' w-full h-[100vh] flex flex-row justify-between items-center px-[20%] bg-[#83b1ff]' } id = "about"  >

            <div className={" flex flex-col   justify-center h-full text-[#381A46]"}>
                <h1 className={" text-6xl mb-10 font-bold text-[#381A46]"} >
                    Contact Me
                </h1>
                <form ref={form} onSubmit={sendEmail} className=" border-solid border-4 border-[#381A46] bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4">
                        <label className="block text-[#381A46]text-sm font-bold mb-2" htmlFor="username">
                            Name
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="username" type="text" placeholder="Username">
                        </input>
                    </div>
                    <div className="mb-6">
                        <label  className="block text-[#381A46]text-sm font-bold mb-2" htmlFor="password">
                            Email
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-[#381A46] mb-3 leading-tight focus:outline-none focus:shadow-outline"
                            id="password" type="email" placeholder="Email"
                            >
                        </input>

                    </div>

                    <div className="mb-6">
                        <label className="block text-[#381A46] text-sm font-bold mb-2" htmlFor="password">
                            Message
                        </label>
                        <textarea
                            className=" shadow appearance-none border rounded w-full py-2 px-3 text-[#381A46] mb-3 leading-tight focus:outline-none focus:shadow-outline"
                            id="exampleFormControlTextarea1"
                            rows="4"
                            placeholder="Your message"></textarea>

                    </div>
                    <div className="flex items-center justify-between">
                        <button type="submit" value="Send"
                            className="bg-[#381A46] hover:bg-[#83b1ff] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            >
                            Submit
                        </button>
                    </div>
                </form>

            </div>

            <div>
                {/* Creates the image*/}
                <img className={'hidden 2xl:block h-[50vh] '} src={img2} alt={""} />
            </div>
        </div>)
}