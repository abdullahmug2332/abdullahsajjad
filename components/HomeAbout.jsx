import React from 'react';
import { GiStarShuriken } from "react-icons/gi";
import SplitText from "@/components/SplitText";
import ScrollReveal from './ScrollReveal';

export default function HomeAbout() {
    return (
        <section className="pad">
            <div className="container text-center">
                <div className="flex justify-center items-center gap-[10px] mb-[10px]">
                    <GiStarShuriken className="text-[22px] text-[var(--primary)]" />
                    <SplitText
                        text="ABOUT ME"
                        className="text-[var(--primary)] font-bold subheading"
                    />
                </div>

                <ScrollReveal
                    baseOpacity={0}
                    enableBlur={true}
                    baseRotation={5}
                    blurStrength={10}
                    className="para"
                >
                    I’m Abdullah Sajjad, a 21-year-old passionate web developer and UI/UX designer from Lahore, Pakistan. With a solid background in frontend and full-stack development, I specialize in React, Next.js, Node.js, Express, and the MERN stack. I love turning ideas into visually appealing, user-friendly digital experiences that blend creativity with clean, efficient code. My passion drives me to continuously learn, explore new technologies, and craft modern web solutions that stand out.
                </ScrollReveal>
            </div>
        </section>
    );
}
