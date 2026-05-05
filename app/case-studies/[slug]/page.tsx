import { cases } from "@/lib/cases";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import VideoIcon from "../../../public/video.svg";
import Back from "../../../public/back.svg";
import DownArrow from "../../../public/down-arrow.svg";
import TestimonialSlider from "@/app/case-studies/parts/testimonials";
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const project = cases.find((c) => c.slug === slug);

  if (!project) return notFound();

  return (
    <div
      className=" text-white h-screen bg-no-repeat bg-cover bg-right-top relative "
      style={{ backgroundImage: `url(${project.image})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      <div className="project-wrap relative z-10 p-16 pb-30 h-full flex flex-col justify-between">
        <div className="single-header flex align-center justify-between">
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
        <div className="single-content  flex items-end justify-between 2xl:max-w-[90%]">
          <div className="project-details max-w-xl ">
            <span className="font-normal text-[10.43px] leading-[15.64px] tracking-[3.34px] uppercase text-[#FFFFFF8C]">
              {project.services}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl mt-2 mb-4 font-medium leading-tight">
              {project.title.split(" ").slice(0, -1).join(" ")}
              <span className="italic block">
                {project.title.split(" ").slice(-1)}
              </span>
            </h1>

            <span className="mt-6 text-neutral-300 max-w-lg">
              {project.description}
            </span>
            <div className="mt-8 actions flex items-center gap-4 text-neutral-400 text-xs uppercase">
              <button className="border border-[1.04px] border-white/30 px-3 py-2 tracking-wide hover:bg-black hover:text-white transition text-white/90 ">
                <Link href="/" className="flex items-center font-medium text-[12.51px] leading-[18.77px] tracking-[1.75px] uppercase text-center color-white  gap-3">
                  {" "}
                  <Image
                    src={VideoIcon}
                    alt="BBT Video"
                    width={30}
                    height={30}
                    priority
                  />{" "}
                  <span className="font-medium text-[12.51px] leading-[18.77px] tracking-[1.75px] uppercase text-center text-white/90">WATCH THE CASE FILM</span>{" "}
                </Link>
              </button>

              <span className="font-normal text-[10.43px] leading-[15.64px] tracking-[3.34px] uppercase text-[#FFFFFF8C]">
                or scroll to read
              </span>
            </div>
          </div>

          <div className="project-testimonials 1">

            <TestimonialSlider/>
          </div>



          
        </div>
   <div className="project-continue absolute bottom-5 left-1/2 -translate-x-1/2">
  
  <span className="flex flex-col items-center gap-1  font-normal text-[10.43px] leading-[15.64px] tracking-[3.34px] uppercase text-[#FFFFFF8C]">
    Continue
    <Image
      src={DownArrow}
      alt="BBT Down Arrow"
      width={15}
      height={15}
      priority
    />
  </span>

</div>
      </div>
    </div>
  );
}
