"use client";
import React from "react";
import { GiStarShuriken } from "react-icons/gi";
import SplitText from "@/components/SplitText";
import Image from "next/image";
import Link from "next/link";
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
                    <p className="para lg:mb-[30px]">{data.description}</p>
                </div>

                {/* Content */}
                <div className="flex flex-col lg:flex-row gap-[40px]">
                    {/* Left Side - Image */}
                    <div className="w-full lg:w-[40%]">
                        <Image
                            src={data.image}
                            alt="certification"
                            className="w-full rounded-[30px]"
                            width={400}
                            height={400}
                            unoptimized
                        />
                    </div>

                    {/* Right Side - Certificate Cards */}
                    <motion.div
                        className="w-full lg:w-[60%] flex flex-col gap-[10px]"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={{
                            visible: { transition: { staggerChildren: 0.15 } },
                        }}
                    >
                        {data.certificates.map((cert, index) => (
                            <motion.div
                                key={index}
                                variants={{
                                    hidden: { opacity: 0, x: 30 },
                                    visible: {
                                        opacity: 1,
                                        x: 0,
                                        transition: { duration: 0.6, ease: "easeOut" },
                                    },
                                }}
                            >
                                <div className="flex items-center justify-between gap-[15px] bgacc px-[20px] py-[10px] rounded-[5px] duration-300 hover:translate-y-[-5px] cursor-pointer">
                                    <div className="flex items-center gap-[10px] min-w-0">
                                        <Image
                                            src={cert.image}
                                            alt={cert.organization}
                                            width={200}
                                            height={200}
                                            className="w-[40px] h-[40px] rounded-full object-contain shrink-0"
                                            unoptimized
                                        />
                                        <div className="flex flex-col justify-center items-start min-w-0">
                                            {cert.credentialLink ? (
                                                <Link
                                                    href={cert.credentialLink}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    <p className="subheading font-[600] hover:text-[var(--primary)] duration-300">
                                                        {cert.name}
                                                    </p>
                                                </Link>
                                            ) : (
                                                <p className="subheading font-[600]">{cert.name}</p>
                                            )}

                                            {cert.type && (
                                                <p className="opacity-60 font-[500] text-[11px] md:text-[14px]">
                                                    {cert.type}
                                                </p>
                                            )}

                                            {cert.organizationLink ? (
                                                <Link
                                                    href={cert.organizationLink}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    <p className="font-[600] opacity-60 text-[12px] md:text-[16px] underline">
                                                        @{cert.organization}
                                                    </p>
                                                </Link>
                                            ) : (
                                                <p className="font-[600] opacity-60 text-[12px] md:text-[16px]">
                                                    @{cert.organization}
                                                </p>
                                            )}
                                        </div>
                                    </div>

                                    <p className="opacity-60 font-[500] text-[10px] md:text-[16px] shrink-0 text-right">
                                        {cert.timePeriod.to
                                            ? `${cert.timePeriod.from} - ${cert.timePeriod.to}`
                                            : `Issued ${cert.timePeriod.from}`}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}