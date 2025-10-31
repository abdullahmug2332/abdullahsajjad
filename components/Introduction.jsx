"use client";
import React from 'react';
import { GiStarShuriken } from "react-icons/gi";
import SplitText from "@/components/SplitText";
import ScrollReveal from './ScrollReveal';

export default function Introduction({ data }) {
    return (
        <section className="pad">
            <div className="container text-center">
                <div className="flex justify-center items-center gap-[10px] mb-[10px]">
                    <GiStarShuriken className="text-[22px] text-[var(--primary)]" />
                    <SplitText
                        text={data.subTitle}
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
                    {data.description}
                </ScrollReveal>
            </div>
        </section>
    );
}
