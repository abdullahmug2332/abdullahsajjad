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
                <div className="container  flex justify-between py-[7px]" >
                    <p className='para font-[600]'>Designed by Abdullah Sajjad.</p>
                    <div className='flex items-center gap-[20px]'>
                        <a href={"https://www.linkedin.com/in/abdullah-sajjad-8881b9289/"} target='_blank'><FiLinkedin className='text-[29px] color'/></a>
                        <a href={"https://github.com/abdullahmug2332"} target='_blank'><FiGithub className='text-[29px] color'/></a>
                        <a href={"https://www.instagram.com/abdullah__4741/?igsh=a2RwOHl6YjloeGdn&utm_source=qr#"} target='_blank'><RxInstagramLogo className='text-[29px] color'/></a>
                        <a href={"https://wa.me/923254412292" } target='_blank'><TbBrandWhatsapp className='text-[29px] color'/></a>
                        <a href={"mailto:abdullahmug2332@gmail.com"} target='_blank'><MdOutlineMail className='text-[29px] color'/></a>
                    </div>
                </div>
            </div>
        </div>
    )
}
