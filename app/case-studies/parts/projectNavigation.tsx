"use client";

import Link from "next/link";
import { cases } from "@/lib/cases";
import { useEffect, useState } from "react";
type Props = {
  currentSlug: string;
};

export default function ProjectNavigation({
  currentSlug,
}: Props) {



  const [showNav, setShowNav] = useState(false);

  const currentIndex = cases.findIndex(
    (item) => item.slug === currentSlug
  );

  const currentProject = cases[currentIndex];

  const prevProject =
    currentIndex > 0
      ? cases[currentIndex - 1]
      : null;

  const nextProject =
    currentIndex < cases.length - 1
      ? cases[currentIndex + 1]
      : null;



useEffect(() => {

  const content = document.querySelector(".bbt-content");

  if (!content) return;

  const handleScroll = () => {

    const scrollTop = content.scrollTop;

    console.log(scrollTop);

    setShowNav(scrollTop > 100);

  };

  content.addEventListener("scroll", handleScroll);

  return () => {
    content.removeEventListener("scroll", handleScroll);
  };

}, []);

  return (
   <div
  className={`fixed bottom-0 right-0 z-50 transition-all duration-500 w-full md:w-[calc(100%-255px)] ${
    showNav
      ? "translate-y-0 opacity-100"
      : "translate-y-full opacity-0 pointer-events-none"
  }`}
>
    <div className="border-t border-white/[0.06] py-3 px-3 md:py-3 md:px-6 bg-[#000000f0] md:mt-[0]">

      <div className="flex items-center justify-between">

        {/* PREVIOUS */}
        <div className="w-[33%]">

          {prevProject && (
            <Link
              href={`/case-studies/${prevProject.slug}`}
              className="group inline-flex items-start gap-3"
            >

              <span className="text-white/40 text-[12px] md:text-xl transition group-hover:-translate-x-1">
                ←
              </span>

              <div>

                <p className="font-inter font-normal text-[8px] leading-[12px] md:text-[10.43px] md:leading-[15.64px] tracking-[3.34px] uppercase text-[#FFFFFF8C]">
                  Previous · {prevProject.id}
                </p>

                <h3 className="mt-1 text-white uppercase text-[12px] ms:text-[14px] leading-none">
                  {prevProject.title}
                </h3>

              </div>

            </Link>
          )}

        </div>

        {/* CENTER */}
        <div className="w-[33%] text-center">

          <h3 className="font-inter font-normal text-[8px] leading-[12px] md:text-[10.43px] md:leading-[15.64px] tracking-[3.34px] uppercase text-[#FFFFFF8C]">
            {currentProject.title}
          </h3>

          <span className="mt-1 block text-white font-normal text-[10px] md:text-[12px] leading-[15.64px] tracking-[3.34px] uppercase">
            {currentIndex + 1} / {cases.length}
          </span>

        </div>

        {/* NEXT */}
        <div className="w-[33%] flex justify-end">

          {nextProject && (
            <Link
              href={`/case-studies/${nextProject.slug}`}
              className="group inline-flex items-start gap-3 text-right"
            >

              <div>

                <p className="font-inter font-normal text-[8px] leading-[12px] md:text-[10.43px] md:leading-[15.64px] tracking-[3.34px] uppercase text-[#FFFFFF8C]">
                  Next · {nextProject.id}
                </p>

                <h3 className="mt-1 text-white uppercase text-[12px] md:text-[14px] leading-none">
                  {nextProject.title}
                </h3>

              </div>

              <span className="text-white/40 text-[12px] md:text-xl transition group-hover:translate-x-1">
                →
              </span>

            </Link>
          )}

        </div>

      </div>

    </div>

</div>
    
  );
}