"use client";
import React from "react";
import { IoHandLeftOutline } from "react-icons/io5";
import SplitText from "@/components/SplitText";
import { motion } from "framer-motion";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";

export default function AboutHero({ data }) {
  return (
    <div className="pad">
      <div className="container flex flex-col lg:flex-row ">
        <motion.div
          className="w-full flex flex-col justify-center items-start md:p-[30px] overflow-hidden mt-[40px] lg:mt-0"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { clipPath: "inset(0 100% 0 0)" },
            visible: { clipPath: "inset(0 0% 0 0)" },
          }}
          transition={{ duration: 1.1, ease: "easeInOut" }}
        >
          <div className="flex items-center gap-[5px] lg:ml-[10px]">
            <IoHandLeftOutline className="color text-[20px] wave-hand" />
            <SplitText className="para font-[600]" text={data.greeting} />
          </div>

          <p className="lfont text-[40px] md:text-[60px] lg:text-[62px] xl:text-[70px] 2xl:text-[80px] leading-[40px] md:leading-[70px] xl:leading-[70px] 2xl:leading-[80px] w-[90%] lg:w-[75%] 2xl:w-[64%] mt-[20px]">
            {data.heroText.before}{" "}
            <span className="color">{data.heroText.highlight}</span>{" "}
            {data.heroText.after}
          </p>

          <p className="para mt-[30px] ml-auto lg:w-[80%] xl:w-[65%]">
            {data.description}
          </p>

          <div className="flex gap-[7px] justify-end md:ml-auto lg:gap-[15px] mt-[20px]">
            {data.buttons.map((btn, index) => (
              <Link key={index} href={btn.link} className="btn">
                {btn.text}
              </Link>
            ))}
          </div>

          <div className="flex flex-wrap gap-x-[25px] gap-y-[10px] mt-[30px] lg:mt-[40px]">
            {data.socials.map((social, index) => (
              <a
                key={index}
                href={social.link}
                target="_blank"
                className="flex items-center gap-[5px] lg:gap-[10px] hcolor duration-300 hover:translate-y-[-5px]"
              >
                <p className="subheading">{social.name}</p>
                <GoArrowUpRight className="text-[20px] lg:text-[25px]" />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
