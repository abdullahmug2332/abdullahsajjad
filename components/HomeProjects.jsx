import React from 'react'
import { GiStarShuriken } from "react-icons/gi";
import SplitText from "@/components/SplitText";
import ProjectsCard from './ProjectsCard';
import Link from 'next/link';

export default function HomeProjects() {
    const projects = [
        {
            image: "/dummymokeup.png",
            name: "AllSpark Technologies",
            technologies: ["Next.js", "Express"],
            year: "2025",
        },
        {
            image: "/dummymokeup.png",
            name: "Portfolio Website",
            technologies: ["Next.js", "Tailwind CSS"],
            year: "2024",
        },
        {
            image: "/dummymokeup.png",
            name: "E-commerce Store",
            technologies: ["React", "Node.js"],
            year: "2024",
        },
        {
            image: "/dummymokeup.png",
            name: "Task Manager",
            technologies: ["MERN Stack"],
            year: "2025",
        },
    ];

    return (
        <section className="pad">
            <div className="container">
                <div className="flex justify-start items-center gap-[10px] mb-[10px]">
                    <GiStarShuriken className="subheading text-[var(--primary)]" />
                    <SplitText
                        text="MY WORK"
                        className="text-[var(--primary)] font-bold text-[20px]"
                    />
                </div>

                <SplitText
                    text="Selected Projects"
                    className="font-bold heading"
                />

                <p className='para mb-[30px]'>
                    Here's a curated selection showcasing my expertise and the achieved results.
                </p>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-[20px] lg:gap-[40px] xl:gap-[60px] mt-[20px]  duration-300'>
                    {projects.map((project, i) => (
                        <ProjectsCard
                            key={i}
                            image={project.image}
                            name={project.name}
                            technologies={project.technologies}
                            year={project.year}
                            index={i}
                        />
                    ))}
                </div>
                <div className='flex justify-center mt-[50px] md:mt-[100px]'>
                    <Link href={"/projects"} className='btn '>View All Projects</Link>
                </div>
            </div>
        </section>
    );
}
