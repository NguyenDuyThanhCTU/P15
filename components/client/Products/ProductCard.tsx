"use client";
import { useData } from "@context/DataProviders";
import { Modal } from "antd";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { HiOutlineHeart } from "react-icons/hi";
import { IoCartOutline } from "react-icons/io5";

const ProductCard = ({ Data }: any) => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const { currentUser } = useData();
  const router = useRouter();
  const HandleFavorite = (id: any) => {
    if (currentUser) {
    } else {
      setIsModalOpen(true);
    }
  };
  return (
    <div className="border hover:shadow-2xl  cursor-pointer duration-300 ">
      <Link
        href={`/chi-tiet-san-pham/${Data.url}`}
        className="h-[230px] w-full flex justify-start items-end"
      >
        <img
          src={Data.image}
          alt="product"
          className="w-full h-full object-top object-contain"
        />
      </Link>
      <div className="text-center py-3 px-4">
        <Link
          href={`/chi-tiet-san-pham/${Data.url}`}
          className="text-[14px] font-normal text-gray-600"
        >
          {Data.title}
        </Link>
        <div className="mt-5 flex flex-col gap-3">
          <p className="font-normal ">€ {Data.price}</p>
          <div className="flex justify-between items-center ">
            <div
              className="hover:scale-110 duration-300"
              onClick={() => HandleFavorite(Data.id)}
            >
              <HiOutlineHeart />
            </div>
            <div className="border font-normal flex items-center py-1 px-4 rounded-full gap-3  border-mainyellow bg-mainyellow hover:bg-white text-white hover:text-mainyellow">
              <IoCartOutline />
              <p>Mua ngay</p>
            </div>
          </div>
        </div>
      </div>
      <Modal
        closable={false}
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={null}
      >
        <div>
          <h2 className="text-[24px] font-semibold">Đến trang đăng nhập</h2>
          <p>Đăng nhập để thêm sản phẩm vào mục yêu thích</p>
          <div className="flex w-full justify-center gap-5 mt-5">
            <div
              className="py-2 px-6 rounded-full border border-mainyellow cursor-pointer text-mainyellow duration-300 hover:border-orange-500 hover:text-orange-500"
              onClick={() => setIsModalOpen(false)}
            >
              Hủy
            </div>
            <div
              className="py-2 px-6 rounded-full border border-mainyellow bg-mainyellow text-white duration-300 hover:bg-orange-500 hover:border-orange-500 cursor-pointer"
              onClick={() => router.push("/dang-nhap")}
            >
              Đăng nhập
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ProductCard;
