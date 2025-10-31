import React from "react";
import SplitText from "@/components/SplitText";

export default function Slogen() {
  return (
    <div className="text-center">
      <SplitText
        text={
          <div className=" flex justify-center items-center  gap-2   sm:gap-10 md:gap-14 text-[20px] sm:text-[35px] md:text-[40px] lg:text-[50px] xl:text-[60px] 2xl:text-[70px] font-[700] color">
            <span>CODE</span>
            <span className="text-[var(--primary)]">➤</span>
            <span>CREATE</span>
            <span className="text-[var(--primary)]">➤</span>
            <span>EVOLVE</span>
          </div>
        }
        className="text-[var(--primary)] font-bold text-[20px]"
      />
    </div>
  );
}
