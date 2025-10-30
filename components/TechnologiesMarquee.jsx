"use client";
import Marquee from "react-fast-marquee";
import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaWordpress,
  FaBootstrap,
  FaGitAlt,
  FaGithub,
  FaFigma,
  FaKey, // JWT
  FaCloudUploadAlt, // Multer
} from "react-icons/fa";

import {
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiNextdotjs,
  SiMongodb,
  SiExpress,
  SiRedux,
  SiMysql,
  SiFramer,
  SiPython,
SiShadcnui ,
  SiVercel,
  SiElementor,
  SiWoocommerce 
} from "react-icons/si";
import { BsFiletypeJson } from "react-icons/bs";

export default function TechnologiesMarquee() {
  const technologies = [
    { name: "HTML5", icon: FaHtml5 },
    { name: "CSS3", icon: FaCss3Alt },
    { name: "JavaScript", icon: SiJavascript },
    { name: "TypeScript", icon: SiTypescript },
    { name: "Tailwind CSS", icon: SiTailwindcss },
    { name: "Bootstrap", icon: FaBootstrap },
    { name: "React.js", icon: FaReact },
    { name: "Next.js", icon: SiNextdotjs },
    { name: "Redux Toolkit", icon: SiRedux },
    { name: "Node.js", icon: FaNodeJs },
    { name: "Express.js", icon: SiExpress },
    { name: "MongoDB", icon: SiMongodb },
    { name: "MySQL", icon: SiMysql },
    { name: "Framer Motion", icon: SiFramer },
    { name: "WordPress", icon: FaWordpress },
    { name: "Elementor", icon: SiElementor },
    { name: "WooCommerce", icon: SiWoocommerce },
    { name: "Git", icon: FaGitAlt },
    { name: "GitHub", icon: FaGithub },
    { name: "Figma", icon: FaFigma },
    { name: "JSON", icon: BsFiletypeJson },
    { name: "Python", icon: SiPython },
    { name: "JWT", icon: FaKey },
    { name: "Vercel", icon: SiVercel },
    { name: "Shadcn UI", icon: SiShadcnui },
  ];

  return (
    <section className="pad text-center">
      <Marquee speed={80} gradient={false} pauseOnHover={true}>
        <div className="flex items-center gap-10 mr-10">
          {technologies.map((tech, i) => {
            const Icon = tech.icon;
            return (
              <div
                key={i}
                className="flex items-center gap-2 px-4 py-2   rounded-full bg-[var(--accordion)] transition-all duration-300"
              >
                <Icon className="text-[23px] lg:text-[30px] text-[var(--primary)]" />
                <p className="text-sm font-[700] text-[var-(--forground)] whitespace-nowrap">
                  {tech.name}
                </p>
              </div>
            );
          })}
        </div>
      </Marquee>
    </section>
  );
}
