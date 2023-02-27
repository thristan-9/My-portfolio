import React from "react";
import qrCodeImg from '../assets/qrCode.png';
import whatsImg from '../assets/whatsImg.png';

function Contact() {
    return (
        <div name='contact' className='w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white'>

            <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
                <div className='p-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Contact</p>
                    <p className='py-6'>Click on the button or scan the qr code to talk with me on WhatsApp</p>
                </div>

                <div className='pl-8'>
                    <p className='pb-1'>
                        Email: thristanxyz@gmail.com
                    </p>
                    <div className="flex">
                        Number: +55 (47)99237-1998
                        <a rel="noreferrer" href="https://wa.link/16qptx" target="_blank">
                            <img className="h-6 ml-2" src={whatsImg} alt="whatsImg"/>
                        </a> 
                    </div>
                    <img src={qrCodeImg} alt="qrCode" className='rounded-2xl mt-8' />
                </div>

            </div>

        </div>
    );
}

export default Contact;