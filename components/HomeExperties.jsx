"use client";
import React from "react";
import { motion } from "framer-motion";
import { GiStarShuriken } from "react-icons/gi";
import SplitText from "@/components/SplitText";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import { FaCode } from "react-icons/fa";
import { HiOutlinePaintBrush } from "react-icons/hi2";
import { FaWordpress } from "react-icons/fa";
import Link from "next/link";

export default function HomeExperties() {
  const specialties = [
    {
      icons: <FaCode className="text-[25px] ml-[10px]" />,
      title: "Full-Stack Development",
      description:
        "Building fast, secure, and scalable web applications using React, Next.js, Node.js, and the MERN stack — from front-end interfaces to back-end APIs.",
    },
    {
      icons: <HiOutlinePaintBrush className="text-[25px] ml-[10px]" />,
      title: "UI/UX Design",
      description:
        "Designing intuitive, visually appealing, and user-centered interfaces that deliver seamless digital experiences across all devices.",
    },
    {
      icons: <FaWordpress className="text-[25px] ml-[10px]" />,
      title: "WordPress Development",
      description:
        "Creating custom WordPress websites and landing pages with Elementor and Storefront — optimized for performance, SEO, and easy management.",
    },
  ];

  // Animation variants for fade-up effect
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 1, ease: "easeOut" },
    }),
  };

  return (
    <section className="pad">
      <div className="container">
        <div className="flex justify-start items-center gap-[10px] mb-[10px]">
          <GiStarShuriken className="subheading text-[var(--primary)]" />
          <SplitText
            text="SPECIALITY"
            className="text-[var(--primary)] font-bold text-[20px]"
          />
        </div>

        <SplitText text="Area of Expertise" className="font-bold heading" />

        <p className="para mb-[30px]">
          A glimpse into my key technical strengths and creative problem-solving
          blending design precision with functional excellence.
        </p>

        <div className="flex flex-wrap justify-between gap-[20px]">
          <div className="w-full lg:w-[49%]">
            <Accordion type="single" collapsible className="space-y-2">
              {specialties.map((item, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                >
                  <AccordionItem
                    value={`item-${index}`}
                    className="px-3 py-2 rounded-[10px] bg-[var(--accordion)]"
                  >
                    <AccordionTrigger className="subheading font-[600] justify-start items-center cursor-pointer">
                      {item.icons}
                      {item.title}
                    </AccordionTrigger>
                    <AccordionContent className="para">
                      {item.description}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>

            {/* Animated button */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              viewport={{ once: true }}
              className="mt-[40px] flex justify-end"
            >
              <Link href={"/about"} className="btn font-[600] inline-block">
                Know me better
              </Link>
            </motion.div>
          </div>

          <div className="w-full lg:w-[48%] hidden lg:block">
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Image
                src={"/expertise.jpg"}
                className="w-full aspect-3/2 object-cover rounded-[25px]"
                alt="expertise"
                width={800}
                height={800}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
