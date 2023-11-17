"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";
import { useData } from "@context/DataProviders";

const HomeSlide = () => {
  const { Slides } = useData();
  return (
    <div>
      <div>
        <Swiper
          loop={true}
          centeredSlides={true}
          slidesPerView={1}
          slidesPerGroup={1}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          {Slides.map((item: any, idx: number) => (
            <div key={idx}>
              <SwiperSlide>
                <div className="w-full h-[60vh] flex justify-center items-center">
                  <img
                    src={item.image}
                    alt="banner"
                    className="w-full h-full object-contain"
                  />
                </div>
              </SwiperSlide>
            </div>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default HomeSlide;
