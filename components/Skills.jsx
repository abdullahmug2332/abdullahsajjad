"use client";
import React from "react";
import { GiStarShuriken } from "react-icons/gi";
import SplitText from "@/components/SplitText";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { motion } from "framer-motion";
import Link from "next/link";

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
    }),
};

export default function Skills({ data }) {
    return (
        <section className="pad">
            <div className="container flex flex-col lg:flex-row gap-[30px] ">
                {/* LEFT SIDE */}
                <div className="w-full lg:w-[49%]">
                    <div className="flex justify-start items-center gap-[10px] mb-[10px]">
                        <GiStarShuriken className="subheading text-[var(--primary)]" />
                        <SplitText
                            text={data.subTitle}
                            className="text-[var(--primary)] font-bold text-[20px]"
                        />
                    </div>

                    <SplitText text={data.title} className="font-bold heading" />

                    <p className="para ">{data.description}</p>
                </div>

                {/* RIGHT SIDE */}
                <div className="w-full lg:w-[49%] ">
                    <Accordion
                        type="single"
                        collapsible
                        className="space-y-2"
                        defaultValue="item-0"
                    >
                        {data.skills.map((skill, index) => (
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
                                        {skill.category}
                                    </AccordionTrigger>

                                    <AccordionContent className="para">
                                        <ul className="list-disc pl-5">
                                            {skill.items.map((item, i) => (
                                                <li key={i} className="font-[500] color mb-1">
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </AccordionContent>
                                </AccordionItem>
                            </motion.div>
                        ))}
                    </Accordion>

                    {/* BUTTON (optional) */}
                    {data.btnText && data.btnLink && (
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
                    )}
                </div>

            </div>
        </section>
    );
}
