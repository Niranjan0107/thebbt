import { cases } from "@/lib/cases";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import VideoIcon from "../../../public/video.svg";
import Back from "../../../public/back.svg";
import DownArrow from "../../../public/down-arrow.svg";
import TestimonialSlider from "@/app/case-studies/parts/testimonials";
import RelatedCases from "../parts/relatedCases";
import ProjectNavigation from "../parts/projectNavigation";
import SingleTestimonial from "../parts/SingleTestimonial";
import CurveImage from "../../../public/images/curve.svg";
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const project = cases.find((c) => c.slug === slug);

  const relatedCases = cases.filter((item) => item.slug !== project?.slug);

  if (!project) return notFound();




  
  return (
    <>
      <div
        className=" text-white h-screen px-0 md:px-16 bg-no-repeat bg-cover bg-right-top relative "
        style={{ backgroundImage: `url(${project.image})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        <div className="project-wrap  h-screen relative z-10 pb-30 h-full flex flex-col justify-between">
          <div className="single-header hidden  md:flex align-center justify-between pt-15 md:pt-6">
            <span className=" tracking-widest font-inter font-medium text-[11.47px] leading-[17.2px] tracking-[2.06px] uppercase text-center text-white/60">
              <Link href="/case-studies" className="flex items-center  gap-2">
                {" "}
                <Image
                  src={Back}
                  alt="BBT Video"
                  width={16}
                  height={16}
                  priority
                />{" "}
                INDEX{" "}
              </Link>
            </span>

            <span className=" tracking-widest font-inter font-medium text-[11.47px] leading-[17.2px] tracking-[2.06px] uppercase text-center text-white/60">
              2026
            </span>
          </div>
          <div className="single-content pt-20 md:pt-0 flex-col md:flex-row flex items-end justify-between 4xl:max-w-[90%]">
            <div className="project-details max-w-xl px-4 md:px-0">
              <span className="font-normal text-[10.43px] leading-[15.64px] tracking-[3.34px] uppercase text-[#FFFFFF8C]">
                {project.services}
              </span>
              <h1 className="text-[38px] md:text-5xl lg:text-6xl 2xl:text-7xl mt-2 mb-4 font-medium leading-tight">
                {project.title}
              </h1>

              <span className="mt-6 text-neutral-300 max-w-lg text-[16px]">
                {project.description}
              </span>
              <div className="mt-8 actions flex items-center gap-4 text-neutral-400 text-xs uppercase">
                <button className="v-btn border border-[1.04px] border-white/30 px-3 py-2 tracking-wide hover:bg-black hover:text-white transition text-white/90 ">
                  <Link
                    href="/"
                    className="flex items-center font-medium text-[12.51px] leading-[18.77px] tracking-[1.75px] uppercase text-center color-white  gap-3"
                  >
                    {" "}
                    <Image
                      src={VideoIcon}
                      alt="BBT Video"
                      width={30}
                      height={30}
                      priority
                    />{" "}
                    <span className="font-medium text-[12.51px] leading-[18.77px] tracking-[1.75px] uppercase text-center text-white/90">
                      WATCH THE CASE FILM
                    </span>{" "}
                  </Link>
                </button>

                <span className="hidden md:flex  font-normal text-[10.43px] leading-[15.64px] tracking-[3.34px] uppercase text-[#FFFFFF8C]">
                  or scroll to read
                </span>
              </div>
            </div>

            <div className="project-testimonials 1">
              <SingleTestimonial />
            </div>
          </div>
          <div className="project-continue absolute bottom-5 left-1/2 -translate-x-1/2 hidden md:flex">
            <Link
              href="#more-info"
              className="flex flex-col items-center gap-1  font-normal text-[10.43px] leading-[15.64px] tracking-[3.34px] uppercase text-[#FFFFFF8C]"
            >
              Continue
              <Image
                src={DownArrow}
                alt="BBT Down Arrow"
                width={15}
                height={15}
                priority
              />
            </Link>
          </div>
        </div>
      </div>


<ProjectNavigation currentSlug={project.slug} />





      <div className=" bg-[#0A0A0A] bottom-section pt-1 md:pt-10" id="more-info">

      {/* intro section */}
<section
  className="
    border-white/[0.06]
    py-[60px] md:py-[120px]
    px-4 md:px-1

    bg-[linear-gradient(180deg,_#1F2DDB_0%,_#000002_100%)]

    md:bg-none
    md:bg-[#0A0A0A]
  "
>
  <div className="flex flex-col xl:flex-row">

    {/* LEFT LABEL */}
    <div className="xl:w-[25%] mb-10 xl:mb-0 text-center">

      <span className="font-inter font-medium text-[11px] leading-[16.5px] tracking-[2.4px] uppercase text-white/35">
        01 — The Brief
      </span>

    </div>

    {/* RIGHT CONTENT */}
    <div className="xl:w-[650px] max-w-[650px] ml-ato text-center md:text-left">

      {/* Heading */}
      <h2 className="font-inter font-light  text-[32px] md:text-[58px] lg:text-[60px] leading-[1.05] tracking-[-2px] text-white max-w-[780px]">
        {project.abouteading}
      </h2>

      {/* Paragraph */}
      <p className="mt-[26px] max-w-[620px] font-inter font-normal text-[16px] md:text-[18px] leading-[1.55] tracking-[-0.3px] text-white/70">
      
       {project.aboutDescription} 
      </p>

      {/* CTA */}
      <button className="mt-[28px] text-[#ffffff] md:text-[#0D52DB] font-inter font-medium text-[16px] md:text-[18px] leading-[1.5] tracking-[-0.2px] hover:opacity-70 transition">
        Read More
      </button>

    </div>

  </div>

</section>
      {/* intro section */}


    <img src={project.projectImage1} className="w-full h-auto mb-4"/>
    <img src={project.projectImage2} className="w-full h-auto mb-4"/>
<img src={project.projectImage3} className="w-full h-auto mb-4"/>
    <img src={project.projectImage4} className="w-full h-auto mb-4"/>

{/* Saying */}
<section className="quote-section border-t border-white/[0.06] py-[60] md:py-[160px] overflow-hidden">

  <div className="max-w-[1000px] mx-auto px-6 lg:px-12 text-center md:text-left">

    {/* Quote */}
    <h2 className="flex md:block font-source-serif font-light italic text-[36px] leading-[1.4] md:text-[78px] lg:text-[78px] md:leading-[1.1] tracking-[-2.5px] text-white max-w-[980px]">
<Image
  src={CurveImage}
  alt="Curve"
  className="curve-image block md:hidden"
/>
      <em>“{project.quote}”</em>

    </h2>

    {/* Meta */}
    <div className="mt-[20px] md:mt-[42px]">

      <span className="font-inter font-[200] text-[12px] md:text-[18px] leading-[16px] tracking-[1.9px] uppercase text-white/50">

        —  {project.quoteBy} 

      </span>

    </div>

  </div>

</section>
{/* Saying */}


<img src={project.projectImage4} className="w-full h-auto mb-4"/>
    <img src={project.projectImage5} className="w-full h-auto mb-4"/>
<img src={project.projectImage6} className="w-full h-auto mb-4"/>
    <img src={project.projectImage7} className="w-full h-auto mb-4"/>
<img src={project.projectImage8} className="w-full h-auto mb-4"/>
    <img src={project.projectImage9} className="w-full h-auto mb-4"/>
    <img src={project.projectImage10} className="w-full h-auto mb-4"/>
<img src={project.projectImage11} className="w-full h-auto mb-4"/>

        {/* Credit */}
        <div className="credits-section py-15 md:py-32 text-white px-4 md:px-16  ">
          <div className="flex flex-col lg:flex-row justify-between gap-20">
            {/* Left */}
            <div className="w-full lg:w-[20%]">
              <p className="uppercase text-[11px] tracking-[3px] text-white/40">
                02 — Credits
              </p>
            </div>

            {/* Right */}
            <div className="w-full lg:w-[75%] grid grid-cols-1 md:grid-cols-2 gap-x-10">
              {/* Item */}
              <div className="border-t border-white/10 py-6 flex justify-between">
                <span className="uppercase text-[11px] tracking-[2px] text-white/40">
                  Strategy
                </span>

                <span className="text-white text-left md:w-[200px]">
                  {project.Strategy} 
                </span>
              </div>

              {/* Item */}
              <div className="border-t border-white/10 py-6 flex justify-between">
                <span className="uppercase text-[11px] tracking-[2px] text-white/40">
                  Identity
                </span>

                <span className="text-white text-left md:w-[200px]">
                  {project.Identity} 
                </span>
              </div>

              {/* Item */}
              <div className="border-t border-white/10 py-6 flex justify-between">
                <span className="uppercase text-[11px] tracking-[2px] text-white/40">
                  Type Design
                </span>

                <span className="text-white text-left md:w-[200px]"> {project.typeDesign} </span>
              </div>

              {/* Item */}
              <div className="border-t border-white/10 py-6 flex justify-between">
                <span className="uppercase text-[11px] tracking-[2px] text-white/40">
                  Photography
                </span>

                <span className="text-white text-left md:w-[200px]"> {project.Photography} </span>
              </div>

              {/* Item */}
              <div className="border-t border-white/10 py-6 flex justify-between">
                <span className="uppercase text-[11px] tracking-[2px] text-white/40">
                  Editorial
                </span>

                <span className="text-white text-left md:w-[200px]"> {project.Editorial} </span>
              </div>

              {/* Item */}
              <div className="border-t border-white/10 py-6 flex justify-between">
                <span className="uppercase text-[11px] tracking-[2px] text-white/40">
                  Digital
                </span>

                <span className="text-white text-left md:w-[200px]">
                   {project.Digital} 
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* Credit */}

<RelatedCases currentSlug={project.slug} />     

 </div>
    </>
  );
}
