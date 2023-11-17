"use client";
import { useData } from "@context/DataProviders";
import React from "react";
import ProductCard from "../Products/ProductCard";

const DisplayProduct = ({ Data, Topic }: any) => {
  return (
    <div className="flex flex-col w-[1400px] mx-auto">
      <div className="bg-mainyellow text-white text-[25px] font-normal flex items-center h-12 w-max relative my-10">
        <p className="pl-2 pr-16">{Topic}</p>
        <div className="bg-white h-20 w-10 absolute -right-3 -top-7 -rotate-45"></div>
      </div>
      <div className="grid  grid-cols-5 gap-2 ">
        {Topic === "Sản phẩm khuyến mãi" ? (
          <div className="col-span-1">
            <img
              src="https://api.taphoa.cz/upload/banner/banner_20220120010934_0.png"
              alt="banner"
            />
          </div>
        ) : (
          Topic === "Sản phẩm mới" && (
            <div className="col-span-1">
              <img
                src="https://api.taphoa.cz/upload/banner/banner_20220120010113_0.png"
                alt="banner"
              />
            </div>
          )
        )}
        <div className="col-span-4 grid grid-cols-4 gap-5">
          {Data.slice(0, 8).map((item: any, idx: number) => (
            <div key={idx}>
              <ProductCard Data={item} />
            </div>
          ))}
        </div>
        {Topic === "Sản phẩm nổi bật" ? (
          <div className="col-span-1">
            <img
              src="https://api.taphoa.cz/upload/banner/banner_20220120010141_0.png"
              alt="banner"
            />
          </div>
        ) : (
          Topic === "Sản phẩm bán chạy" && (
            <div className="col-span-1">
              <img
                src="https://api.taphoa.cz/upload/banner/banner_20220120010403_0.png"
                alt="banner"
              />
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default DisplayProduct;
