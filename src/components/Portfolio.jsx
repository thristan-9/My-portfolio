import React, { useState } from "react";
import mechanicSoftware from '../assets/mechanic_software.png';
import mechanicSoftware2 from '../assets/mechanic_software2.png';
import mechanicSoftware3 from '../assets/mechanic_software3.png';
import animated_navbar from '../assets/animated_navbar.png';
import animated_navbar2 from '../assets/animated_navbar_2.png';
import digital_clock from '../assets/digital_clock.png';

import { MdOutlineKeyboardArrowRight, MdOutlineKeyboardArrowLeft } from "react-icons/md";


function Portfolio() {

    const [portfolio, setPortfolio] = useState(
        [
            {
                id: 1,
                imageIndex: 0,
                images: [
                    { src: mechanicSoftware },
                    { src: mechanicSoftware2 },
                    { src: mechanicSoftware3 },
                ],
                codeHref: 'https://github.com/thristan-9/Mechanic-software',
                demoHref: 'https://thristan-9.github.io/Mechanic-software/',
            },
            {
                id: 2,
                imageIndex: 0,
                images: [
                    { src: animated_navbar },
                    { src: animated_navbar2 },
                ],
                codeHref: 'https://github.com/thristan-9/Animated-navbar',
                demoHref: 'https://thristan-9.github.io/Animated-navbar/',
            },
            {
                id: 3,
                imageIndex: 0,
                images: [
                    { src: digital_clock },
                ],
                codeHref: 'https://github.com/thristan-9/Digital-clock',
                demoHref: 'https://thristan-9.github.io/Digitalclock.github.io/',
            },
        ]
    );

    function changeImage(id, action = 'next') {
        let portfolioList = [...portfolio];
        let value = action == 'next' ? + 1 : - 1;

        console.log("value", value);
        portfolioList.map((item) => {
            if (item.id == id) {
                if (item.images[item.imageIndex + value]) {
                    item.imageIndex = item.imageIndex + value;
                }
            }
        })
        setPortfolio(portfolioList);
    }


    return (
        <div name='portfolio' className='bg-gradient-to-b from-black via-black to-gray-800 text-white w-full md:h-screen'>
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                        Portfolio
                    </p>
                    {/* <p className="py-6">Check out some of my work right here</p> */}
                    <p className="py-6">Building...</p>
                </div>

                {/* <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
                    {portfolio.map(({ id, imageIndex, images, codeHref, demoHref }) => {
                        return (
                            <div key={id} className="flex items-center flex-col justify-between shadow-md shadow-gray-600 rounded-lg">
                                <img src={images[imageIndex].src} alt='' className='rounded-md h-1/2' />
                                {images?.length > 1 &&
                                    <div className="flex items-center justify-around w-full">
                                        <MdOutlineKeyboardArrowLeft
                                            onClick={() => changeImage(id, 'back')}
                                            className={images[imageIndex - 1] ? 'cursor-pointer text-white' : 'text-gray-600'}
                                            size={40}
                                        />
                                        <MdOutlineKeyboardArrowRight
                                            onClick={() => changeImage(id, 'next')}
                                            className={images[imageIndex + 1] ? 'cursor-pointer text-white' : 'text-gray-600'}
                                            size={40}
                                        />
                                    </div>
                                }
                                <div className='flex items-center justify-center mb-2'>
                                    <a rel="noreferrer" target="_blank" href={demoHref} className='text-white w-1/2 px-6 py-3 m-4 duraration-200 hover:scale-105'>Demo</a>
                                    <a rel="noreferrer" target="_blank" href={codeHref} className='text-white w-1/2 px-6 py-3 m-4 duraration-200 hover:scale-105'>Code</a>
                                </div>

                            </div>
                        )
                    })}
                </div> */}
            </div>
        </div>
    );
}

export default Portfolio;