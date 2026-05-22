"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

interface Props {
  images: string[];
}

export default function ImageCarousel({ images }: Props) {
  return (
    <div className="mb-4 overflow-hidden reveal-section">
      <Swiper
        modules={[Autoplay]}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        loop={true}
        spaceBetween={16}
        slidesPerView={1}
        breakpoints={{
          768: {
            slidesPerView: 3,
          },
        }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image}
              alt=""
              className="w-full object-cover min-h-[338px]"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}