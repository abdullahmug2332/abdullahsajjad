import React from 'react'
import Contact from './Contact'
import { FiLinkedin } from "react-icons/fi";
import { FiGithub } from "react-icons/fi";
import { RxInstagramLogo } from "react-icons/rx";
import { MdOutlineMail } from "react-icons/md";
import { TbBrandWhatsapp } from "react-icons/tb";
export default function Footer() {
    return (
        <div>
            <Contact />
            <div className='bg-[var(--accordion)]'>
                <div className="container gap-[10px]  flex flex-col md:flex-row items-center md:justify-between py-[7px] " >
                    <p className=' font-[600] order-2 md:order-1 '>Designed by Abdullah Sajjad.</p>
                    <div className='flex items-center gap-[20px] order-1 md:order-2'>
                        <a href={"https://www.linkedin.com/in/abdullah-sajjad-8881b9289/"} target='_blank'><FiLinkedin className='text-[29px] color duration-300 hover:translate-y-[-5px]'/></a>
                        <a href={"https://github.com/abdullahmug2332"} target='_blank'><FiGithub className='text-[29px] color duration-300 hover:translate-y-[-5px]'/></a>
                        <a href={"https://www.instagram.com/abdullah__4741/?igsh=a2RwOHl6YjloeGdn&utm_source=qr#"} target='_blank'><RxInstagramLogo className='text-[29px] color duration-300 hover:translate-y-[-5px]'/></a>
                        <a href={"https://wa.me/923254412292" } target='_blank'><TbBrandWhatsapp className='text-[29px] color duration-300 hover:translate-y-[-5px]'/></a>
                        <a href={"mailto:abdullahmug2332@gmail.com"} target='_blank'><MdOutlineMail className='text-[29px] color duration-300 hover:translate-y-[-5px]'/></a>
                    </div>
                </div>
            </div>
        </div>
    )
}
