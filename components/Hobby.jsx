"use client";
import React from "react";

import { GiStarShuriken } from "react-icons/gi";
import SplitText from "@/components/SplitText";
import Image from "next/image";


export default function Hobby({ data }) {


    return (
        <section className="pad">
            <div className="container flex flex-col lg:flex-row gap-[20px] ">
                <div className="w-full lg:w-[50%]">
                    <div className="flex justify-start items-center gap-[10px] mb-[10px]">
                        <GiStarShuriken className="subheading text-[var(--primary)]" />
                        <SplitText
                            text={data.subTitle}
                            className="text-[var(--primary)] font-bold text-[20px]"
                        />
                    </div>

                    <SplitText text={data.title} className="font-bold heading" />

                    <p className="para mb-[30px]">
                        {data.description}
                    </p>
                </div>
                <div className="w-full lg:w-[50%]">
                    <Image
                        src={data.image}
                        alt="hobby"
                        className="w-full rounded-[30px]"
                        width={400}
                        height={400}
                    />
                </div>


            </div>
        </section>
    )
}
