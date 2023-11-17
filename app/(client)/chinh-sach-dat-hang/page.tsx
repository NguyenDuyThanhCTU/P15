import { getDataByTypeProps } from "@lib/get-data";
import Link from "next/link";
import React from "react";

const OrderPolicyPage = async () => {
  const Data = await getDataByTypeProps("posts", "url", "chinh-sach-dat-hang");
  const markup = { __html: Data[0]?.content };
  return (
    <>
      <div className="p:w-auto d:w-[1300px] p:mx-auto d:mx-auto ">
        <div className="flex items-center gap-2 font-light pt-5 pb-10">
          <Link
            href={`/`}
            className="hover:text-blue-700 cursor-pointer underline"
          >
            Trang chủ
          </Link>
          <p className="text-[14px]">/</p>
          <p>Chính sách đặt hàng</p>
        </div>
        <div>
          <div
            className="px-3 flex flex-col gap-2"
            dangerouslySetInnerHTML={markup}
          ></div>
        </div>
      </div>
    </>
  );
};

export default OrderPolicyPage;
