import { cases } from "@/lib/cases";
import { notFound } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination"
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
import BlueLogo from "../../../public/images/bbt-blue.svg";
import ImageCarousel from "../parts/ImageCarousel";
import ImageCarouselLtr from "../parts/ImageCarouselLtr";
import CaseStudyFooter from "../parts/CaseStudiesFooter";

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

      <div
        className=" bg-[#02020d]  bottom-section pt-1 md:pt-2"
        id="more-info"
      >
        {/* intro section */}
        <section
          className="
    border-white/[0.06]
    py-[60px] md:py-[70px]

    bg-[linear-gradient(180deg,_#1F2DDB_0%,_#000002_100%)]
  "
        >
          <div className="flex flex-col md:flex-row bg-white/10 px-6 mx-5 md:px-6 py-10 md:mx-16">
            {/* LEFT LABEL */}
            <div className="xl:w-[25%] mb-10 xl:mb-0 md:text-left text-center"> 
              <span className="font-inter font-medium text-[11px] leading-[16.5px] tracking-[2.4px] uppercase text-white/60">
                01 — The Brief
              </span>
            </div>

            {/* RIGHT CONTENT */}
            <div className="xl:w-[650px] max-w-[650px] ml-ato text-center md:text-left">
              {/* Heading */}
              <h2 className="font-inter font-light  text-[32px] md:text-[58px] lg:text-[60px] leading-[1.05] tracking-[0px] text-white max-w-[780px]">
                {project.abouteading}
              </h2>

              {/* Paragraph */}
              <p className="mt-[26px] max-w-[620px] font-inter font-normal text-[16px] md:text-[18px] leading-[1.55] tracking-[-0.3px] text-white/70">
                {project.aboutDescription}
              </p>

              {/* CTA */}
              <button className="mt-[28px] text-[#0D52DB] font-inter font-medium text-[16px] md:text-[18px] leading-[1.5] tracking-[-0.2px] hover:opacity-70 transition">
                Read More
              </button>
            </div>
          </div>
        </section>
        {/* intro section */}
        
        
        
        
        <div className="case-studies-content px-4 md:px-16 bg-[#02020d]">


        <img src={project.projectImage1} className="w-full h-auto md:h-full mb-4 reveal-section" />

       {project.heroVideo1 ? (
  <div className="video-wrapper reveal-section mb-4">
    <video
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      className="w-full h-full object-cover"
    >
      <source
        src={project.heroVideo1}
        type="video/mp4"
      />
    </video>
  </div>
) : null}

       {project.projectImage2 && (
  <img
    src={project.projectImage2}
    className="w-full h-auto md:h-full object-cover mb-4 reveal-section"
  />
)}

{project.projectImage3 && (
  <img
    src={project.projectImage3}
    className="w-full h-auto md:h-full object-cover mb-4 reveal-section"
  />
)}

{project.projectImage4 && (
  <img
    src={project.projectImage4}
    className="w-full h-auto md:h-full object-cover mb-4 reveal-section"
  />
)}



{(
  project.projectImage5 &&
  project.projectImage6 &&
  project.heroVideo2 &&
  project.projectImage7 &&
  project.projectImage8 &&
  project.heroVideo3
) && (
  <div className="flex mb-4 gap-4 overflow-x-auto md:overflow-visible reveal-section md:hidden">

    <span className="min-w-[90%] md:min-w-0 md:basis-[calc(50%-8px)] min-h-[368px] md:min-h-[665px]">
      <img
        src={project.projectImage5}
        className="w-full h-auto h-full object-cover"
      />
    </span>

    <span className="min-w-[90%] md:min-w-0 md:basis-[calc(50%-8px)] min-h-[368px] md:min-h-[665px]">
      <img
        src={project.projectImage6}
        className="w-full h-auto h-full object-cover"
      />
    </span>

    <div className="video-wrapper min-w-[90%] md:min-w-0 md:basis-[calc(50%-8px)] min-h-[368px] md:min-h-[665px]">
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="w-full h-full object-cover"
      >
        <source
          src={project.heroVideo2}
          type="video/mp4"
        />
      </video>
    </div>

    <span className="min-w-[90%] md:min-w-0 md:basis-[calc(50%-8px)] min-h-[368px] md:min-h-[665px]">
      <img
        src={project.projectImage7}
        className="w-full h-auto object-cover h-full"
      />
    </span>

    <span className="min-w-[90%] md:min-w-0 md:basis-[calc(50%-8px)] min-h-[368px] md:min-h-[665px]">
      <img
        src={project.projectImage8}
        className="w-full h-auto h-full object-cover"
      />
    </span>

    <div className="video-wrapper min-w-[90%] md:min-w-0 md:basis-[calc(50%-8px)] min-h-[368px] md:min-h-[665px]">
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="w-full h-full object-cover"
      >
        <source
          src={project.heroVideo3}
          type="video/mp4"
        />
      </video>
    </div>

  </div>
)}


      {/* image-image */}

      
       {(project.projectImage5 && project.projectImage6) && (
  <div className="md:flex mb-4 gap-4 overflow-x-auto md:overflow-visible  reveal-section hidden">

    {project.projectImage5 && (
      <span className="min-w-[90%] md:min-w-0 md:basis-[calc(50%-8px)] min-h-[368px] md:min-h-[665px]">
        <img
          src={project.projectImage5}
          className="w-full h-auto h-full object-cover"
        />
      </span>
    )}

    {project.projectImage6 && (
      <span className="min-w-[90%] md:min-w-0 md:basis-[calc(50%-8px)] min-h-[368px] md:min-h-[665px]">
        <img
          src={project.projectImage6}
          className="w-full h-auto h-full object-cover"
        />
      </span>
    )}

  </div>
)}

{/* video-image */}

       {(project.heroVideo2 && project.projectImage7) && (
  <div className="md:flex gap-4 mb-4 reveal-section overflow-x-auto md:overflow-visible hidden">

     {project.heroVideo2 ? (
  <div className="video-wrapper min-w-[90%] md:min-w-0 md:basis-[calc(50%-8px)] min-h-[368px] md:min-h-[665px]">
    <video
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      className="w-full h-full object-cover"
    >
      <source
        src={project.heroVideo2}
        type="video/mp4"
      />
    </video>
  </div>
) : null}

    {project.projectImage7 && (
      <span className="min-w-[90%] md:min-w-0 md:basis-[calc(50%-8px)] min-h-[368px] md:min-h-[665px]">
        <img
          src={project.projectImage7}
          className="w-full h-auto object-cover h-full"
        />
      </span>
    )}

  </div>
)}
      
      
      
      {/* image-video */}

       {(project.heroVideo3 && project.projectImage8) && (
  <div className="md:flex gap-4 mb-4 overflow-x-auto md:overflow-visible reveal-section hidden">


    {project.projectImage8 && (
      <span className="min-w-[90%] md:min-w-0 md:basis-[calc(50%-8px)] min-h-[368px] md:min-h-[665px]">
        <img
          src={project.projectImage8}
          className="w-full h-auto h-full object-cover"
        />
      </span>
    )}

     {project.heroVideo3 ? (
  <div className="video-wrapper min-w-[90%] md:min-w-0 md:basis-[calc(50%-8px)] min-h-[368px] md:min-h-[665px]">
    <video
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      className="w-full h-full object-cover"
    >
      <source
        src={project.heroVideo3}
        type="video/mp4"
      />
    </video>
  </div>
) : null}


  </div>
)}
      
      
       {project.projectImage9 && (
             <img src={project.projectImage9} className="w-full h-auto md:h-full mb-4 reveal-section" />
             )}


       {project.heroVideo4 ? (
  <div className="video-wrapper mb-4 reveal-section">
    <video
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      className="w-full h-full object-cover"
    >
      <source
        src={project.heroVideo4}
        type="video/mp4"
      />
    </video>
  </div>
) : null}



       {project.projectImage10 && (
  <img
    src={project.projectImage10}
    className="w-full h-auto md:h-full mb-4 reveal-section"
  />
)}



      
         {/* image-image-image */}

      
       {(project.projectPoster1 && project.projectPoster2 && project.projectPoster3) && (
  <div className="flex gap-4 mb-4 overflow-x-auto md:overflow-visible  reveal-section">

    {project.projectPoster1 && (
      <span className="min-w-[90%] md:min-w-[31%] ">
        <img
          src={project.projectPoster1}
          className="w-full h-auto object-cover md:h-full min-h-[368px] md:min-h-[665px]  md:h-full"
        />
      </span>
    )}

    {project.projectPoster2 && (
      <span className="min-w-[90%] md:min-w-[31%]">
        <img
          src={project.projectPoster2}
          className="w-full h-auto object-cover md:h-full min-h-[368px] md:min-h-[665px]  md:h-full"
        />
      </span>
    )}

      {project.projectPoster3 && (
      <span className="min-w-[90%] md:min-w-[31%]">
        <img
          src={project.projectPoster3}
          className="w-full h-auto md:h-full object-cover min-h-[368px] md:min-h-[665px]  md:h-full"
        />
      </span>
    )}

  </div>
)}





       {project.projectImage11 && (
  <img
    src={project.projectImage11}
    className="w-full h-auto md:h-full mb-4 reveal-section"
  />
)}

      
      
      
       {project.heroVideo5 ? (
  <div className="video-wrapper reveal-section mb-4">
    <video
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      className="w-full h-full object-cover"
    >
      <source
        src={project.heroVideo5}
        type="video/mp4"
      />
    </video>
  </div>
) : null}

      
      
      


 {/* video-video-video */}

      
       {(project.heroVideo6 && project.heroVideo7 && project.heroVideo8) && (
  <div className="flex gap-4 reveal-section mb-4 overflow-x-auto md:overflow-visible">

   

   {project.heroVideo6 ? (
  <div className="video-wrapper  min-w-[90%] md:min-w-[31%]  min-h-[633px] md:min-h-[665px]">
    <video
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      className="w-full h-full object-cover"
    >
      <source
        src={project.heroVideo6}
        type="video/mp4"
      />
    </video>
  </div>
) : null}

 {project.heroVideo7 ? (
  <div className="video-wrapper min-w-[90%] md:min-w-[31%]   min-h-[633px] md:min-h-[665px]">
    <video
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      className="w-full h-full object-cover"
    >
      <source
        src={project.heroVideo7}
        type="video/mp4"
      />
    </video>
  </div>
) : null}

 {project.heroVideo8 ? (
  <div className="video-wrapper min-w-[90%] md:min-w-[31%]    min-h-[633px] md:min-h-[665px]">
    <video
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      className="w-full h-full object-cover"
    >
      <source
        src={project.heroVideo8}
        type="video/mp4"
      />
    </video>
  </div>
) : null}

  </div>
)}





  {project.projectImage12 && (
  <img
    src={project.projectImage12}
    className="w-full h-auto md:h-full mb-4 reveal-section"
  />
)}

      
      
      
       {project.heroVideo9 ? (
  <div className="video-wrapper reveal-section mb-4">
    <video
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      className="w-full h-full object-cover"
    >
      <source
        src={project.heroVideo9}
        type="video/mp4"
      />
    </video>
  </div>
) : null}






 {/* image-video-image */}

       {(project.projectImage13 && project.heroVideo10 && project.projectImage14) && (
  <div className="flex gap-4 mb-4 overflow-x-auto md:overflow-visible  reveal-section">

    {project.projectImage13 && (
      <span className=" min-w-[90%] md:min-w-[31%]  min-h-[633px] md:min-h-[665px]">
        <img
          src={project.projectImage13}
          className="w-full h-auto md:h-full object-cover min-h-[633px] md:min-h-[665px]  md:h-full"
        />
      </span>
    )}

    {project.heroVideo10 ? (
  <div className="video-wrapper min-w-[90%] md:min-w-[31%]   min-h-[633px] md:min-h-[665px]">
    <video
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      className="w-full h-full object-cover"
    >
      <source
        src={project.heroVideo10}
        type="video/mp4"
      />
    </video>
  </div>
) : null}


      {project.projectImage14 && (
      <span className=" min-w-[90%] md:min-w-[31%] min-h-[368px] md:min-h-[665px]">
        <img
          src={project.projectImage14}
          className="w-full h-auto md:h-full object-cover min-h-[633px] md:min-h-[665px]  md:h-full"
        />
      </span>
    )}

  </div>
)}




{project.projectImage15 && (
  <img
    src={project.projectImage15}
    className="w-full h-auto md:h-full mb-4 reveal-section"
  />
)}

      
      
      
       {project.heroVideo11 ? (
  <div className="video-wrapper reveal-section mb-4">
    <video
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      className="w-full h-full object-cover"
    >
      <source
        src={project.heroVideo11}
        type="video/mp4"
      />
    </video>
  </div>
) : null}






{/* video-image */}

       {(project.heroVideo12 && project.projectImage16) && (
  <div className="flex gap-4 mb-4 reveal-section overflow-x-auto md:overflow-visible">

     {project.heroVideo12 ? (
  <div className="video-wrapper min-w-[90%] md:min-w-0 md:basis-[calc(35%-8px)] min-h-[368px] md:min-h-[665px]">
    <video
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      className="w-full h-full object-cover"
    >
      <source
        src={project.heroVideo12}
        type="video/mp4"
      />
    </video>
  </div>
) : null}

    {project.projectImage16 && (
      <span className="min-w-[90%] md:min-w-0 md:basis-[calc(65%-8px)] min-h-[368px] md:min-h-[665px]">
        <img
          src={project.projectImage16}
          className="w-full h-auto object-cover h-full"
        />
      </span>
    )}

  </div>
)}
      
      
      
      {/* image-image */}

       {(project.projectImage17 && project.projectImage18) && (
  <div className="flex gap-4 mb-4 overflow-x-auto md:overflow-visible reveal-section">


    {project.projectImage17 && (
      <span className="min-w-[90%] md:min-w-0 md:basis-[calc(35%-8px)] min-h-[368px] md:min-h-[665px]">
        <img
          src={project.projectImage17}
          className="w-full h-auto h-full object-cover"
        />
      </span>
    )}

      {project.projectImage18 && (
      <span className="min-w-[90%] md:min-w-0 md:basis-[calc(65%-8px)] min-h-[368px] md:min-h-[665px]">
        <img
          src={project.projectImage18}
          className="w-full h-auto h-full object-cover"
        />
      </span>
    )}


  </div>
)}
      



{project.projectImage19 && (
  <img
    src={project.projectImage19}
    className="w-full h-auto md:h-full mb-4 reveal-section"
  />
)}

      
      
      
       {project.heroVideo13 ? (
  <div className="video-wrapper reveal-section mb-4">
    <video
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      className="w-full h-full object-cover"
    >
      <source
        src={project.heroVideo13}
        type="video/mp4"
      />
    </video>
  </div>
) : null}




{/* image-image */}

       {(project.projectImage20 && project.projectImage21) && (
  <div className="flex gap-4 mb-4 reveal-section ">

      {project.projectImage20 && (
      <span className="w-[50%] basis-[calc(50%-8px)] md:min-w-0 md:basis-[calc(65%-8px)] min-h-[293px] md:min-h-[665px]">
        <img
          src={project.projectImage20}
          className="w-full h-auto h-full object-cover"
        />
      </span>
    )}

    {project.projectImage21 && (
      <span className="w-[50%] basis-[calc(50%-8px)] md:min-w-0 md:basis-[calc(35%-8px)] min-h-[293px] md:min-h-[665px]">
        <img
          src={project.projectImage21}
          className="w-full h-auto object-cover h-full"
        />
      </span>
    )}

  </div>
)}
      
      
      
      {/* image-video */}

       {(project.projectImage22 && project.heroVideo14) && (
  <div className="flex gap-4 mb-4 overflow-x-auto md:overflow-visible reveal-section">


    {project.projectImage22 && (
      <span className="min-w-[90%] md:min-w-0 md:basis-[calc(65%-8px)] min-h-[368px] md:min-h-[665px]">
        <img
          src={project.projectImage22}
          className="w-full h-auto h-full object-cover"
        />
      </span>
    )}

   

      {project.heroVideo14 ? (
  <div className="video-wrapper min-w-[90%] md:min-w-0 md:basis-[calc(35%-8px)] min-h-[368px] md:min-h-[665px]">
    <video
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      className="w-full h-full object-cover"
    >
      <source
        src={project.heroVideo14}
        type="video/mp4"
      />
    </video>
  </div>
) : null}


  </div>
)}
      







{project.projectImage23 && (
  <img
    src={project.projectImage23}
    className="w-full h-auto md:h-full mb-4 reveal-section"
  />
)}

      
      
      
       {project.heroVideo15 ? (
  <div className="video-wrapper reveal-section mb-4">
    <video
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      className="w-full h-full object-cover"
    >
      <source
        src={project.heroVideo15}
        type="video/mp4"
      />
    </video>
  </div>
) : null}






{/* image-grid */}

{(project.projectImage24 &&
  project.projectImage25) && (

  <div className="flex flex-col-reverse md:flex-row  gap-4 mb-4 reveal-section overflow-x-auto md:overflow-visible">

    <span className="w-[100%] md:min-w-0 md:basis-[calc(65%-8px)] min-h-[368px] md:min-h-[665px]">
      <img
        src={project.projectImage24}
        className="w-full h-auto h-full object-cover min-h-[368px] md:min-h-[665px] "
      />
    </span>

    <span className="w-[100%] flex gap-4 md:block md:min-w-0 md:basis-[calc(35%-8px)] min-h-[293px] md:min-h-[665px]">
      <img
        src={project.projectImage25}
        className="w-[calc(50%-8px)] md:w-full h-[293px] object-cover md:max-h-[325px] md:mb-4 md:h-full"
      />
      <img
        src={project.projectImage26}
        className="w-[calc(50%-8px)] md:w-full h-[293px] object-cover md:max-h-[325px]  md:h-full"
      />
    </span>

  </div>

)}

{/* image-grid */}

{/* image-grid */}

{(project.projectImage27 &&
  project.projectImage28) && (

  <div className="flex flex-col md:flex-row  gap-4 mb-4 reveal-section overflow-x-auto md:overflow-visible">

    <span className="w-[100%] flex gap-4 md:block md:min-w-0 md:basis-[calc(35%-8px)] min-h-[293px] md:min-h-[665px]">
      <img
        src={project.projectImage27}
        className="w-[calc(50%-8px)] md:w-full h-[293px] object-cover md:max-h-[325px] md:mb-4 md:h-full"
      />
      <img
        src={project.projectImage28}
        className="w-[calc(50%-8px)] md:w-full h-[293px] object-cover md:max-h-[325px]  md:h-full"
      />
    </span>

    <span className="w-[100%] md:min-w-0 md:basis-[calc(65%-8px)] min-h-[368px] md:min-h-[665px] ">
      <img
        src={project.projectImage29}
        className="w-full h-auto h-full object-cover min-h-[368px] md:min-h-[665px]"
      />
    </span>

  </div>

)}

    {/* image-grid */} 
      
      


{project.projectImage30 && (
  <img
    src={project.projectImage30}
    className="w-full h-auto md:h-full mb-4 reveal-section"
  />
)}

      
      
      
       {project.heroVideo16 ? (
  <div className="video-wrapper reveal-section mb-4">
    <video
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      className="w-full h-full object-cover"
    >
      <source
        src={project.heroVideo16}
        type="video/mp4"
      />
    </video>
  </div>
) : null}



 {/* image-image-image-image-image Mobile*/}

   {(
  project.projectImage31 &&
  project.projectImage32 &&
  project.projectImage33 &&
  project.projectImage34 &&
  project.projectImage35
) && (
  <div className="flex mb-4 gap-4 overflow-x-auto md:overflow-visible reveal-section md:hidden">

    <span className="min-w-[90%] md:min-w-0 md:basis-[calc(50%-8px)] min-h-[368px] md:min-h-[665px]">
      <img
        src={project.projectImage31}
        className="w-full h-auto h-full object-cover"
      />
    </span>

    <span className="min-w-[90%] md:min-w-0 md:basis-[calc(50%-8px)] min-h-[368px] md:min-h-[665px]">
      <img
        src={project.projectImage32}
        className="w-full h-auto h-full object-cover"
      />
    </span>

    <span className="min-w-[90%] md:min-w-[31%]">
      <img
        src={project.projectImage33}
        className="w-full h-auto object-cover md:h-full min-h-[368px] md:min-h-[338px]"
      />
    </span>

    <span className="min-w-[90%] md:min-w-[31%]">
      <img
        src={project.projectImage34}
        className="w-full h-auto object-cover md:h-full min-h-[368px] md:min-h-[338px]"
      />
    </span>

    <span className="min-w-[90%] md:min-w-[31%]">
      <img
        src={project.projectImage35}
        className="w-full h-auto md:h-full object-cover min-h-[368px] md:min-h-[338px]"
      />
    </span>

  </div>
)}

 {/* image-image-image-image-image Mobile*/}




{/* image-image */}

      
       {(project.projectImage31 && project.projectImage32) && (
  <div className="md:flex mb-4 gap-4 overflow-x-auto md:overflow-visible  reveal-section hidden">

    {project.projectImage31 && (
      <span className="min-w-[90%] md:min-w-0 md:basis-[calc(50%-8px)] min-h-[368px] md:min-h-[665px]">
        <img
          src={project.projectImage31}
          className="w-full h-auto h-full object-cover"
        />
      </span>
    )}

    {project.projectImage32 && (
      <span className="min-w-[90%] md:min-w-0 md:basis-[calc(50%-8px)] min-h-[368px] md:min-h-[665px]">
        <img
          src={project.projectImage32}
          className="w-full h-auto h-full object-cover"
        />
      </span>
    )}

  </div>
)}



 {/* image-image-image */}

      
       {(project.projectImage33 && project.projectImage34 && project.projectImage35) && (
  <div className="md:flex gap-4 mb-4 overflow-x-auto md:overflow-visible hidden reveal-section">

    {project.projectImage33 && (
      <span className="min-w-[90%] md:min-w-[31%] ">
        <img
          src={project.projectImage33}
          className="w-full h-auto object-cover md:h-full min-h-[368px] md:min-h-[338px]  md:h-full"
        />
      </span>
    )}

    {project.projectImage34 && (
      <span className="min-w-[90%] md:min-w-[31%]">
        <img
          src={project.projectImage34}
          className="w-full h-auto object-cover md:h-full min-h-[368px] md:min-h-[338px]  md:h-full"
        />
      </span>
    )}

      {project.projectImage35 && (
      <span className="min-w-[90%] md:min-w-[31%]">
        <img
          src={project.projectImage35}
          className="w-full h-auto md:h-full object-cover min-h-[368px] md:min-h-[338px]  md:h-full"
        />
      </span>
    )}

  </div>
)}




{project.projectImage36 && (
  <img
    src={project.projectImage36}
    className="w-full h-auto md:h-full mb-4 reveal-section"
  />
)}

      
      
      
       {project.heroVideo17 ? (
  <div className="video-wrapper reveal-section mb-4">
    <video
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      className="w-full h-full object-cover"
    >
      <source
        src={project.heroVideo17}
        type="video/mp4"
      />
    </video>
  </div>
) : null}


      
       {project.quote && (
  <section className="quote-section border-t border-white/[0.06] py-[60] md:py-[160px] overflow-hidden">
    
    <div className="max-w-[1000px] mx-auto px-6 lg:px-12 text-left md:text-left">

      {/* Quote */}
      <h2 className="flex gap-4 md:block font-source-serif font-light italic text-[36px] leading-[1.4] md:text-[78px] lg:text-[78px] md:leading-[1.1] tracking-[-2.5px] text-white max-w-[980px]">
        
        <Image
          src={CurveImage}
          alt="Curve"
          className="curve-image block md:hidden"
        />

        <em>“{project.quote}”</em>

      </h2>

      {/* Meta */}
      {project.quoteBy && (
        <div className="mt-[20px] md:mt-[42px]">
          <span className="font-inter font-[200] text-[12px] md:text-[18px] leading-[16px] tracking-[1.9px] uppercase text-white/50">
            — {project.quoteBy}
          </span>
        </div>
      )}

    </div>

  </section>
)}






{project.projectImage37 && (
  <img
    src={project.projectImage37}
    className="w-full h-auto md:h-full mb-4 reveal-section"
  />
)}

      
      
      
       {project.heroVideo18 ? (
  <div className="video-wrapper reveal-section mb-4">
    <video
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      className="w-full h-full object-cover"
    >
      <source
        src={project.heroVideo18}
        type="video/mp4"
      />
    </video>
  </div>
) : null}




{/* image-video-grid */}

{/* ROW 1 */}
{(
  project.projectImage38 &&
  project.projectImage39 &&
  project.projectImage40 &&
  project.projectImage41
) && (
  <div className="flex md:flex-wrap gap-4 overflow-x-auto  mb-4 reveal-section">

    <span className="min-w-[85%] md:min-w-0 md:basis-[calc(25%-12px)]">
      <img
        src={project.projectImage38}
        className="w-full object-cover min-h-[368px] md:min-h-[290px]"
      />
    </span>

    <span className="min-w-[85%] md:min-w-0 md:basis-[calc(25%-12px)]">
      <img
        src={project.projectImage39}
        className="w-full object-cover min-h-[368px] md:min-h-[290px]"
      />
    </span>

    <span className="min-w-[85%] md:min-w-0 md:basis-[calc(25%-12px)]">
      <img
        src={project.projectImage40}
        className="w-full object-cover min-h-[368px] md:min-h-[290px]"
      />
    </span>

    <span className="min-w-[85%] md:min-w-0 md:basis-[calc(25%-12px)]">
      <img
        src={project.projectImage41}
        className="w-full object-cover min-h-[368px] md:min-h-[290px]"
      />
    </span>

  </div>
)}

{/* ROW 2 */}
{(
  project.projectImage42 &&
  project.projectImage43 &&
  project.projectImage44 &&
  project.projectImage45
) && (
  <div className="flex md:flex-wrap flex-row-reverse gap-4 overflow-x-auto  mb-4 reveal-section">

    <span className="min-w-[85%] md:min-w-0 md:basis-[calc(25%-12px)]">
      <img
        src={project.projectImage42}
        className="w-full object-cover min-h-[368px] md:min-h-[290px]"
      />
    </span>

    <span className="min-w-[85%] md:min-w-0 md:basis-[calc(25%-12px)]">
      <img
        src={project.projectImage43}
        className="w-full object-cover min-h-[368px] md:min-h-[290px]"
      />
    </span>

    <span className="min-w-[85%] md:min-w-0 md:basis-[calc(25%-12px)]">
      <img
        src={project.projectImage44}
        className="w-full object-cover min-h-[368px] md:min-h-[290px]"
      />
    </span>

    <span className="min-w-[85%] md:min-w-0 md:basis-[calc(25%-12px)]">
      <img
        src={project.projectImage45}
        className="w-full object-cover min-h-[368px] md:min-h-[290px]"
      />
    </span>

  </div>
)}

{/* ROW 3 */}
{(
  project.projectImage46 &&
  project.heroVideo19 &&
  project.projectImage47 &&
  project.heroVideo20
) && (
  <div className="flex md:flex-wrap gap-4 overflow-x-auto mb-4 reveal-section">

    <span className="min-w-[85%] md:min-w-0 md:basis-[calc(25%-12px)]">
      <img
        src={project.projectImage46}
        className="w-full object-cover min-h-[368px] md:min-h-[290px]"
      />
    </span>

    <div className="video-wrapper min-w-[85%] md:min-w-0 md:basis-[calc(25%-12px)]">
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="w-full h-full object-cover min-h-[368px] md:min-h-[290px]"
      >
        <source src={project.heroVideo19} type="video/mp4" />
      </video>
    </div>

    <span className="min-w-[85%] md:min-w-0 md:basis-[calc(25%-12px)]">
      <img
        src={project.projectImage47}
        className="w-full object-cover min-h-[368px] md:min-h-[290px]"
      />
    </span>

    <div className="video-wrapper min-w-[85%] md:min-w-0 md:basis-[calc(25%-12px)]">
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="w-full h-full object-cover min-h-[368px] md:min-h-[290px]"
      >
        <source src={project.heroVideo20} type="video/mp4" />
      </video>
    </div>

  </div>
)}

{/* ROW 4 */}
{(
  project.heroVideo21 &&
  project.projectImage48 &&
  project.heroVideo22 &&
  project.projectImage49
) && (
  <div className="flex md:flex-wrap flex-row-reverse gap-4 overflow-x-auto  mb-4 reveal-section">

    <div className="video-wrapper min-w-[85%] md:min-w-0 md:basis-[calc(25%-12px)]">
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="w-full h-full object-cover min-h-[368px] md:min-h-[290px]"
      >
        <source src={project.heroVideo21} type="video/mp4" />
      </video>
    </div>

    <span className="min-w-[85%] md:min-w-0 md:basis-[calc(25%-12px)]">
      <img
        src={project.projectImage48}
        className="w-full object-cover min-h-[368px] md:min-h-[290px]"
      />
    </span>

    <div className="video-wrapper min-w-[85%] md:min-w-0 md:basis-[calc(25%-12px)]">
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="w-full h-full object-cover min-h-[368px] md:min-h-[290px]"
      >
        <source src={project.heroVideo22} type="video/mp4" />
      </video>
    </div>

    <span className="min-w-[85%] md:min-w-0 md:basis-[calc(25%-12px)]">
      <img
        src={project.projectImage49}
        className="w-full object-cover min-h-[368px] md:min-h-[290px]"
      />
    </span>

  </div>
)}



{/* image-video-grid */}



        

{project.projectImage50 && (
  <img
    src={project.projectImage50}
    className="w-full h-auto md:h-full mb-4 reveal-section"
  />
)}


 {project.heroVideo23 ? (
  <div className="video-wrapper reveal-section mb-4">
    <video
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      className="w-full h-full object-cover"
    >
      <source
        src={project.heroVideo23}
        type="video/mp4"
      />
    </video>
  </div>
) : null}






      {/* BBT Quote */}

{project.bbtquote && (
  <section className="quote-section quote-bbt border-t border-white/[0.06] py-[60] md:py-[160px] overflow-hidden">
    
    <div className="max-w-[800px] mx-auto px-6 lg:px-12 text-left md:text-left">


      <h2 className=" font-source-serif font-[200] text-[36px] leading-[1.4] md:text-[64px] lg:text-[70px] md:leading-[1.1] tracking-[0px] text-white max-w-[980px]">
        
        <div className="bbt-says pb-15">
          {project.bbtquote.split(",")[0]},
      <span className="font-[400]">
        {project.bbtquote.split(",").slice(1).join(",")}
      </span>

      </div>
       <div className="quote-logo">
          <span className="font-inter font-[200] text-[12px] md:text-[18px] leading-[16px] tracking-[1.9px] uppercase text-white/50 relative top-[-22px]">
            <Image
          src={BlueLogo}
          alt="Curve"
          className="curve-image block md:max-w-[120px] max-w-[100px]"
        />
          </span>
        </div>

      </h2>


   

    </div>

  </section>
)}

      {/* BBT Quote */}





 {/* video-video-video */}

      
       {(project.heroVideo24 && project.heroVideo25 && project.heroVideo26) && (
  <div className="flex gap-4 reveal-section mb-4 overflow-x-auto md:overflow-visible">

   

   {project.heroVideo24 ? (
  <div className="video-wrapper  min-w-[90%] md:min-w-[31%]  min-h-[663px] md:min-h-[665px]">
    <video
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      className="w-full h-full object-cover"
    >
      <source
        src={project.heroVideo24}
        type="video/mp4"
      />
    </video>
  </div>
) : null}

 {project.heroVideo25 ? (
  <div className="video-wrapper min-w-[90%] md:min-w-[31%]   min-h-[663px] md:min-h-[665px]">
    <video
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      className="w-full h-full object-cover"
    >
      <source
        src={project.heroVideo25}
        type="video/mp4"
      />
    </video>
  </div>
) : null}

 {project.heroVideo26 ? (
  <div className="video-wrapper min-w-[90%] md:min-w-[31%]    min-h-[663px] md:min-h-[665px]">
    <video
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      className="w-full h-full object-cover"
    >
      <source
        src={project.heroVideo26}
        type="video/mp4"
      />
    </video>
  </div>
) : null}

  </div>
)}






{project.projectImage51 && (
  <img
    src={project.projectImage51}
    className="w-full h-auto md:h-full mb-4 reveal-section"
  />
)}


 {project.heroVideo27 ? (
  <div className="video-wrapper reveal-section mb-4">
    <video
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      className="w-full h-full object-cover"
    >
      <source
        src={project.heroVideo27}
        type="video/mp4"
      />
    </video>
  </div>
) : null}





 {/* image carousel */}
<ImageCarousel
  images={[
    project.projectImage52,
    project.projectImage53,
    project.projectImage54,
    project.projectImage55,
    project.projectImage56,
    project.projectImage57,
  ]}
/>


{/* image carousel ltr */}
<ImageCarouselLtr
  images={[
    project.projectImage58,
    project.projectImage59,
    project.projectImage60,
    project.projectImage61,
    project.projectImage62,
    project.projectImage63,
  ]}
/>








{project.projectImage52 && (
  <img
    src={project.projectImage52}
    className="w-full h-auto md:h-full mb-4 reveal-section"
  />
)}


 {project.heroVideo28 ? (
  <div className="video-wrapper reveal-section mb-4">
    <video
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      className="w-full h-full object-cover"
    >
      <source
        src={project.heroVideo28}
        type="video/mp4"
      />
    </video>
  </div>
) : null}



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

                <span className="text-white text-left md:w-[200px]">
                  {" "}
                  {project.typeDesign}{" "}
                </span>
              </div>

              {/* Item */}
              <div className="border-t border-white/10 py-6 flex justify-between">
                <span className="uppercase text-[11px] tracking-[2px] text-white/40">
                  Photography
                </span>

                <span className="text-white text-left md:w-[200px]">
                  {" "}
                  {project.Photography}{" "}
                </span>
              </div>

              {/* Item */}
              <div className="border-t border-white/10 py-6 flex justify-between">
                <span className="uppercase text-[11px] tracking-[2px] text-white/40">
                  Editorial
                </span>

                <span className="text-white text-left md:w-[200px]">
                  {" "}
                  {project.Editorial}{" "}
                </span>
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

        </div>





        <RelatedCases currentSlug={project.slug} />
        <div className="fixed-nav">
          <ProjectNavigation currentSlug={project.slug} collapsed={false} />
        </div>
      </div>

      <CaseStudyFooter/>
    </>
  );
}
