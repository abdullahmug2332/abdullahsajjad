"use client";

import React, { Suspense, useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import styles from "./GlobalPreloader.module.css";

const GlobalPreloaderWithSuspense = () => {
  const [loading, setLoading] = useState(true);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 1800);
    return () => clearTimeout(timer);
  }, [pathname, searchParams]);

  if (!loading) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.loader}></div>
    </div>
  );
};

const GlobalPreloader = () => (
  <Suspense
    fallback={
      <div className={styles.overlay}>
        <div className={styles.loader}></div>
      </div>
    }
  >
    <GlobalPreloaderWithSuspense />
  </Suspense>
);

export default GlobalPreloader;
