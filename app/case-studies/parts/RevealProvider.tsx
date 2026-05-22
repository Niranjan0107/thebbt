"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function RevealProvider() {
  const pathname = usePathname();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      {
        root: document.querySelector(".bbt-content"),
        threshold: 0.1,
      }
    );

    const elements =
      document.querySelectorAll(".reveal-section");

    elements.forEach((el) => {
      el.classList.remove("is-visible");
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, [pathname]);

  return null;
}