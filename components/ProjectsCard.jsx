"use client"
import Image from 'next/image'
import React from 'react'
import { usePathname } from "next/navigation";
export default function ProjectsCard({ image, name, technologies, year,index }) {
    const pathname = usePathname();
  return (
    <div className={` hover:scale-[1.01] transition-transform duration-300 cursor-pointer relative ${pathname == "/" && index == 1 ? "md:top-[70px]":" "} ${pathname == "/" && index == 3 ? "md:top-[70px]":" "} `} >
      <Image
        src={image}
        className="w-full aspect-[3/2] object-cover rounded-[25px] lg:opacity-85 hover:opacity-100 duration-300 "
        alt={name}
        width={400}
        height={300}
      />
      <div className="flex justify-between items-center p-4">
        <div className="flex flex-col items-start">
          <p className="text-[25px] font-[700]">{name}</p>
          <p className="para !text-[var(--primary)] font-[500]">{technologies.join(', ')}</p>
        </div>
        <p className="para opacity-80">{year}</p>
      </div>
    </div>
  );
}
