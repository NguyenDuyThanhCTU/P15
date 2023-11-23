"use client";
import { PolicyItems } from "@assets/item";
import { useData } from "@context/DataProviders";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { CiMail } from "react-icons/ci";

const Footer = () => {
  const { ContactData } = useData();
  const i18nTranslations = useTranslations("Data");
  const pathname = usePathname();
  const path = pathname.split("/")[1];
  return (
    <div>
      <div className="p:w-auto p:mx-2 d:w-[1300px] d:mx-auto grid p:grid-cols-1   d:grid-cols-3 gap-3 py-14">
        <div className="flex flex-col">
          <h2 className="uppercase font-normal text-[18px]">
            {i18nTranslations("Liên hệ")}
          </h2>
          <div className="mt-3 flex flex-col gap-2 text-[15px]">
            <p>{ContactData.address}</p>
            <p>{ContactData.gmail}</p>
            <p>{ContactData.phone}</p>
          </div>
        </div>
        <div className="flex flex-col">
          <h2 className="uppercase font-normal text-[18px]">
            {i18nTranslations("Điều khoản sử dụng")}
          </h2>
          <div className="mt-3 flex flex-col gap-2 text-[15px]">
            {PolicyItems.map((item: any, idx: number) => (
              <Link
                href={`/${path}/bai-viet/${item.value}`}
                key={idx}
                className="hover:text-orange-500 duration-300"
              >
                {i18nTranslations(item.label)}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex flex-col">
          <h2 className="uppercase font-normal text-[18px]">
            {i18nTranslations("Đăng ký nhận tin")}
          </h2>
          <div className="mt-3 flex flex-col gap-2 text-[15px]">
            <p>
              {i18nTranslations(
                "Nhận gợi ý cho thực đơn và thông tin sản phẩm mới nhất"
              )}
            </p>
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
