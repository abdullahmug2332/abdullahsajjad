import React from 'react'
import { GiStarShuriken } from "react-icons/gi";
import SplitText from "@/components/SplitText"; 
export default function HomeProjects() {
  return (
    <section className="pad">
            <div className="container ">
                <div className="flex justify-start items-center gap-[10px] mb-[10px]">
                    <GiStarShuriken className="subheading text-[var(--primary)]" />
                    <SplitText
                        text="MY WORK"
                        className="text-[var(--primary)] font-bold text-[20px] "
                    />
                </div>
                    <SplitText
                        text="Selected Projects"
                        className="font-bold heading "
                    />
                    <p className='para'>Here's a curated selection showcasing my expertise and the achieved results.</p>
            </div>
        </section>
  )
}
