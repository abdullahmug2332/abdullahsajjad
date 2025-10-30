"use client"
import React from 'react'
import { IoHandLeftOutline } from "react-icons/io5";
import SplitText from "@/components/SplitText";
import { motion } from "framer-motion";
import Link from 'next/link';
import { GoArrowUpRight } from 'react-icons/go';


export default function AboutHero() {
    return (
        <div className='pad'>
            <div className="container flex flex-col lg:flex-row ">
                <motion.div
                    className='w-full  flex flex-col justify-center items-start  md:p-[30px] overflow-hidden mt-[40px] lg:mt-0 '
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: { clipPath: "inset(0 100% 0 0)" },
                        visible: { clipPath: "inset(0 0% 0 0)" },
                    }}
                    transition={{ duration: 1.1, ease: "easeInOut" }}
                >
                    <div className='flex items-center gap-[5px] lg:ml-[10px]'>
                        <IoHandLeftOutline className='color text-[20px] wave-hand' />
                        <SplitText className='para font-[600]' text="Hey! It's me Abdullah." />
                    </div>
                    <p className='lfont text-[40px] md:text-[60px] lg:text-[62px] xl:text-[70px] 2xl:text-[80px] leading-[40px] md:leading-[70px] xl:leading-[70px] 2xl:leading-[80px] w-[90%] lg:w-[75%] 2xl:w-[64%] mt-[20px] '>Develope <span className='color'>purpose driven experiences</span> that inspire & engage</p>
                        <p className='para mt-[30px]  ml-auto lg:w-[80%] xl:w-[65%] '>I design and develop modern, responsive, and high-performing websites using React, Next.js, and the MERN stack. My focus is on delivering clean, efficient code combined with visually appealing design to create seamless digital experiences that engage users and bring ideas to life.</p>
                    <div className='flex gap-[7px] justify-end md:ml-auto lg:gap-[15px] mt-[20px]'>
                        <Link href={"/AbdullahSajjadResume.pdf"} className='btn'>Resume</Link>
                        <Link href={"/projects"} className='btn'>View all Projects</Link>
                    </div>
                    <div className='flex flex-wrap gap-x-[25px] gap-y-[10px] mt-[30px] lg:mt-[40px]'>
                        <a href={"https://www.linkedin.com/in/abdullah-sajjad-8881b9289/"} target='_blank' className='flex items-center gap-[5px] lg:gap-[10px] hcolor duration-300 hover:translate-y-[-5px]'>
                            <p className='subheading'>LinkedIn</p>
                            <GoArrowUpRight className=' text-[20px] lg:text-[25px]' />
                        </a>
                        <a href={"https://github.com/abdullahmug2332"} target='_blank' className='flex items-center gap-[5px] lg:gap-[10px] hcolor duration-300 hover:translate-y-[-5px]'>
                            <p className='subheading'>Github</p>
                            <GoArrowUpRight className=' text-[20px] lg:text-[25px]' />
                        </a>
                        <a href={"https://www.instagram.com/abdullah__4741/?igsh=a2RwOHl6YjloeGdn&utm_source=qr#"} target='_blank' className='flex items-center gap-[5px] lg:gap-[10px] hcolor duration-300 hover:translate-y-[-5px]'>
                            <p className='subheading'>Instagram</p>
                            <GoArrowUpRight className=' text-[20px] lg:ext-[25px]' />
                        </a>
                        <a href={"https://wa.me/923254412292"} target='_blank' className='flex items-center gap-[5px] lg:gap-[10px] hcolor duration-300 hover:translate-y-[-5px]'>
                            <p className='subheading'>Whatsapp</p>
                            <GoArrowUpRight className=' text-[20px] lg:text-[25px]' />
                        </a>
                        <a href={"mailto:abdullahmug2332@gmail.com"} target='_blank' className='flex items-center gap-[5px] lg:gap-[10px] hcolor duration-300 hover:translate-y-[-5px]'>
                            <p className='subheading'>Gmail</p>
                            <GoArrowUpRight className=' text-[20px] lg:text-[25px] ' />
                        </a>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}
