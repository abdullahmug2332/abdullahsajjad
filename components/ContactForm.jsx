import React from 'react'
import { GiStarShuriken } from "react-icons/gi";
import SplitText from "@/components/SplitText";
import Image from 'next/image';
import { FiLinkedin } from "react-icons/fi";
import { FiGithub } from "react-icons/fi";
import { RxInstagramLogo } from "react-icons/rx";
import { MdOutlineMail } from "react-icons/md";
import { TbBrandWhatsapp } from "react-icons/tb";

export default function ContactForm({ data }) {
    return (
        <section className="pad">
            <div className="container flex flex-col  gap-[20px] ">
                <div className="w-full ">
                    <div className="flex justify-start items-center gap-[10px] mb-[10px]">
                        <GiStarShuriken className="subheading text-[var(--primary)]" />
                        <SplitText
                            text={data.subTitle}
                            className="text-[var(--primary)] font-bold text-[20px]"
                        />
                    </div>

                    <SplitText text={data.title} className="font-bold heading" />

                    <p className="para mb-[30px] lg:w-[80%]">
                        {data.description}
                    </p>
                </div>
                <div className="flex flex-col lg:flex-row gap-[30px]">
                    <div className='w-full lg:w-1/2  bgacc rounded-[20px] py-[45px] px-[15px] lg:px-[20px] flex flex-col gap-[20px] order-2 lg:order-1'>
                        <input type="text" className='w-full border px-[7px] py-[10px] focus:outline-0 rounded-[5px] placeholder-[var(--forground)]' placeholder='Full Name' />
                        <input type="email" className='w-full border px-[7px] py-[10px] focus:outline-0 rounded-[5px] placeholder-[var(--forground)]' placeholder='Email' />
                        <textarea type="text" className='w-full border px-[7px] py-[10px] focus:outline-0 rounded-[5px] placeholder-[var(--forground)] min-h-[200px]' placeholder='Enter Your Message...' />
                    </div>
                    <div className='w-full lg:w-1/2   lg:px-[15px]  order-1 lg:order-2 '>
                        <button className='flex items-center gap-[10px]  px-[20px]  rounded-full font-[600] bgacc my-[10px]'><span className='color text-[35px]'>•</span><SplitText className='para font-[600]' text="Available for Work" /></button>
                        <Image src={data.image} className='w-[100px] h-[100px] object-cover rounded-full mt-[20px] shadow-xl' alt='abdullah' width={400} height={400} />
                        <p className='para font-[500] mt-[20px]'>{data.message}</p>
                        <div className='flex items-center gap-[20px]  mt-[30px]'>
                            <a href={"https://www.linkedin.com/in/abdullah-sajjad-8881b9289/"} target='_blank'><FiLinkedin className='text-[29px] color duration-300 hover:translate-y-[-5px]' /></a>
                            <a href={"https://github.com/abdullahmug2332"} target='_blank'><FiGithub className='text-[29px] color duration-300 hover:translate-y-[-5px]' /></a>
                            <a href={"https://www.instagram.com/abdullah__4741/?igsh=a2RwOHl6YjloeGdn&utm_source=qr#"} target='_blank'><RxInstagramLogo className='text-[29px] color duration-300 hover:translate-y-[-5px]' /></a>
                            <a href={"https://wa.me/923254412292"} target='_blank'><TbBrandWhatsapp className='text-[29px] color duration-300 hover:translate-y-[-5px]' /></a>
                            <a href={"mailto:abdullahmug2332@gmail.com"} target='_blank'><MdOutlineMail className='text-[29px] color duration-300 hover:translate-y-[-5px]' /></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
