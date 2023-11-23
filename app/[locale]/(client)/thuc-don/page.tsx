"use client";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const ProductsPage = () => {
  const pathname = usePathname();
  const path = pathname.split("/")[1];
  const i18nTranslations = useTranslations("Data");
  return (
    <>
      <div className="p:w-auto d:w-[1300px] p:mx-2 d:mx-auto ">
        <div className="flex items-center gap-2 font-light pt-5 pb-10">
          <Link
            href={`/${path}/`}
            className="hover:text-blue-700 cursor-pointer underline"
          >
            {i18nTranslations("Trang chủ")}
          </Link>
          <p className="text-[14px]">/</p>
          <p>{i18nTranslations("Thực đơn")}</p>
        </div>
        <div className="p-10 text-[25px] font-normal">
          {i18nTranslations("Đang cập nhật")}
        </div>
      </div>
    </>
  );
};

export default ProductsPage;
