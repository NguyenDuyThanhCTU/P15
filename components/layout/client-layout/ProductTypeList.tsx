"use client";
import { TypeProductItems } from "@assets/item";
import { useData } from "@context/DataProviders";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

const ProductTypeList = () => {
  const { productTypes } = useData();
  const pathname = usePathname();
  const path = pathname.split("/")[1];
  const i18nTranslations = useTranslations("Data");

  return (
    <div>
      <div className="p:w-auto p:mx-2 d:w-[1300px] d:mx-auto pt-10 p:pb-52 d:pb-96 z-10 relative">
        <div className="w-full justify-center items-center gap-4 flex">
          <div className="w-14 h-[1px] bg-black"></div>
          <h2 className="text-[35px] font-normal text-center">
            {i18nTranslations("Danh mục sản phẩm")}
          </h2>
          <div className="w-14 h-[1px] bg-black"></div>
        </div>

        <div className="mt-4 absolute p:w-[100vw] d:w-[1300px]">
          <Swiper
            loop={true}
            centeredSlides={true}
            slidesPerView={4}
            slidesPerGroup={1}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className="mySwiper"
          >
            <div className="flex gap-5 w-full">
              {TypeProductItems.map((item: any, idx: number) => {
                const sort = productTypes?.filter(
                  (type: any) => type.parent === item.label
                );

                return (
                  <SwiperSlide key={idx}>
                    <div className="flex flex-col gap-1 mx-2 border-[rgba(255,255,255,0)] border group  hover:border-orange-500 cursor-pointer  duration-300 bg-white">
                      <div className="overflow-hidden p-1 ">
                        <img
                          src={item.image}
                          alt="type product"
                          className="hover:scale-105 duration-300"
                        />
                      </div>
                      <Link
                        href={`/${path}/san-pham/${item.value}`}
                        className="text-center group-hover:scale-105 group-hover:font-semibold group-hover:text-orange-500 duration-300"
                      >
                        {i18nTranslations(item.label)}
                      </Link>
                      <div className="h-max p-2 group-hover:flex flex-col gap-2 hidden group-hover:bg-white z-20 relative ">
                        {sort?.map((items: any, idx: number) => (
                          <Link
                            href={`/san-pham/${item.value}?type=${items.typeUrl}`}
                            key={idx}
                            className="hover:text-orange-500"
                          >
                            {items.type}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </div>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default ProductTypeList;
