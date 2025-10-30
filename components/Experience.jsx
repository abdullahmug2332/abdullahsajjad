"use client";
import React from "react";

import { GiStarShuriken } from "react-icons/gi";
import SplitText from "@/components/SplitText";


export default function Experience() {
    const experiences =[
        {
            "name":"IBSTEC",
            "image":"ibstec"
        }
    ]
    
    return (
        <section className="pad">
            <div className="container flex flex-col lg:flex-row gap-[20px] ">
                <div className="border w-[40%]">
                    <div className="flex justify-start items-center gap-[10px] mb-[10px]">
                        <GiStarShuriken className="subheading text-[var(--primary)]" />
                        <SplitText
                            text="WORK HISTORY"
                            className="text-[var(--primary)] font-bold text-[20px]"
                        />
                    </div>

                    <SplitText text="EXPERIENCE" className="font-bold heading" />

                    <p className="para mb-[30px]">
                        A look into my professional journey, where I’ve honed my technical expertise and creative problem-solving — delivering impactful web solutions that combine design precision, clean code, and real-world functionality.
                    </p>
                </div>
                <div className="border w-[59%] flex flex-col gap-[10px]">
                    <div></div>
                </div>


            </div>
        </section>
    )
}
