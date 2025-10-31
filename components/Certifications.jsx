"use client";
import React from "react";
import { PiBuildingsFill } from "react-icons/pi";
import { GiStarShuriken } from "react-icons/gi";
import SplitText from "@/components/SplitText";
import Image from "next/image";
import { FaLocationArrow } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Certifications({ data }) {

    return (
        <section className="pad">
            <div className="container flex flex-col gap-[20px]">
                {/* Heading */}
                <div className="w-full lg:w-[80%]">
                    <div className="flex justify-start items-center gap-[10px] mb-[10px]">
                        <GiStarShuriken className="subheading text-[var(--primary)]" />
                        <SplitText
                            text={data.subTitle}
                            className="text-[var(--primary)] font-bold text-[20px]"
                        />
                    </div>
                    <SplitText text={data.title} className="font-bold heading" />
                    <p className="para mb-[30px]">
                        {data.description}
                    </p>
                </div>

                {/* Content */}
                <div className="flex flex-col lg:flex-row gap-[40px]">
                    <div className="w-full lg:w-[40%]">
                        <Image
                            src={"/cert_photo.jpg"}
                            alt="certification"
                            className="w-full rounded-[30px]"
                            width={400}
                            height={400}
                            unoptimized
                        />
                    </div>

                    {/* Right Side */}
                    <motion.div className="w-full lg:w-[60%] bgacc rounded-[30px] p-[25px]" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{
                                duration: 1,
                                ease: "easeIn",
                            }}>
                        <p className="subheading color font-[700] flex items-center gap-[10px]">
                            <span>{data.certificates.icon}</span>
                            {data.certificates.name}
                        </p>

                        <p className="para font-[500] mt-[10px]">
                            {data.certificates.description}
                        </p>

                        <div className="flex justify-between mt-[30px]">
                            <p className="font-[600] flex items-center gap-[5px]">
                                <PiBuildingsFill className="color text-[20px]" />
                                {data.certificates.organization} - {data.certificates.type}
                            </p>
                            <p className="opacity-80">{data.certificates.duration}</p>
                        </div>

                        <p className="font-[600] flex items-center gap-[5px]">
                            <FaLocationArrow className="color text-[16px] mr-[4px]" />
                            {data.certificates.location}
                        </p>

                        <p className="font-[600] mt-[30px] mb-[5px]">Key Skills:</p>

                        {/* Key Skills Animation */}
                        <motion.div
                            className="flex flex-wrap"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            variants={{
                                visible: { transition: { staggerChildren: 0.1 } },
                            }}
                        >
                            {data.certificates.keySkills.map((name, index) => (
                                <motion.button
                                    key={index}
                                    className="bg text-[var(--background)] rounded-[5px] mr-2 mb-2 p-[5px] font-[500]"
                                    variants={{
                                        hidden: { opacity: 0, x: 50 },
                                        visible: {
                                            opacity: 1,
                                            x: 0,
                                            transition: { duration: 0.6, ease: "easeOut" },
                                        },
                                    }}
                                >
                                    {name}
                                </motion.button>
                            ))}
                        </motion.div>

                        {/* Button Animation (after skills animation) */}
                        <motion.div
                            className="flex justify-end mt-[15px]"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{
                                delay: data.certificates.keySkills.length * 0.1 + 0.3, // waits for all skill buttons
                                duration: 0.6,
                                ease: "easeOut",
                            }}
                        >
                            <button className="btn">View Certificate</button>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
