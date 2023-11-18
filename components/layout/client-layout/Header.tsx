"use client";
import { HeaderItems } from "@assets/item";
import { useData } from "@context/DataProviders";
import { useStateProvider } from "@context/StateProvider";
import Link from "next/link";
import React from "react";
import { BiLogOutCircle } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { CiMail } from "react-icons/ci";
import { FaSearch } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";
import { IoBagOutline } from "react-icons/io5";
import { MdAdminPanelSettings } from "react-icons/md";

const Header = () => {
  const { ContactData, CartItems, currentUser, setCurrentUser } = useData();
  const { setOpenCart, OpenCart, setIsLoading } = useStateProvider();

  const UserItems = [
    {
      label: "Thông tin người dùng",
      value: `thong-tin-nguoi-dung/${currentUser?.username}?key=${currentUser?.id}`,
      icon: CgProfile,
    },
    {
      label: "Đăng xuất",
      value: "dang-xuat",
      icon: BiLogOutCircle,
    },
  ];

  if (currentUser?.role === "admin") {
    //push admin option in userItems[0] array
    UserItems.unshift({
      label: "Trang quản trị",
      value: "admin",
      icon: MdAdminPanelSettings,
    });
    //delete userItems[1] array
    UserItems.splice(1, 1);
  }
  const HandleLogout = () => {
    setIsLoading(true);
    setTimeout(() => {
      setCurrentUser(null);
    }, 1000);
  };
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
          {currentUser ? (
            <Link
              href={`/tai-khoan`}
              className=" flex gap-5 items-center font-light cursor-pointer"
            >
              <div>Cá nhân</div>
              <div className="h-3 w-[1px] bg-black"></div>
              <div onClick={() => HandleLogout()}>Đăng xuất</div>
            </Link>
          ) : (
            <Link
              href={`/dang-nhap`}
              className=" flex gap-5 items-center  font-light cursor-pointer"
            >
              <div>Đăng nhập</div>
              <div className="h-3 w-[1px] bg-black"></div>
              <div>Đăng ký</div>
            </Link>
          )}
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

            <div
              className="text-[24px] relative cursor-pointer"
              onClick={() => setOpenCart(!OpenCart)}
            >
              <div>
                <IoBagOutline />
              </div>
              <div className="text-white rounded-full bg-mainyellow text-[14px]  absolute -top-2 -right-3 flex items-center justify-center  w-5 h-5">
                <span> {CartItems.length}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
