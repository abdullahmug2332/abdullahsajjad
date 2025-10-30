"use client"
import Link from 'next/link'
import React from 'react'
import SplitText from "@/components/SplitText";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div className='container  pad mar !mb-0 flex flex-col justify-center items-center bg-[var(--accordion)] rounded-t-[50px]'>
      <button className='flex items-center gap-[10px]  px-[20px] py-[7px] rounded-full font-[600]'><span className='color text-[35px]'>•</span><SplitText className='para font-[600]' text="Available for Work" /></button>

      <p className='font-[700] lfont font text-[40px] md:text-[60px] lg:text-[62px] xl:text-[70px] 2xl:text-[80px] leading-[40px] md:leading-[70px] xl:leading-[70px] 2xl:leading-[80px] w-[80%] xl:w-[50%] text-center mt-[20px]'>Let's create your next big idea</p>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="flex justify-end"
      >
        <Link href={"/contact"} className='btn mt-[40px] font-[600]'>
          Contact Me
        </Link>
      </motion.div>
    </div>
  )
}
