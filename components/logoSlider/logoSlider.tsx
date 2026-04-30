"use client";

import Image from "next/image";

const logos = [
  "/images/client/c1.png",
  "/images/client/c2.png",
  "/images/client/c3.png",
  "/images/client/c2.png",
  "/images/client/c1.png",
  "/images/client/c2.png",
  "/images/client/c1.png",
  "/images/client/c2.png",
  "/images/client/c1.png",
  "/images/client/c2.png",
  "/images/client/c1.png",
  "/images/client/c2.png",
   "/images/client/c1.png",
  "/images/client/c2.png",
  "/images/client/c3.png",
  "/images/client/c2.png",
  "/images/client/c1.png",
  "/images/client/c2.png",
  "/images/client/c1.png",
  "/images/client/c2.png",
  "/images/client/c1.png",
  "/images/client/c2.png",
  "/images/client/c1.png",
  "/images/client/c2.png",
];

export default function LogoSlider() {
  return (
    <div className="w-full overflow-hidden bbt-footer">
      <div className="flex w-max animate-marquee bbt-clients items-center">
        
        {/* First Set */}
        {logos.map((logo, index) => (
          <div
            key={`first-${index}`}
            className="bbt-client-wrap shrink-0"
          >
            <Image
              src={logo}
              alt={`Client Logo ${index + 1}`}
              className="bbt--client"
              width={140}
              height={18}
            />
          </div>
        ))}

        {/* Duplicate Set */}
        {logos.map((logo, index) => (
          <div
            key={`second-${index}`}
            className="bbt-client-wrap shrink-0"
          >
            <Image
              src={logo}
              alt={`Client Logo Duplicate ${index + 1}`}
              className="bbt--client"
              width={140}
              height={18}
            />
          </div>
        ))}

      </div>
    </div>
  );
}