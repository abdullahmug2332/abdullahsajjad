"use client"
import React from 'react'
import { IoHandLeftOutline } from "react-icons/io5";
import SplitText from "@/components/SplitText";
import { motion } from "framer-motion";
import Image from 'next/image';
import CircularText from './CircularText';
import { GoArrowUpRight } from "react-icons/go";
import Link from 'next/link';


export default function HomeHero() {
    return (
        <div className='pad'>
            <div className="container flex flex-col lg:flex-row ">
                <div className=' w-full lg:w-[37%]'>
                    <div className='relative w-full xl:w-[80%] mx-auto'>
                        <Image className='w-full rounded-b-full' src={"/abdullah.JPG"} height={700} width={300} alt='abdullah' />
                        <Link href={"/contact"} className=' absolute right-0 bottom-0'>
                            <CircularText
                                text="LETS TALK * LETS TALK * LETS TALK * LETS TALK * "
                                onHover="speedUp"
                                spinDuration={20}
                                className="custom-class"
                            />
                            <GoArrowUpRight className='absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] text-[25px]'/>
                        </Link>
                    </div>
                </div>
                <motion.div
                    className='w-full lg:w-[63%] flex flex-col justify-center items-start  md:p-[30px] overflow-hidden mt-[40px] lg:mt-0'
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
                    <p className='lfont text-[40px] md:text-[60px] lg:text-[62px] xl:text-[70px] 2xl:text-[80px] leading-[40px] md:leading-[70px] xl:leading-[70px] 2xl:leading-[80px] lg:w-[90%] mt-[20px]'>A <span className='color'>creative developer</span>  & UI/UX designer</p>
                    <p className='para mt-[30px]  lg:w-[80%] xl:w-[65%]'>I design and develop impactful, user-friendly websites using React, Next.js, and the MERN stack — combining creativity with clean code.</p>
                    <div className='flex gap-[7px] lg:gap-[15px] mt-[20px]'>
                        <Link href={"/AbdullahSajjadResume.pdf"} className='btn'>Resume</Link>
                        <Link href={"/about"} className='btn'>Know me better</Link>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}
