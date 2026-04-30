"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import TestimonialSlider from "./parts/testimonials";
import AreaWeServe from "./parts/areaWeSearve";
import Whyus from "./parts/whyUs";

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

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      className="w-full h-screen bg-cover bg-center transition-all duration-1000 flex items-center px-20 bbt-main-banner"
      style={{
        backgroundImage: `url(${slides[index].image})`,
      }}
    >
      <h4>For institutions, founders, and <br/>houses that intend to last.</h4>
      <div className="bbt-top-area">
      <h2 className="text-white text-7xl max-w-3xl">
       Design that <br/><em>drives</em> growth
      </h2>
      <Link href="/" className="bbt-btn">See it unfold   <Image
            src="/images/Arrow.png"
            alt="BBT Arrow"
            width={140}
            height={50}
            priority
          /></Link>
      </div>


      <div className="bbt-aws">
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
