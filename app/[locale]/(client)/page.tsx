"use client";
import DisplayProduct from "@components/client/Home/DisplayProduct";
import { getAllDataProps, getDataByTypeProps } from "@lib/get-data";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

const HomePage = () => {
  const [Data, setData] = useState<any>([]);
  const [BlogData, setBlogData] = useState<any>([]);
  getAllDataProps("products").then((data) => setData(data));
  getDataByTypeProps("posts", "topic", "News").then((data) =>
    setBlogData(data)
  );
  const i18nTranslations = useTranslations("Data");
  const pathname = usePathname();
  const path = pathname?.split("/")[1];

  const OutstandingProducts = Data?.filter(
    (item: any) => item.topic === "Sản phẩm nổi bật"
  );
  const PromotionalProducts = Data?.filter(
    (item: any) => item.topic === "Sản phẩm khuyến mãi"
  );
  const SellingProducts = Data?.filter(
    (item: any) => item.topic === "Sản phẩm bán chạy"
  );
  const NewProduct = Data?.filter((item: any) => item.topic === "Sản phẩm mới");

  const partnerItem = [
    {
      image: "https://api.taphoa.cz/upload/banner/banner_20220120025730_0.png",
    },
    {
      image: "https://api.taphoa.cz/upload/banner/banner_20220120025814_0.png",
    },
    {
      image: "https://api.taphoa.cz/upload/banner/banner_20220120025843_0.png",
    },
    {
      image: "https://api.taphoa.cz/upload/banner/banner_20220120025857_0.png",
    },
  ];
  return (
    <div className="">
      <div className=" ">
        <DisplayProduct Data={OutstandingProducts} Topic="Sản phẩm nổi bật" />
        <DisplayProduct
          Data={PromotionalProducts}
          Topic="Sản phẩm khuyến mãi"
        />
        <DisplayProduct Data={SellingProducts} Topic="Sản phẩm bán chạy" />
        <div className="bg-redPrimmary w-full h-[180px] mt-14 mb-20 ">
          <div className=" p:w-auto p:mx-2 d:w-[1400px]  d:mx-auto relative">
            <div className="p:w-auto d:w-[1400px] absolute">
              <h2 className="font-normal text-[28px] text-white pt-8 pb-5">
                {i18nTranslations("Đối tác")}
              </h2>
              <div className=" grid w-full   grid-cols-4 p:gap-2 d:gap-20">
                {partnerItem.map((item: any, idx: number) => (
                  <Link
                    href={`/${path}`}
                    key={idx}
                    className="w-full bg-white border flex justify-center py-2"
                  >
                    <img src={item.image} alt="partner" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
        <DisplayProduct Data={NewProduct} Topic="Sản phẩm mới" />

        <div>
          <div className=" p:w-auto p:mx-2 d:w-[1400px]  d:mx-auto ">
            <div className="bg-mainyellow text-white text-[25px] font-normal flex items-center h-12 w-max relative my-10">
              <p className="pl-2 pr-16">{i18nTranslations("Blog")}</p>
              <div className="bg-white h-20 w-10 absolute -right-3 -top-7 -rotate-45"></div>
            </div>
            <div className="grid p:grid-cols-2 d:grid-cols-3 gap-5  ">
              {BlogData?.slice(0, 3).map((item: any, idx: number) => {
                const content = item?.content;
                const maxLength = 150;

                const truncatedContent = content
                  ? content.substring(0, maxLength)
                  : "";

                const markup = { __html: truncatedContent };
                return (
                  <Link
                    href={`/${path}/bai-viet/${item.url}`}
                    key={idx}
                    className="cursor-pointer hover:shadow-2xl duration-300 mt-2"
                  >
                    <div className="h-[235px] flex justify-center">
                      <img
                        src={item.image}
                        alt="blog"
                        className="h-full object-cover"
                      />
                    </div>
                    <div className="p-2">
                      <h2 className="font-normal mt-2 truncate2">
                        {item.title}
                      </h2>
                      <div
                        dangerouslySetInnerHTML={markup}
                        className="truncate2 mt-2 font-extralight"
                      ></div>
                    </div>
                  </Link>
                );
              })}
            </div>
            <div className="w-full flex justify-center py-10">
              <Link
                href={`/${path}/blog`}
                className="py-3 px-10 uppercase border text-mainyellow border-mainyellow rounded-full cursor-pointer hover:text-white hover:bg-mainyellow duration-300 font-normal"
              >
                {i18nTranslations("Xem thêm")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
