"use client";

import { useEffect } from "react";

export default function InteractiveDotBackground() {
  useEffect(() => {
    const handleMouseMove = (e) => {
      document.documentElement.style.setProperty(
        "--mouse-x",
        `${e.clientX}px`
      );

      document.documentElement.style.setProperty(
        "--mouse-y",
        `${e.clientY}px`
      );
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      {/* Normal dots */}
      <div className="dot-background" />

      {/* Bright dots around cursor */}
      <div className="dot-background dot-background-hover" />
    </>
  );
}