"use client";
import { TypeProductItems } from "@assets/item";
import { useData } from "@context/DataProviders";
import Link from "next/link";
import React from "react";

const ProductTypeList = () => {
  const { productTypes } = useData();
  return (
    <div>
      <div className="p:w-auto p:mx-2 d:w-[1300px] d:mx-auto pt-10 pb-56 z-10 relative">
        <div className="w-full justify-center items-center gap-4 flex">
          <div className="w-14 h-[1px] bg-black"></div>
          <h2 className="text-[35px] font-normal">Danh mục sản phẩm</h2>
          <div className="w-14 h-[1px] bg-black"></div>
        </div>

        <div className="p:grid grid-cols-4 d:flex gap-2 mt-4 absolute p:w-auto d:w-[1300px]">
          {TypeProductItems.map((item: any, idx: number) => {
            const sort = productTypes?.filter(
              (type: any) => type.parent === item.label
            );

            return (
              <div
                key={idx}
                className="flex flex-col gap-1 border-[rgba(255,255,255,0)] border group  hover:border-orange-500 cursor-pointer  duration-300"
              >
                <div className="overflow-hidden p-1">
                  <img
                    src={item.image}
                    alt="type product"
                    className="hover:scale-105 duration-300"
                  />
                </div>
                <Link
                  href={`/san-pham/${item.value}`}
                  className="text-center group-hover:scale-105 group-hover:font-semibold group-hover:text-orange-500 duration-300"
                >
                  {item.label}
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
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductTypeList;
