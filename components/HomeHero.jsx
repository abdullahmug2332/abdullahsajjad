"use client";
import React from "react";
import { IoHandLeftOutline } from "react-icons/io5";
import SplitText from "@/components/SplitText";
import { motion } from "framer-motion";
import Image from "next/image";
import CircularText from "./CircularText";
import { GoArrowUpRight } from "react-icons/go";
import Link from "next/link";

export default function HomeHero({ data }) {
  return (
    <div className="pad">
      <div className="container flex flex-col lg:flex-row">
        {/* Left Image Section */}
        <div className="w-full lg:w-[37%]">
          <div className="relative w-[70%] md:w-full xl:w-[80%] mx-auto">
            <Image
              className="w-full rounded-b-full"
              src={data.image.src}
              height={700}
              width={300}
              alt={data.image.alt}
            />
            <Link href={data.image.cta.link} className="absolute right-0 bottom-0">
              <CircularText
                text={data.image.cta.text}
                onHover="speedUp"
                spinDuration={20}
                className="custom-class"
              />
              <GoArrowUpRight className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] text-[25px]" />
            </Link>
          </div>
        </div>

        {/* Right Content Section */}
        <motion.div
          className="w-full lg:w-[63%] flex flex-col justify-center items-start md:p-[30px] overflow-hidden mt-[40px] lg:mt-0"
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

          <p className="lfont text-[40px] md:text-[60px] lg:text-[62px] xl:text-[70px] 2xl:text-[80px] leading-[40px] md:leading-[70px] xl:leading-[70px] 2xl:leading-[80px] lg:w-[90%] mt-[20px]">
            {data.heroText.before}{" "}
            <span className="color">{data.heroText.highlight}</span>{" "}
            {data.heroText.after}
          </p>

          <p className="para mt-[30px] lg:w-[80%] xl:w-[65%]">{data.description}</p>

          <div className="flex gap-[7px] lg:gap-[15px] mt-[20px]">
            {data.buttons.map((btn, index) => (
              <Link key={index} href={btn.link} className="btn">
                {btn.text}
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
