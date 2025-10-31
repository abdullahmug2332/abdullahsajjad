import AboutHero from '@/components/AboutHero'
import DesignProcess from '@/components/DesignProcesss';
import Experience from '@/components/Experience'
import TechnologiesMarquee from '@/components/TechnologiesMarquee'
import React from 'react'
import { GrDocumentText } from "react-icons/gr";
import { MdOutlineDraw } from "react-icons/md";
import { MdDesignServices } from "react-icons/md";
import { FaCode } from "react-icons/fa6";
import { FaUserCheck } from "react-icons/fa6";
import { MdRocketLaunch } from "react-icons/md";
import Educations from '@/components/Educations';
import { FaGraduationCap } from "react-icons/fa";
import Certifications from '@/components/Certifications';
import { GrCertificate } from "react-icons/gr";
import Hobby from '@/components/Hobby';

export const metadata = {
  title: "Hire Web Developer | Abdullah Sajjad | Javascript Developer ",
  description:
    "Discover Abdullah Sajjad, a web developer from Lahore, Pakistan, specializing in React, Next.js, and MERN stack to build modern, responsive websites.",

  keywords:
    "About Abdullah Sajjad, Web Developer Profile, MERN Stack Developer, React Developer from Pakistan, Front-End Developer, Full-Stack Web Developer, Modern Web Developer, Next.js Expert, Software Engineer Portfolio, Lahore Web Developer",

  openGraph: {
    title: "About Abdullah Sajjad | Professional Web Developer & MERN Stack Expert",
    description:
      "Discover who I am, my skills, and my journey as a React and MERN stack web developer from Lahore, Pakistan. Building creative, fast, and modern web solutions for businesses worldwide.",
    url: "https://abdullahsajjad.vercel.app/about",
    siteName: "Abdullah Sajjad - Web Developer Portfolio",
    images: [
      {
        url: "https://abdullahsajjad.vercel.app/abdullah.JPG",
        width: 500,
        height: 630,
        alt: "Abdullah Sajjad - About Web Developer Profile",
      },
    ],
    locale: "en_US",
    type: "profile",
  },

  alternates: {
    canonical: "https://abdullahsajjad.vercel.app/about",
  },
};


