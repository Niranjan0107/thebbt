"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const testimonials = [
  {
    quote:
      "They rebuilt the language of our company — quietly, and with absolute conviction.",
    name: "GAUTAMI NAIR",
    company: "PRAANA",
  },
  {
    quote:
      "They brought clarity to what felt complex. Every decision just made sense.",
    name: "CHRISTINA FERNANDO",
    company: "PRIME",
  },
  {
    quote:
      "Their process changed the way we thinks about design completely.",
    name: "ALEX MARTIN",
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

      <div className="bbt-part-box testimonial-box">
        <div className="bbt-testimonials">
            <div className="bbt-part-header">
            <span>03</span>
            <Link href="/">
          <Image
            src="/images/Arrow.png"
            alt="BBT Arrow"
            width={140}
            height={50}
            priority
          />
        </Link>
        </div>
          {/* Slide Content */}
          <div key={active} className="fade-slide">        
            {/* Quote */}
            <p className="text-[18.7px] text-[#ffffff] font-extralight italic font-serif">
              “{item.quote}”
            </p>

            {/* Footer */}
            <div className="testimonials-footer">
            <div className="user-name">
              {item.name}
            </div>

            <div className="company-name">
              {item.company}
            </div>
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