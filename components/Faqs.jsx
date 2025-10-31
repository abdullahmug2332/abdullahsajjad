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


export default function Faqs ({ data }) {
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
            <div className="container flex flex-col lg:flex-row gap-[25px]">
                <div className="w-full lg:w-[49%]">
                    <div className="flex justify-start items-center gap-[10px] mb-[10px]">
                        <GiStarShuriken className="subheading text-[var(--primary)]" />
                        <SplitText
                            text={data.subTitle}
                            className="text-[var(--primary)] font-bold text-[20px]"
                        />
                    </div>

                    <SplitText text={data.title} className="font-bold heading" />

                    <p className="para mb-[30px]">{data.description}</p>
                </div>
                <div className="w-full lg:w-[49%]">
                    <Accordion type="single" collapsible className="space-y-2" defaultValue="item-0" >
                        {data.allFaqs.map((faq, index) => (
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
                                    <AccordionTrigger className="para font-[500] justify-start items-center cursor-pointer gap-[10px]">
                                        {faq.question}
                                    </AccordionTrigger>
                                    <AccordionContent className="para">
                                        {faq.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            </motion.div>
                        ))}
                    </Accordion>

                </div>

                
            </div>
        </section>
    );
}
