"use client";
import { TypeProductItems } from "@assets/item";
import React from "react";

const ProductTypeList = () => {
  return (
    <div>
      <div className="w-[1300px] mx-auto py-10">
        <div className="w-full justify-center items-center gap-4 flex">
          <div className="w-14 h-[1px] bg-black"></div>
          <h2 className="text-[35px] font-normal">Danh mục sản phẩm</h2>
          <div className="w-14 h-[1px] bg-black"></div>
        </div>

        <div className="flex gap-2 mt-4">
          {TypeProductItems.map((item: any, idx: number) => (
            <div
              key={idx}
              className="flex flex-col gap-1 border border-white hover:border-orange-500 cursor-pointer hover:text-orange-500 duration-300"
            >
              <div className="overflow-hidden p-1">
                <img
                  src={item.image}
                  alt="type product"
                  className="hover:scale-105 duration-300"
                />
              </div>
              <h3 className="text-center">{item.label}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductTypeList;
