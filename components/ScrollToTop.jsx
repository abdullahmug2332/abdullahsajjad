"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { getLenis } from "@/lib/lenisSingleton";

export default function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    const lenis = getLenis();

    // If Lenis exists, use it (so it won't be overridden immediately).
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
      return;
    }

    // Fallback
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return null;
}

