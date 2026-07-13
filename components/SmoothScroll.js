"use client";

"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { setLenis } from "@/lib/lenisSingleton";

export default function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5,
      smooth: true,
    });

    setLenis(lenis);

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      // Lenis instances shouldn't keep running after unmount
      try {
        lenis.destroy();
      } catch {
        // ignore
      }
    };
  }, []);

  return null;
}

