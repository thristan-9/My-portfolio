import React from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

function SocialLinks(props) {

    const links = [
        { 
            id: 1, 
            child: <>Linkedin <FaLinkedin size={30} /></>, 
            href: 'https://www.linkedin.com/in/thristan-gabriel/', 
            style: "rounded-tr-md"
        },
        {
            id: 2,
            child: <>GitHub <FaGithub size={30} /></>,
            href: 'https://github.com/thristan-9',
        },
        {
            id: 3,
            child: <>Mail<HiOutlineMail size={30} /></>,
            href: 'mailto:thristanxyz@gmail.com',
            style: "rounded-br-md"
        },
    ];

    return (
        <div className='hidden xl:flex flex-col top-[35%] left-0 fixed'>
            <ul>
                {links.map(({id, child, href, style}) => (
                    <li key={id} className={`flex justify-between items-center w-40 h-14 px-4 bg-gray-500 hover:bg-emerald-600 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 ${style}`}>
                        <a rel="noreferrer" className={'flex justify-between w-full items-center text-white'} target="_blank" href={href}>
                            {child}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default SocialLinks;