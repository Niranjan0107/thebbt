"use client";
import type { Metadata } from "next";
import { useEffect, useRef, useState } from "react";import "./globals.css";
import { Inter, Source_Serif_4 } from "next/font/google";
import Sidebar from "@/components/layout/sidebar";
import Image from "next/image";
import Link from "next/link";
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-source-serif",
  weight: ["300", "400", "600", "700"],
   style: ["normal", "italic"],
});


export default function RootLayout({


  
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

    const [open, setOpen] = useState(false);
const contentRef = useRef<HTMLDivElement>(null);
const [scrolled, setScrolled] = useState(false);

useEffect(() => {
  const element = contentRef.current;

  if (!element) return;

  const handleScroll = () => {
    setScrolled(element.scrollTop > 20);
  };

  element.addEventListener("scroll", handleScroll);

  return () => {
    element.removeEventListener("scroll", handleScroll);
  };
}, []);
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${sourceSerif.variable} min-h-full flex flex-col`}
      >
        <link rel="stylesheet" href="https://use.typekit.net/hml3npk.css"></link>
         <main className="overflow-hidden">
      <div className="bbt-layout flex h-screen">
        
        {/* Sidebar */}
       <div
  className={`
    w-[255px] bbt-sidebar
    fixed md:relative top-0 left-0 z-50 h-screen
    transition-transform duration-300
    ${open ? "translate-x-0" : "-translate-x-full"}
    md:translate-x-0
  `}
>
  <Sidebar  setOpen={setOpen}/>
</div>
{open && (
  <div
    className="fixed inset-0 bg-black/50 z-40 md:hidden"
    onClick={() => setOpen(false)}
  />
)}

        {/* Content */}
        <div   ref={contentRef} className="bbt-content flex-1 overflow-y-auto">
          <div
  className={`
    fixed z-[99] w-[100%] mobile-header
    flex items-center gap-2
    px-4 py-3
    md:hidden justify-between
    min-w-[100%]
    transition-all duration-300

    ${scrolled
      ? ""
      : "bg-transparent"}
  `}
>
        <button
  className="trigger"
  onClick={() => setOpen(!open)}
>
   <Image
            src="/images/ButtonOpenmenu.svg"
            alt="BBT Logo"
            width={27}
            height={27}
            priority
          />
</button>

            <span>
               <div className="logo">
        <Link href="/">
          <Image
            src="/images/bbt-logo-w.png"
            alt="BBT Logo"
            width={62}
            height={34}
            priority
          />
        </Link>
      </div>           
            </span>
          </div>
          {children}
        </div>

      </div>
    </main>
      </body>
    </html>
  );
}

