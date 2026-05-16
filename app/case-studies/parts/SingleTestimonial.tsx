"use client";

import Image from "next/image";
import Link from "next/link";

export default function SingleTestimonial() {
  return (
    <>
      <div className="bbt-part-box testimonial-box">
        
        <div className="bbt-testimonials ">

          {/* Slide Content */}
          <div className="fade-slide ">
            <span className="font-normal text-white/45
text-[10.43px]
leading-[15.64px]
tracking-[1.67px]
uppercase">Word from the client</span>
            {/* Quote */}
            <p className="text-[18.7px] text-[#ffffff] font-extralight italic font-serif h-[70%]
min-h-[136px]
flex
items-center">
              “Quiet is the most expensive luxury we know.”
            </p>

            {/* Footer */}
            <div className="testimonials-footer flex justify-between items-center border-t border-white/10 pt-4 mt-4">

              <div className="user-name font-normal
text-[12.51px]
leading-[18.77px]
tracking-[-0.17px]">
                R. Mehta
              </div>

              <div className="company-name text-white/45
font-normal
text-[10.43px]
leading-[15.64px]
tracking-[1.67px]
uppercase">
                MD · The Sixth Sense
              </div>

            </div>
          </div>

        </div>

      </div>
    </>
  );
}