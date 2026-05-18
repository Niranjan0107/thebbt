"use client";
import Image from "next/image";
import Link from "next/link";
import TestimonialSlider from "./parts/testimonials";
import AreaWeServe from "./parts/areaWeSearve";
import Whyus from "./parts/whyUs";
import { useEffect, useRef, useState } from "react";

const slides = [
  {
    title: "Design that <em>drives</em> growth",
    image: "/images/home1.png",
  },
  {
    title: "Luxury digital experiences",
    image: "/images/home2.png",
  },
  {
    title: "Build brands that last",
    image: "/images/home3.png",
  },
  {
    title: "Build brands that last",
    image: "/images/home4.png",
  },
];

export default function HeroSlider() {
  const [index, setIndex] = useState(0);

  const awsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

useEffect(() => {

  if (window.innerWidth < 768) return;

  const element = awsRef.current;

  if (!element) return;

  const handleWheel = (e: WheelEvent) => {

    const canScroll =
      element.scrollWidth > element.clientWidth;

    if (!canScroll) return;

    const isAtStart = element.scrollLeft <= 0;

    const isAtEnd =
      element.scrollLeft + element.clientWidth >=
      element.scrollWidth - 2;

    if (
      (!isAtStart && e.deltaY < 0) ||
      (!isAtEnd && e.deltaY > 0)
    ) {
      e.preventDefault();

      element.scrollBy({
        left: e.deltaY * 1.2,
        behavior: "smooth",
      });
    }
  };

  window.addEventListener("wheel", handleWheel, {
    passive: false,
  });

  return () => {
    window.removeEventListener("wheel", handleWheel);
  };

}, []);

  return (
    <section
      className="w-full h-screen bg-cover bg-center transition-all duration-1000 flex items-center px-[5px] sm:px-20 bbt-main-banner"
      style={{
        backgroundImage: `url(${slides[index].image})`,
      }}
    >
      <h4 className="text-[#ffffff/80]">For institutions, founders, and <br/>houses that intend to last.</h4>
      <div className="bbt-top-area">
      <h2 className="text-white text-5xl sm:text-7xl max-w-3xl">
       <span>Design</span>  that<br/><em>drives</em> growth.
      </h2>
      <Link href="/" className="bbt-btn">See it unfold   <Image
            src="/images/Arrow.png"
            alt="BBT Arrow"
            width={140}
            height={50}
            priority
          /></Link>
      </div>

      <Link href="/" className="mobile-btn align-center flex justify-center w-[100%]  gap-3 mt-3 text-[12.51px] leading-[18.77px] tracking-[1.75px] uppercase text-center text-white/90 md:hidden">View Case Studies   <Image
            src="/images/arrow-right.svg"
            alt="BBT Arrow"
            width={11}
            height={11}
            priority
            className="contain object-contain text-[#ffffff] rotate-180"
          /></Link>


      <div ref={awsRef} className="bbt-aws">
        <AreaWeServe/>
        <Whyus/>
        <TestimonialSlider/>
      </div>


      <Link href="/" className="bbt-btn-top"><span>Get in Touch</span>  <Image
            src="/images/big-arrow.png"
            alt="BBT Arrow"
            width={140}
            height={50}
            priority
          /></Link>
    </section>
  );
}