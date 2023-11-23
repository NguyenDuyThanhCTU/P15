"use client";
import { useData } from "@context/DataProviders";
import Link from "next/link";
import React, { useEffect } from "react";
import UserInformation from "./UserInformation";
import UserFavorite from "./UserFavorite";
import UserOrders from "./UserOrders";
import UserChangePassword from "./UserChangePassword";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";

const Account = () => {
  const pathname = usePathname();
  const path = pathname.split("/")[1];
  const i18nTranslations = useTranslations("Data");
  const { currentUser, Accounts } = useData();
  const [selected, setSelected] = React.useState(0);
  const [user, setUser] = React.useState<any>(null);

  const ClientOptionItems = [
    {
      label: "Thông tin người dùng",
      value: "",
      icon: "",
    },
    {
      label: "Sản phẩm yêu thích",
      value: "",
      icon: "",
    },
    {
      label: "Đơn hàng của tôi",
      value: "",
      icon: "",
    },
    {
      label: "Đổi mật khẩu",
      value: "",
      icon: "",
    },
  ];
  const AdminOptionItems = [
    {
      label: "Đến trang quản trị",
      value: "",
      icon: "",
    },
  ];
  useEffect(() => {
    const sort = Accounts?.filter((item: any) => item.id === currentUser?.id);
    setUser(sort[0]);
  }, [Accounts, currentUser]);
  return (
    <div className="border-t my-10">
      <div className="p:w-auto d:w-[1300px] p:mx-2 d:mx-auto py-10">
        {currentUser ? (
          <div className="grid p:grid-cols-1 d:grid-cols-6 gap-5">
            <div className="p:col-span-5 d:col-span-1 flex flex-col gap-5  p:items-center d:items-start w-full border-r  h-full">
              {(currentUser?.role === "admin"
                ? AdminOptionItems
                : ClientOptionItems
              ).map((item: any, idx: number) => (
                <div
                  key={idx}
                  onClick={() => setSelected(idx)}
                  className="cursor-pointer  hover:scale-105 duration-300 font-light hover:text-mainyellow"
                >
                  {i18nTranslations(item.label)}
                </div>
              ))}
            </div>
            <div className="col-span-5">
              {currentUser?.role === "admin" ? (
                <>
                  <div className="flex">
                    <Link
                      href={`/admin`}
                      className="py-2 px-10 rounded-full cursor-pointer text-[24px] font-normal text-white bg-mainyellow border-mainyellow duration-300 hover:bg-orange-500 hover:border-orange-500"
                    >
                      {" "}
                      {i18nTranslations("Đến trang quản trị")}
                    </Link>
                  </div>
                </>
              ) : (
                <div className="w-full flex justify-center">
                  {selected === 0 ? (
                    <>
                      <UserInformation user={user} />
                    </>
                  ) : selected === 1 ? (
                    <>
                      <UserFavorite />
                    </>
                  ) : selected === 2 ? (
                    <>
                      <UserOrders />
                    </>
                  ) : (
                    <>
                      <UserChangePassword user={user} />
                    </>
                  )}
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="h-[50vh] flex items-center gap-2 flex-col justify-center">
            {" "}
            <h2 className="font-light  text-[20px] ">
              {i18nTranslations("Bạn chưa đăng nhập")}
            </h2>{" "}
            <div className="flex">
              <Link
                href={`/dang-nhap`}
                className="py-2 px-10 rounded-full cursor-pointer text-[24px] font-normal text-white bg-mainyellow border-mainyellow duration-300 hover:bg-orange-500 hover:border-orange-500"
              >
                {" "}
                {i18nTranslations("Đến trang đăng nhập")}
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Account;
