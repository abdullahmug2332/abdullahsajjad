

import HomeExperties from "@/components/HomeExperties";
import HomeHero from "@/components/HomeHero";
import HomeProjects from "@/components/HomeProjects";
import MarqueeSection from "@/components/Marquee";
import TechnologiesMarquee from "@/components/TechnologiesMarquee";
import Introduction from "@/components/Introduction";
import { FaCode } from "react-icons/fa";
import { HiOutlinePaintBrush } from "react-icons/hi2";
import { FaWordpress } from "react-icons/fa";

export const metadata = {
  title: "Hire Web Developer | Abdullah Sajjad | Javascript Developer",
  description:
    "Get modern, responsive, and SEO-friendly websites by Abdullah Sajjad, expert in React, Next.js, and MERN stack web development for your business.",
  
  keywords:
    "Hire Web Developer, React Developer, MERN Stack Developer, Freelance Web Developer, Front-End Developer, Next.js Developer, Custom Web Development, Modern Website Design, Business Website, Abdullah Sajjad Developer, Portfolio Web Developer, Web Development Services",

  openGraph: {
    title: "Hire Web Developer | Abdullah Sajjad | React & MERN Expert",
    description:
      "Looking to hire a professional web developer? I build modern, SEO-friendly websites using React, Next.js, and Node.js to help your business grow online.",
    url: "https://abdullahsajjad.vercel.app",
    siteName: "Abdullah Sajjad - Web Developer Portfolio",
    images: [
      {
        url: "https://abdullahsajjad.vercel.app/abdullah.JPG",
        width: 500,
        height: 630,
        alt: "Abdullah Sajjad - Professional Web Developer and React Expert",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  alternates: {
    canonical: "https://abdullahsajjad.vercel.app",
  },
};



export default function Home() {
  const home = {
    hero: {
      image: {
        src: "/abdullah.JPG",
        alt: "abdullah",
        cta: {
          text: "LETS TALK * LETS TALK * LETS TALK * LETS TALK * ",
          link: "/contact",
        },
      },
      greeting: "Hey! It's me Abdullah.",
      heroText: {
        before: "A",
        highlight: "creative developer",
        after: "& UI/UX designer",
      },
      description:
        "I design and develop impactful, user-friendly websites using React, Next.js, and the MERN stack — combining creativity with clean code.",
      buttons: [
        { text: "Resume", link: "/AbdullahSajjadResume.pdf" },
        { text: "Know me better", link: "/about" },
      ],
    },
    marqueeTitles: [
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
    ],
    intro: {
      subTitle: "ABOUT ME",
      description:
        "I’m Abdullah Sajjad, a 21-year-old passionate web developer and UI/UX designer from Lahore, Pakistan. With a solid background in frontend and full-stack development, I specialize in React, Next.js, Node.js, Express, and the MERN stack. I love turning ideas into visually appealing, user-friendly digital experiences that blend creativity with clean, efficient code. My passion drives me to continuously learn, explore new technologies, and craft modern web solutions that stand out.",
    },
    projects: {
      subTitle: "MY WORK",
      title: "Selected Projects",
      description:
        "Here's a curated selection showcasing my expertise and the achieved results.",
      btnText: "View All Projects",
      btnLink: "/projects",
      projects: [
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
      ],
    },
    experties: {
      subTitle: "SPECIALITY",
      title: "Area of Expertise",
      description:
        "A glimpse into my key technical strengths and creative problem-solving blending design precision with functional excellence.",
      image: "/expertise.jpg",
      btnText: "Know me better",
      btnLink: "/about",
      specialties: [
        {
          icon: <FaCode className="text-[25px] ml-[10px]" />,
          title: "Full-Stack Development",
          description:
            "Building fast, secure, and scalable web applications using React, Next.js, Node.js, and the MERN stack — from front-end interfaces to back-end APIs.",
        },
        {
          icon: <HiOutlinePaintBrush className="text-[25px] ml-[10px]" />,
          title: "UI/UX Design",
          description:
            "Designing intuitive, visually appealing, and user-centered interfaces that deliver seamless digital experiences across all devices.",
        },
        {
          icon: <FaWordpress className="text-[25px] ml-[10px]" />,
          title: "WordPress Development",
          description:
            "Creating custom WordPress websites and landing pages with Elementor and Storefront — optimized for performance, SEO, and easy management.",
        },
      ],
    }
  }
  return (
    <div>
      <h1 className="hidden">Hire Professional Web Developer | Abdullah Sajjad | React Expert | Next.js | MERN</h1>
      <HomeHero data={home.hero} />
      <MarqueeSection data={home.marqueeTitles} />
      <Introduction data={home.intro} />
      <HomeProjects data={home.projects} />
      <HomeExperties data={home.experties} />
      <TechnologiesMarquee />
    </div>
  );
}
