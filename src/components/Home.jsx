import React from 'react';
import img from '../assets/thristan_img.jpeg';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from 'react-scroll';

function Home(props) {

    return (
        <div name="home" className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>

            <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
                <div className='flex flex-col justify-center h-full'>
                    <h2 className='text-4xl sm:text-7xl font-bold text-white'>I’m a Full Stack Developer</h2>
                    <p className='text-gray-500 py-4 max-w-md'>
                        I have 4 years of experience building and designing web/mobile applications
                        using technologies like React, React Native, Tailwind and Node.js.
                    </p>

                    <div>
                        <Link to='experience' smooth duration={500} className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r cursor-pointer from-emerald-700 via-emerald-600 to-emerald-500'>
                            Experience
                            <span className='group-hover:rotate-90 duration-300'>
                                <MdOutlineKeyboardArrowRight className='ml-1' size={25} />
                            </span>
                        </Link>
                    </div>
                </div>

                <div>
                    <img src={img} alt="thristan" className='rounded-2xl mx-auto w-2/3 md:w-full' />
                </div>

            </div>
        </div>
    )
}

export default Home;