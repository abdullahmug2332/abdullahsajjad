"use client";
import React from "react";

import { GiStarShuriken } from "react-icons/gi";
import SplitText from "@/components/SplitText";
import Image from "next/image";


export default function Experience({experience}) {
    

    return (
        <section className="pad">
            <div className="container flex flex-col lg:flex-row gap-[20px] ">
                <div className="w-full lg:w-[40%]">
                    <div className="flex justify-start items-center gap-[10px] mb-[10px]">
                        <GiStarShuriken className="subheading text-[var(--primary)]" />
                        <SplitText
                            text={experience.subTitle}
                            className="text-[var(--primary)] font-bold text-[20px]"
                        />
                    </div>

                    <SplitText text={experience.title} className="font-bold heading" />

                    <p className="para mb-[30px]">
                        {experience.description}
                    </p>
                </div>
                <div className=" w-full lg:w-[59%] flex flex-col gap-[10px]">
                    {
                        experience.experiences.map((exp, index) => (
                            <div key={index} className="flex items-center justify-between bgacc px-[20px] py-[10px] rounded-[20px] duration-300 hover:translate-y-[-5px] cursor-pointer">
                                <div className="flex items-center gap-[10px]">
                                    <Image src={exp.image} alt="exp" width={200} height={200} className="w-[40px] h-[40px] rounded-full object-contain " unoptimized  />
                                    <div className="flex flex-col justify-center items-start">
                                        <p className="subheading font-[600]">{exp.name}</p>
                                        <p className="p font-[600] opacity-60">@{exp.role}</p>
                                    </div>
                                </div>
                                <p className="opacity-60 font-[500]">{exp.timePeriod.from} - {exp.timePeriod.to}</p>
                            </div>
                        ))
                    }

                </div>


            </div>
        </section>
    )
}
