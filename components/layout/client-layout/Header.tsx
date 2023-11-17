"use client";
import { HeaderItems } from "@assets/item";
import { useData } from "@context/DataProviders";
import Link from "next/link";
import React from "react";
import { CiMail } from "react-icons/ci";
import { FaSearch } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";
import { IoBagOutline } from "react-icons/io5";

const Header = () => {
  const { ContactData } = useData();
  return (
    <div>
      <div className="bg-gray-100">
        <div className="h-10 flex justify-between w-[1300px] mx-auto">
          <div className="flex gap-4">
            <div
              className="flex items-center gap-2"
              onClick={() => window.open(`tel:${ContactData.phone}`, "_blank")}
            >
              <FaPhoneVolume /> <p> {ContactData.phone}</p>{" "}
            </div>
            <div
              className="flex items-center gap-2"
              onClick={() =>
                window.open(`mailto:${ContactData.gmail}`, "_blank")
              }
            >
              <CiMail />
              <p>{ContactData.gmail}</p>
            </div>
          </div>
          <div className=" flex gap-5 items-center">
            <div>Đăng nhập</div>
            <div className="h-3 w-[1px] bg-black"></div>
            <div>Đăng ký</div>
          </div>
        </div>
      </div>
      <div className="shadow-md">
        <div className="h-24 flex justify-between w-[1300px] mx-auto items-center">
          <Link href={`/`} className="h-24 p-3">
            <img
              src="https://taphoa.cz/static/media/logo2.da54755c.png"
              alt="logo"
              className="h-full cursor-pointer"
            />
          </Link>
          <div className="flex gap-10 text-[16px] uppercase font-normal ">
            {HeaderItems.map((item: any, idx: number) => (
              <Link
                href={item.value}
                className="cursor-pointer hover:text-red-500 duration-300"
                key={idx}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-20">
            <div className="">
              <div className="border rounded-full border-orange-500 flex items-center ">
                <div className=" pl-4">
                  <input
                    type="text"
                    className="outline-none"
                    placeholder="Tìm kiếm"
                  />
                </div>
                <div className="bg-orange-500 py-3 px-6 text-white rounded-r-full cursor-pointer">
                  <FaSearch />
                </div>
              </div>
            </div>
            <div className="text-[22px]">
              <IoBagOutline />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
