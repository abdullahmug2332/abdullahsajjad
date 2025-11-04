"use client"; 47
import React from "react";
import { useParams } from "next/navigation";
import { allProjects } from "../../../lib/Projects";
import Image from "next/image";
import { FaArrowLeft } from "react-icons/fa6";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";
import SplitText from "@/components/SplitText";
import { RxLaptop } from "react-icons/rx";
import { TbDeviceLaptopOff } from "react-icons/tb";
import { SlScreenTablet } from "react-icons/sl";
import { TbDeviceTabletOff } from "react-icons/tb";
import { TbDeviceMobile } from "react-icons/tb";
import { TbDeviceMobileOff } from "react-icons/tb";

export default function ProjectPage() {
  const params = useParams();
  const { project } = params; // gets 'frontic' from /frontic

  const projectData = allProjects.find(p => p.slug === project);


  if (!projectData) {
    return (
      <div className="p-8 text-center">
        <h1 className="text-2xl font-bold">Project not found</h1>
      </div>
    );
  }
  const iconclass = " text-[100px] w-full color"
  return (
    <div className=" pcontainer">
      <div className="flex justify-between items-center py-[15px]">
        <Link href="/projects" className="flex items-center gap-[5px] md:gap-[10px] cursor-pointer opacity-80 hover:opacity-100 duration-300 hover:translate-x-[-5px] ">
          <FaArrowLeft />
          <p className="para">Back to Projects</p>
        </Link>
        <p className="para opacity-80">{projectData.year}</p>
      </div>
      <Image
        width={200}
        height={200}
        src={projectData.heroImage}
        alt={projectData.name}
        className="w-full  mb-4 aspect-[10/4] object-cover mt-[5px] rounded-[10px]"
        unoptimized
      />
      <div className="flex justify-between items-center flex-wrap ">
        <p className="heading lfont font-[700]">{projectData.name}</p>
        <a href={projectData.live_preview_link} className="btn flex items-center gap-[10px]" target="_blank">Live Preview<GoArrowUpRight className="font-[800]" /></a>
      </div>
      <p className="para mb-6 mt-[10px]">{projectData.description}</p>
      <p className="para mb-2 mt-[5px] flex gap-[15px]"><span>My Role: </span>  <span className="opacity-100">({projectData.role})</span></p>
      <div className="flex flex-wrap">
        {
          projectData.technologies.map((tech, i) => (
            <span key={i} className="bgacc mr-2 px-[10px] py-[5px] rounded-[5px] color font-[600]">{tech}</span>

          ))
        }
      </div>

      <div className="pad">
        <SplitText
          text="Landing Page"
          className="heading font-[700]"
        />
        <p className="para mt-[10px]">Each project in my portfolio represents a step forward in blending creativity with functionality. From crafting pixel-perfect designs to building seamless user experiences, I focus on developing fast, responsive, and user-friendly web applications. Explore the collection below to see how I turn ideas into fully realized digital solutions.</p>
        <Image
          src={projectData.landing_page_image}
          alt={`${projectData.name} landing`}
          className="w-full mt-[10px]"
          width={900}
          height={700}
          unoptimized
        />
      </div>

      <div className="pad">
        <SplitText
          text="Color Pallete"
          className="heading font-[700]"
        />
        <p className="para mt-[5px]">This project’s color palette is designed to create a cohesive visual experience. The chosen colors balance contrast and harmony, reinforcing brand identity while maintaining readability and aesthetic appeal.</p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[15px] mt-[10px]">
          {
            projectData.colors_used.map((color, index) => (
              <div key={index} className="flex flex-col rounded-[15px] border overflow-hidden" >
                <div className="min-h-[100px]" style={{ backgroundColor: color, color: color }}> 123</div>
                <p className="font-[600] p-1">{color}</p>
              </div>
            ))
          }
        </div>
      </div>

      <div className="pad">
        <SplitText
          text="Typography"
          className="heading font-[700]"
        />
        <p className="para mt-[5px]">The typography of this project is designed to create a clear visual hierarchy and enhance readability across all devices. A combination of elegant display fonts for headings and clean sans-serif fonts for body text ensures both style and legibility. Font sizes are carefully balanced to maintain consistency, accessibility, and a modern visual appeal throughout the user interface.</p>
        <div className="bgacc p-4 rouned-[10px] mt-[10px]">
          <div>
            <p className="subheading font-[600]">Font Sizes:</p>
            <p className="flex gap-[10px]"><span className="font-[600]">Heading:</span> <span>{projectData.typography.font_size_heading}</span> </p>
            <p className="flex gap-[10px]"><span className="font-[600]">Sub Heading:</span> <span>{projectData.typography.font_size_subheading}</span> </p>
            <p className="flex gap-[10px]"><span className="font-[600]">Paragraph:</span> <span>{projectData.typography.font_size_paragraph}</span> </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[10px] mt-[20px]">
            {
              projectData.typography.font_families.map((ff, i) => (
                <div key={i} className="border-1 bgcon rounded-[15px] p-4">
                  <p className="subheading font-[600] color">{ff}</p>
                  <p className="opacity-70 text-[15px] ">Google Fonts</p>
                  <p className="opacity-70 text-[15px] mt-[10px]">Extra Bold</p>
                  <p className="opacity-70 text-[15px]">Bold</p>
                  <p className="opacity-70 text-[15px]">Regular</p>
                </div>
              ))
            }
          </div>

        </div>
      </div>

      <div className="pad">
        <SplitText
          text="Responsiveness"
          className="heading font-[700]"
        />
        <p className="para mt-[5px]">Fully responsive design optimized for mobile, tablet, and laptop devices to ensure a smooth user experience across all platforms.</p>
        <div className="flex flex-wrap  mt-[20px] items-center gap-[10px] ">
          <div className="bgacc w-full md:w-[32%] rounded-[10px] py-8">
            {projectData.responsiveness.laptop == true ? <RxLaptop className={iconclass} /> : <TbDeviceLaptopOff className={iconclass} />}
            <p className="text-center font-[600] color mt-[20px]">{projectData.responsiveness.laptop == true ? "Laptop Responsive" : "Not Laptop Responsive"}</p>
          </div>
          <div className="bgacc w-full md:w-[32%] rounded-[10px] py-8">
            {projectData.responsiveness.tablet == true ? <SlScreenTablet className={iconclass} /> : <TbDeviceTabletOff className={iconclass} />}
            <p className="text-center font-[600] color mt-[20px]">{projectData.responsiveness.tablet == true ? "Tablet Responsive" : "Not Tablet Responsive"}</p>

          </div>
          <div className="bgacc w-full md:w-[32%] rounded-[10px] py-8">
            {projectData.responsiveness.mobile == true ? <TbDeviceMobile className={iconclass} /> : <TbDeviceMobileOff className={iconclass} />}
            <p className="text-center font-[600] color mt-[20px]">{projectData.responsiveness.mobile == true ? "Mobile Responsive" : "Not Mobile Responsive"}</p>
          </div>

        </div>
      </div>




      <div className="text-left w-full">
        {/* Safely render your HTML list from JSON */}
        <div
          dangerouslySetInnerHTML={{ __html: projectData.other_details }}
        ></div>


      </div>
    </div>

  );
}
