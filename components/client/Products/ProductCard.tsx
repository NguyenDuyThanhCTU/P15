import Link from "next/link";
import React from "react";
import { HiOutlineHeart } from "react-icons/hi";
import { IoCartOutline } from "react-icons/io5";

const ProductCard = ({ Data }: any) => {
  return (
    <Link href={`/chi-tiet-san-pham/${Data.url}`}>
      <div className="border hover:shadow-2xl  cursor-pointer duration-300">
        <div className="h-[230px] w-full flex justify-start items-end">
          <img
            src={Data.image}
            alt="product"
            className="w-full h-full object-top object-contain"
          />
        </div>
        <div className="text-center py-3 px-4">
          <p className="text-[15px] font-normal text-gray-600">{Data.title}</p>
          <div className="mt-5 flex flex-col gap-3">
            <p className="font-normal ">€ {Data.price}</p>
            <div className="flex justify-between items-center ">
              <HiOutlineHeart />
              <div className="border font-normal flex items-center py-1 px-4 rounded-full gap-3  border-mainyellow bg-mainyellow hover:bg-white text-white hover:text-mainyellow">
                <IoCartOutline />
                <p>Mua ngay</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
