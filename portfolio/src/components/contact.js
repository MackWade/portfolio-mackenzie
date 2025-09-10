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


        <div className={' w-full min-h-[100vh] flex flex-col lg:flex-row justify-between items-center px-4 sm:px-8 lg:px-[20%] py-20 bg-[#83b1ff]' } id = "contact"  >

            <div className={" flex flex-col justify-center h-full text-[#381A46] w-full lg:w-auto order-1 lg:order-1 animate-fade-in-left"}>
                <h1 className={" text-3xl sm:text-4xl lg:text-5xl xl:text-6xl mb-6 sm:mb-8 lg:mb-10 font-bold text-[#381A46] animate-fade-in-up animation-delay-200"} >
                    Contact Me
                </h1>
                <form ref={form} onSubmit={sendEmail} className=" border-solid border-4 border-[#381A46] bg-white shadow-md rounded px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6 pb-6 sm:pb-8 mb-4 w-full max-w-lg animate-fade-in-up animation-delay-400 hover:shadow-xl transition-shadow duration-300">
                    <div className="mb-4">
                        <label className="block text-[#381A46] text-sm font-bold mb-2" htmlFor="username">
                            Name
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-[#83b1ff] focus:ring-2 focus:ring-[#83b1ff] transition-all duration-300"
                            id="username" type="text" placeholder="Your name" name="user_name" required>
                        </input>
                    </div>
                    <div className="mb-6">
                        <label  className="block text-[#381A46] text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-[#381A46] mb-3 leading-tight focus:outline-none focus:shadow-outline focus:border-[#83b1ff] focus:ring-2 focus:ring-[#83b1ff] transition-all duration-300"
                            id="email" type="email" placeholder="Your email" name="user_email" required
                            >
                        </input>

                    </div>

                    <div className="mb-6">
                        <label className="block text-[#381A46] text-sm font-bold mb-2" htmlFor="message">
                            Message
                        </label>
                        <textarea
                            className=" shadow appearance-none border rounded w-full py-2 px-3 text-[#381A46] mb-3 leading-tight focus:outline-none focus:shadow-outline focus:border-[#83b1ff] focus:ring-2 focus:ring-[#83b1ff] transition-all duration-300"
                            id="message"
                            name="message"
                            rows="4"
                            placeholder="Your message" required></textarea>

                    </div>
                    <div className="flex items-center justify-between">
                        <button type="submit" value="Send"
                            className="bg-[#381A46] hover:bg-[#83b1ff] hover:scale-105 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-all duration-300 hover:shadow-lg"
                            >
                            Submit
                        </button>
                    </div>
                </form>

            </div>

            <div className='order-2 lg:order-2 mt-8 lg:mt-0 animate-fade-in-right animation-delay-600'>
                {/* Creates the image*/}
                <img className={'hidden lg:block h-[40vh] xl:h-[50vh] w-auto object-contain hover:scale-105 transition-transform duration-500' } src={img2} alt="Contact Mackenzie Wade" />
            </div>
        </div>)
}