import DisplayProduct from "@components/client/Home/DisplayProduct";
import { getAllDataProps, getDataByTypeProps } from "@lib/get-data";
import Link from "next/link";
import React from "react";

const HomePage = async () => {
  const Data = await getAllDataProps("products");
  const BlogData = await getDataByTypeProps("posts", "topic", "News");

  const OutstandingProducts = Data.filter(
    (item: any) => item.topic === "Sản phẩm nổi bật"
  );

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
          Data={OutstandingProducts}
          Topic="Sản phẩm khuyến mãi"
        />
        <DisplayProduct Data={OutstandingProducts} Topic="Sản phẩm bán chạy" />
        <div className="bg-redPrimmary w-full h-[180px] mt-14 mb-20 ">
          <div className=" w-[1400px] mx-auto relative">
            <div className="w-[1400px] absolute">
              <h2 className="font-normal text-[28px] text-white pt-8 pb-5">
                Đối Tác
              </h2>
              <div className=" grid grid-cols-4 gap-20">
                {partnerItem.map((item: any, idx: number) => (
                  <Link
                    href={`/`}
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
        <DisplayProduct Data={OutstandingProducts} Topic="Sản phẩm mới" />

        <div>
          <div className=" w-[1400px] mx-auto ">
            <div className="bg-mainyellow text-white text-[25px] font-normal flex items-center h-12 w-max relative my-10">
              <p className="pl-2 pr-16">Blog</p>
              <div className="bg-white h-20 w-10 absolute -right-3 -top-7 -rotate-45"></div>
            </div>
            <div className="grid grid-cols-3 gap-5  ">
              {BlogData.slice(0, 3).map((item: any, idx: number) => {
                const content = item?.content;
                const maxLength = 150;

                const truncatedContent = content
                  ? content.substring(0, maxLength)
                  : "";

                const markup = { __html: truncatedContent };
                console.log(markup);
                return (
                  <Link
                    href={`/bai-viet/${item.url}`}
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
                href={`/blog`}
                className="py-3 px-10 uppercase border text-mainyellow border-mainyellow rounded-full cursor-pointer hover:text-white hover:bg-mainyellow duration-300 font-normal"
              >
                Xem thêm
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
