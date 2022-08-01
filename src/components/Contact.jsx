import React from "react";

function Contact() {
    return (
        <div name='contact' className='w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white'>

            <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
                <div className='p-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Contact</p>
                    <p className='py-6'>Submit the form below to get in touch with me</p>
                </div>

                <div className='flex justify-center items-center'>
                    <form method='POST' className='flex flex-col w-full md:w-1/2' action='https://getform.io/f/f8b0a691-b943-4957-b3fc-38e1802f6614'>
                        <input className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' type='text' name='name' placeholder='Enter your name'/>
                        <input className='my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' type='text' name='email' placeholder='Enter your email'/>
                        <textarea placeholder='Enter your message' name='message' rows='10' className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"/>

                        <button className='text-white mx-auto w-fit px-6 py-3 my-8 flex items-center rounded-md bg-gradient-to-t cursor-pointer from-orange-700 to-orange-500 hover:scale-105 duration-200'>Submit</button>
                    </form>
                </div>

            </div>

        </div>
    );
}

export default Contact;