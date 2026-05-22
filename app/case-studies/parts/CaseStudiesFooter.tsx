"use client";

import Link from "next/link";
import Image from "next/image";

import BlueLogo from "../../../public/images/bbt-blue.svg";

export default function CaseStudyFooter() {
  return (
    <footer className="bg-black border-t border-white/[0.06] px-4 py-15 md:px-16 md:py-20">

      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-20">

        {/* Brand */}
        <div>

         <Image
          src={BlueLogo}
          alt="Curve"
          className="curve-image block md:max-w-[90px] max-w-[70px] mb-4"
        />

          <p className="mt-2 text-[13px] leading-[1.8] text-white/20">
            BigBrandTheory Consulting Pvt. Ltd.
          </p>

          <p className="mt-3 text-[15px] leading-[2] text-white/35 max-w-[300px]">
            India’s leading brand strategy and identity consultancy,
            partnering with founders and leadership teams.
            Mumbai, India.
          </p>

        </div>

        {/* Featured Work */}
        <div>

          <h3 className="text-[11px] tracking-[2px] uppercase text-white/20 mb-6">
            Featured Work
          </h3>

          <ul className="space-y-3 text-white/45 text-[15px]">

            <li>
              <Link href="/">Garuda Aerospace</Link>
            </li>

            <li>
              <Link href="/">Trend Micro</Link>
            </li>

            <li>
              <Link href="/">Prime Max</Link>
            </li>

            <li>
              <Link href="/">Pahadi Story</Link>
            </li>

          </ul>

        </div>

        {/* Case Studies */}
        <div>

          <h3 className="text-[11px] tracking-[2px] uppercase text-white/20 mb-6">
            Case Studies
          </h3>

          <ul className="space-y-3 text-white/45 text-[15px]">

            <li>
              <Link href="/">Desi Naturi</Link>
            </li>

            <li>
              <Link href="/">Mantra Technologies</Link>
            </li>

            <li>
              <Link href="/">OTP</Link>
            </li>

            <li>
              <Link href="/">Spirit of the Tribe</Link>
            </li>

          </ul>

        </div>

        {/* Connect */}
        <div>

          <h3 className="text-[11px] tracking-[2px] uppercase text-white/20 mb-6">
            Connect
          </h3>

          <ul className="space-y-3 text-white/45 text-[15px]">

            <li>
              <Link href="/">LinkedIn</Link>
            </li>

            <li>
              <Link href="/">Instagram</Link>
            </li>

            <li>
              <a href="mailto:info@bigbrandtheory.in">
                info@bigbrandtheory.in
              </a>
            </li>

          </ul>

        </div>

      </div>

      {/* Bottom */}
      <div className="mt-16 pt-6 border-t border-white/[0.06]">

        <p className="text-[11px] tracking-[1.5px] uppercase text-white/15">
          © 2026 BigBrandTheory Consulting Pvt. Ltd. All rights reserved.
        </p>

      </div>

    </footer>
  );
}