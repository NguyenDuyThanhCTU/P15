"use client";
import {
  addDataToArrayField,
  deleteDataFromArrayField,
  deleteDataFromArrayValue,
  updateDocument,
} from "@config/Services/Firebase/FireStoreDB";
import { useData } from "@context/DataProviders";
import { useStateProvider } from "@context/StateProvider";
import { Modal, notification } from "antd";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { HiOutlineHeart } from "react-icons/hi";
import { IoIosHeart } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";

const ProductCard = ({ Data }: any) => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const { currentUser, Accounts } = useData();
  const [user, setUser] = useState<any>([]);
  const { setIsRefetch } = useStateProvider();
  const router = useRouter();
  useEffect(() => {
    const sort = Accounts?.filter(
      (item: any) => item.username === currentUser?.username
    );
    setUser(sort);
  }, [currentUser, Accounts]);

  const HandleFavorite = (id: any) => {
    if (currentUser) {
      if (user[0]?.favorite.filter((item: any) => item === id).length > 0) {
        deleteDataFromArrayValue(
          "accounts",
          currentUser?.id,
          "favorite",
          id
        ).then(() => {
          setIsRefetch("CRUD accounts");
        });
      } else {
        addDataToArrayField("accounts", currentUser?.id, "favorite", id).then(
          () => {
            setIsRefetch("CRUD accounts");
          }
        );
      }
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
              className={`hover:scale-110 duration-300 ${
                user[0]?.favorite?.includes(Data.id) && "text-redPrimmary "
              }`}
              onClick={() => HandleFavorite(Data.id)}
            >
              <IoIosHeart />
            </div>
            <Link
              href={`/chi-tiet-san-pham/${Data.url}`}
              className="border font-normal flex items-center py-1 px-4 rounded-full gap-3  border-mainyellow bg-mainyellow hover:bg-white text-white hover:text-mainyellow"
            >
              <IoCartOutline />
              <p>Mua ngay</p>
            </Link>
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
