"use client";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const ProductMap = ({ SearchValue, ProductType }: any) => {
  const pathname = usePathname();
  const path = pathname?.split("/")[1];
  const i18nTranslations = useTranslations("Data");
  return (
    <>
      {" "}
      <div className="flex items-center gap-2 font-light pt-5 pb-10 ">
        <Link
          href={`${path}/`}
          className="hover:text-blue-700 cursor-pointer underline"
        >
          {i18nTranslations("Trang chủ")}
        </Link>
        <p className="text-[14px]">/</p>
        {SearchValue ? (
          <>
            {" "}
            <Link
              href={`${path}/san-pham/${ProductType[0]?.parentUrl}`}
              className="hover:text-blue-700 cursor-pointer underline"
            >
              {i18nTranslations(ProductType[0]?.parent)}
            </Link>
          </>
        ) : (
          <>
            <p> {i18nTranslations(ProductType[0]?.parent)}</p>
          </>
        )}

        {/* {SearchValue && (
      <>
        <p className="text-[14px]">/</p>
        <div className=" ">{i18nTranslations(ProductType1[0].type)}</div>
      </>
    )} */}
      </div>
    </>
  );
};

export default ProductMap;
