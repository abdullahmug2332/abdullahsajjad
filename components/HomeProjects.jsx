"use client";
import React from 'react';
import { GiStarShuriken } from "react-icons/gi";
import SplitText from "@/components/SplitText";
import ProjectsCard from './ProjectsCard';
import Link from 'next/link';

export default function HomeProjects({ data }) {
    return (
        <section className="pad">
            <div className="container">
                <div className="flex justify-start items-center gap-[10px] mb-[10px]">
                    <GiStarShuriken className="subheading text-[var(--primary)]" />
                    <SplitText
                        text={data.subTitle}
                        className="text-[var(--primary)] font-bold text-[20px]"
                    />
                </div>

                <SplitText
                    text={data.title}
                    className="font-bold heading"
                />

                <p className='para mb-[30px]'>
                    {data.description}
                </p>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-[20px] lg:gap-[40px] xl:gap-[60px] mt-[20px]  duration-300'>
                    {data.projects.map((project, i) => (
                        <ProjectsCard
                            key={i}
                            cardImage={project.cardImage}
                            name={project.name}
                            tech_stack={project.tech_stack}
                            year={project.year}
                            slug={project.slug}
                            index={i}
                            unoptimized
                        />
                    ))}
                </div>

                <div className='flex justify-center mt-[50px] md:mt-[100px]'>
                    <Link href={data.btnLink} className='btn'>
                        {data.btnText}
                    </Link>
                </div>
            </div>
        </section>
    );
}
