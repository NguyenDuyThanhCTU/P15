import Link from "next/link";
import React from "react";

const PromotionPage = () => {
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
          <p>Khuyến mãi</p>
        </div>
        <div className="p-10 text-[25px] font-normal">Đang cập nhật</div>
      </div>
    </>
  );
};

export default PromotionPage;
