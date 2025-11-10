"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function ScrollToTop() {
  const pathname = usePathname();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    // Reset the scroll immediately before showing new page
    window.scrollTo({ top: 0, behavior: "instant" });
    setReady(false);

    // Small delay to ensure scroll happens before animations render
    const timer = setTimeout(() => {
      setReady(true);
    }, 10); // adjust delay if needed (30–100ms works best)

    return () => clearTimeout(timer);
  }, [pathname]);

  if (!ready) return null; // Prevent pre-rendering before scroll reset
  return null;
}
