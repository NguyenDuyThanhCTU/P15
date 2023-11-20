"use client";
import { PolicyItems } from "@assets/item";
import { useData } from "@context/DataProviders";
import Link from "next/link";
import React from "react";
import { CiMail } from "react-icons/ci";

const Footer = () => {
  const { ContactData } = useData();
  return (
    <div>
      <div className="p:w-auto p:mx-2 d:w-[1300px] d:mx-auto grid p:grid-cols-1   d:grid-cols-3 gap-3 py-14">
        <div className="flex flex-col">
          <h2 className="uppercase font-normal text-[18px]">Liên hệ</h2>
          <div className="mt-3 flex flex-col gap-2 text-[15px]">
            <p>{ContactData.address}</p>
            <p>{ContactData.gmail}</p>
            <p>{ContactData.phone}</p>
          </div>
        </div>
        <div className="flex flex-col">
          <h2 className="uppercase font-normal text-[18px]">Liên hệ</h2>
          <div className="mt-3 flex flex-col gap-2 text-[15px]">
            {PolicyItems.map((item: any, idx: number) => (
              <Link
                href={`/bai-viet/${item.value}`}
                key={idx}
                className="hover:text-orange-500 duration-300"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex flex-col">
          <h2 className="uppercase font-normal text-[18px]">
            Đăng ký nhận bản tin
          </h2>
          <div className="mt-3 flex flex-col gap-2 text-[15px]">
            <p>Nhận gợi ý cho thực đơn và thông tin sản phẩm mới nhất</p>
            <div className="border-b border-black ">
              <div className="py-2 flex justify-between">
                <input
                  type="text"
                  className="outline-none w-full"
                  placeholder="Email"
                />
                <div className="text-[25px] px-5">
                  <CiMail />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
