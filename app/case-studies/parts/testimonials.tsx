"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const testimonials = [
  {
    quote:
      "They rebuilt the language of our company — quietly, and with absolute conviction.",
    name: "Vatsal",
    company: "PRAANA",
  },
  {
    quote:
      "They brought clarity to what felt complex. Every decision just made sense.",
    name: "Cristina Fernando",
    company: "PRIME",
  },
  {
    quote:
      "Their process changed the way we thinks about design completely.",
    name: "Gaurav Garg",
    company: "NOVA",
  },
];

export default function TestimonialSlider() {
  const [active, setActive] = useState(0);
  const duration = 6000;

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, duration);

    return () => clearInterval(timer);
  }, []);

  const item = testimonials[active];

  return (
    <>
      <style jsx>{`
        @keyframes fillLine {
          from {
            width: 0%;
          }
          to {
            width: 100%;
          }
        }

        .progress-line {
          animation: fillLine 6s linear forwards;
        }

        @keyframes fadeSlide {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .fade-slide {
          animation: fadeSlide 0.6s ease;
        }
      `}</style>

      <div className="bbt-part-box testimonial-box h-full border border-[1px] border-[#ffffff1a]">
        <div className="bbt-testimonials-full flex-col h-screen flex ">
            <div className="testimonials-heading mb-5">
                <span className="font-inter font-normal text-[10.43px] leading-[15.64px] tracking-[2.29px] uppercase text-white/50">Word from the client</span>
            </div>
          {/* Slide Content */}
          <div key={active} className="fade-slide">        
            {/* Quote */}
            <p className="font-source-serif font-light italic text-[20px] leading-[30.15px] tracking-[-0.21px]">
              “{item.quote}”
            </p>

    
          </div>
        {/* Footer */}
            <div className="testimonials-footer border-t border-t-[1.04px] border-t-[#FFFFFF1A] pt-5">
            <div className="user-name font-normal text-[10.43px] leading-[15.64px] tracking-[3.34px]  text-[#ffffff] capitalize">
              {item.name}
            </div>

            <div className="company-name font-normal text-[10.43px] leading-[15.64px] tracking-[3.34px] uppercase text-[#FFFFFF8C]">
              {item.company}
            </div>
            </div>
          {/* Bottom Progress Border - resets every slide */}
          <div
            key={`line-${active}`}
            className="absolute bottom-0 left-0 h-[2px] bg-white progress-line"
          />
        </div>
      </div>
    </>
  );
}