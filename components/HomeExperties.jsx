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
import Link from "next/link";


export default function HomeExperties({ data }) {
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
            text={data.subTitle}
            className="text-[var(--primary)] font-bold text-[20px]"
          />
        </div>

        <SplitText text={data.title} className="font-bold heading" />

        <p className="para mb-[30px]">{data.description}</p>

        <div className="flex flex-wrap justify-between gap-[20px]">
          <div className="w-full lg:w-[49%]">
            <Accordion type="single" collapsible className="space-y-2" defaultValue="item-0" >
              {data.specialties.map((item, index) => (
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
                    <AccordionTrigger className="subheading font-[600] justify-start items-center cursor-pointer gap-[10px]">
                      <span className="color">{item.icon}</span>
                      {item.title}
                    </AccordionTrigger>
                    <AccordionContent className="para">
                      {item.description}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              viewport={{ once: true }}
              className="mt-[40px] flex justify-end"
            >
              <Link href={data.btnLink} className="btn font-[600] inline-block">
                {data.btnText}
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
                src={data.image}
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