export default function page() {
  const about = {
    hero: {
      greeting: "Hey! It's me Abdullah.",
      heroText: {
        before: "Develope",
        highlight: "purpose driven experiences",
        after: "that inspire & engage",
      },
      description:
        "I design and develop modern, responsive, and high-performing websites using React, Next.js, and the MERN stack. My focus is on delivering clean, efficient code combined with visually appealing design to create seamless digital experiences that engage users and bring ideas to life.",
      buttons: [
        { text: "Resume", link: "/AbdullahSajjadResume.pdf" },
        { text: "View all Projects", link: "/projects" },
      ],
      socials: [
        {
          name: "LinkedIn",
          link: "https://www.linkedin.com/in/abdullah-sajjad-8881b9289/",
        },
        { name: "Github", link: "https://github.com/abdullahmug2332" },
        {
          name: "Instagram",
          link: "https://www.instagram.com/abdullah__4741/?igsh=a2RwOHl6YjloeGdn&utm_source=qr#",
        },
        { name: "Whatsapp", link: "https://wa.me/923254412292" },
        { name: "Gmail", link: "mailto:abdullahmug2332@gmail.com" },
      ],
    },
    experience: {
      subTitle: "WORK HISTORY",
      title: "EXPERIENCE",
      description: "A look into my professional journey, where I’ve honed my technical expertise and creative problem-solving — delivering impactful web solutions that combine design precision, clean code, and real-world functionality.",
      experiences: [
        {
          "name": "IBSTEC",
          "image": "/ibstec.png",
          "role": "JS developer",
          "timePeriod": {
            "from": "April 2025",
            "to": "Present"
          }
        },
        {
          "name": "Knowledge Stream",
          "image": "/ks.png",
          "role": "Trainee",
          "timePeriod": {
            "from": "Jan 2024",
            "to": "April 2024"
          }
        },
        {
          "name": "Nexskill",
          "image": "/nexskill.png",
          "role": "Trainee",
          "timePeriod": {
            "from": "Oct 2023",
            "to": "Dec 2023"
          }
        }
      ]
    },
    education: {
      subTitle: "ACADEMIC BACKGROUND",
      title: "EDUCATION",
      description:
        "My academic journey reflects consistent dedication to learning and technical growth. From excelling in foundational studies to pursuing a BSCS degree, I’ve built a strong base in computer science and web development that drives my professional work.",
      images: ["/img4.PNG", "/img1.PNG"],
      btnText: "View all Projects",
      btnLink: "/projects",
      educations: [
        {
          icon: <FaGraduationCap />,
          institute: "Virtual University of Pakistan (VU)",
          degree: "Bachelor of Science in Computer Science (BSCS)",
          score: "85%",
          timePeriod: {
            from: "2025",
            to: "Present"
          }
        },
        {
          icon: <FaGraduationCap />,
          institute: "Government College University (GCU), Lahore",
          degree: "Intermediate in Commerce",
          score: "76.8%",
          timePeriod: {
            from: "2021",
            to: "2023"
          }
        },
        {
          icon: <FaGraduationCap />,
          institute: "Government Boys High School, Lahore",
          degree: "Matriculation in Computer Science",
          score: "90.2%",
          timePeriod: {
            from: "2019",
            to: "2021"
          }
        }
      ]
    },
    certifications: {
      image:"cert_photo.JPG",
      subTitle: "Certified Skills",
      title: "Certifications",
      description:
        "My certifications reflect my commitment to continuous learning and professional growth — mastering the latest tools and technologies to build high-quality, modern web solutions.",
      certificates:
      {
        icon: <GrCertificate />,
        name: "MERN Stack Development Bootcamp",
        description: "I completed my MERN Stack Development course at NexSkill, a leading institute focused on practical, industry-based training. During the program, I gained hands-on experience with HTML, CSS, JavaScript, React, Node.js, Express.js, and MySQL, building real-world projects that strengthened my skills in both frontend and backend development. The course helped me understand responsive design, database management, and follow best coding practices, preparing me to develop modern, efficient full-stack web applications.",
        organization: "NeXskill",
        location: "Lahore, Pakistan",
        duration: "Sep 2023 – Dec 2023",
        type: "Part-time (On-site)",
        keySkills: [
          // 🌐 Frontend
          "HTML5", "CSS3", "JavaScript (ES6+)", "TypeScript",
          "React.js", "Next.js", "Tailwind CSS", "Bootstrap",
          "Redux Toolkit", "Context API", "Framer Motion", "React Router",

          // ⚙️ Backend
          "Node.js", "Express.js", "RESTful APIs", "Middleware",
          "JWT", "Bcrypt.js", "Multer",
          "API Integration", "Postman", "Thunder Client",

          // 🗄️ Databases
          "MongoDB", "Mongoose", "MySQL", "SQL Queries", "Database Design",

          // 🧰 Tools & DevOps
          "Git", "GitHub", "VS Code", "NPM", "dotenv", "Prettier",
          "Vercel ",

          // 🎨 Design & UX
          "Responsive Web Design", "UI/UX Optimization", "Figma (Basic)",

          // 💡 Soft Skills & Practices
          "Problem Solving", "Debugging", "Team Collaboration",
          "Project Planning",

          // 🧠 Extra
          "API Testing", "Error Handling", "Authentication",

        ]
        , // optional: add your certificate link or leave blank
      },

    },
    designProcess: {
      subTitle: "STEPS I FOLLOW",
      title: "My Design Process",
      description: "My design process blends creativity and logic — from strategy and wireframing to design, development, and testing. Each step focuses on building fast, user-centric, and scalable web experiences that drive real business results.",
      process: [
        {
          step: "01. Research & Planning",
          icon: <GrDocumentText />,
          description:
            "Every project starts with understanding client goals, target audience, and industry trends to create a clear development roadmap.",
        },
        {
          step: "02. Wireframe",
          icon: <MdOutlineDraw />,
          description:
            "I translate ideas into structured layouts, ensuring a smooth user experience before moving to the design stage.",
        },
        {
          step: "03. Design",
          icon: <MdDesignServices />,
          description:
            "I craft visually engaging and responsive UI designs using modern principles that align with brand identity and user needs.",
        },
        {
          step: "04. Development",
          icon: <FaCode />,
          description:
            "Using React, Next.js, and Node.js, I bring designs to life with clean, efficient, and scalable code focused on performance.",
        },
        {
          step: "05. Quality Assurance",
          icon: <FaUserCheck />,
          description:
            "I test across devices and browsers, optimize SEO and speed, and ensure flawless functionality before deployment.",
        },
        {
          step: "06. Launch & Support",
          icon: <MdRocketLaunch />,
          description:
            "Once everything is tested, I deploy the project and offer continuous support to keep the website running smoothly.",
        },
      ]
    },
    hobby: {
      image: "/hobby.jpg",
      subTitle: "MY HOBBY",
      title: "Self-Photography",
      description:
        "Capturing moments through self-photography allows me to express creativity beyond coding and design. It's a way for me to explore visual storytelling, experiment with lighting, angles, and emotions, and document personal growth through my lens. I enjoy transforming simple moments into meaningful visual expressions that reflect both my artistic vision and individuality. Photography not only enhances my creativity but also inspires me to bring the same attention to detail and aesthetics into my web development work.",
    },
  

}

return (
  <>
    <h1 className="hidden">Hire Professional Web Developer | Abdullah Sajjad | React Expert | Next.js | MERN</h1>
    <AboutHero data={about.hero} />
    <TechnologiesMarquee />
    <Experience experience={about.experience} />
    <Educations data={about.education} />
    <Certifications data={about.certifications} />
    <DesignProcess data={about.designProcess} />
    <Hobby data={about.hobby} />
  </>
)
}
