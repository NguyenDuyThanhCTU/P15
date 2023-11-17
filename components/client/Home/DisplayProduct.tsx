"use client";
import { useData } from "@context/DataProviders";
import React from "react";
import ProductCard from "../Products/ProductCard";

const DisplayProduct = ({ Data }: any) => {
  return (
    <div className="flex flex-col">
      <div className="bg-mainyellow text-white text-[25px] font-normal flex items-center h-12 w-max relative my-10">
        <p className="pl-2 pr-16"> Sản phẩm nổi bật</p>
        <div className="bg-white h-20 w-10 absolute -right-3 -top-7 -rotate-45"></div>
      </div>
      <div className=" ">
        {/* {Products.map((item: any, idx: number) => (
          <div key={idx}>
            <ProductCard Data={item} />
          </div>
        ))} */}
      </div>
    </div>
  );
};

export default DisplayProduct;
