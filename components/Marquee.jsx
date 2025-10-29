import Marquee from "react-fast-marquee";
import React from 'react'
import { GiStarShuriken } from "react-icons/gi";
export default function MarqueeSection() {
    const marqueeTitles = [
        "Creative Developer",
        "UI/UX Designer",
        "React & Next.js Expert",
        "MERN Stack Builder",
        "Frontend Enthusiast",
        "Clean Code Lover",
        "Modern Web Architect",
        "Passionate Coder",
        "Design Meets Logic",
        "Interactive Experiences",
        "Pixel-Perfect Designer",
        "Smooth UI Creator",
        "Code with Creativity",
        "Minimal & Modern",
        "Digital Innovator"
    ];

    return (
        <section className="text-center pad ">
            <Marquee
                speed={90}              // speed of scroll
                gradient={false}        // disable fading edges
                pauseOnHover={true}     // stops on hover
            >

                <div className="flex items-center gap-[40px] mr-[40px]  overflow-hidden">
                    {
                        marqueeTitles.map((title, i) => (
                            <div key={i} className="flex items-center gap-[40px] min-h-[50px]">
                                <p className="lfont text-[30px] md:text-[20px] lg:text-[22px] xl:text-[30px] 2xl:text-[40px] leading-[40px] md:leading-[70px] xl:leading-[70px] 2xl:leading-[80px] font-bold marquee-title">{title}</p>
                                <GiStarShuriken className="text-[40px] color"/>
                            </div>
                        ))
                    }
                </div>
            </Marquee>
        </section>
    );
}
