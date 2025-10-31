"use client";
import React from "react";
import Autoplay from "embla-carousel-autoplay";
import { GiStarShuriken } from "react-icons/gi";
import SplitText from "@/components/SplitText";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { motion } from "framer-motion";


export default function DesignProcess({ data }) {
    return (
        <section className="pad">
            <div className="container flex flex-col  gap-[20px] ">
                <div className="w-full lg:w-[80%] ">
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
                {/* Carousel */}
                <Carousel className="w-full" opts={{
                    align: "start",
                    loop: false, // enables infinite loop
                }}
                    plugins={[
                        Autoplay({
                            delay: 2000, // autoplay delay (in ms)
                            stopOnInteraction: false, // keeps looping even after manual swipe
                            stopOnMouseEnter: true, // pauses autoplay when hovered
                        }),
                    ]}>
                    <CarouselContent className="flex gap-[20px]">
                        {data.process.map((item, index) => (
                            <CarouselItem
                                key={index}
                                className="basis-full md:basis-1/3 xl:basis-1/4"
                            >
                                <motion.div
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="bg-[var(--accordion)] rounded-2xl p-6 py-8 h-full flex flex-col text-left "
                                >
                                    <div className="text-[35px] md:text-[45px] rounded-full bg-[var(--accordion)] color text-white">
                                        {item.icon}
                                    </div>
                                    <h3 className="subheading font-semibold mt-[20px]">
                                        {item.step}
                                    </h3>
                                    <p className="para mt-[10px]">
                                        {item.description}
                                    </p>
                                </motion.div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>

                    <div className=" hidden">
                        <CarouselPrevious />
                        <CarouselNext />
                    </div>
                </Carousel>

            </div>
        </section>
    )
}
