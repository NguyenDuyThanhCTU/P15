"use client";
import { HeaderItems } from "@assets/item";
import { useData } from "@context/DataProviders";
import { useStateProvider } from "@context/StateProvider";
import { Drawer, Select } from "antd";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { BiLogOutCircle } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { CiMail } from "react-icons/ci";
import { FaSearch } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";
import { IoIosMenu } from "react-icons/io";
import { IoBagOutline, IoChevronDownOutline } from "react-icons/io5";
import { MdAdminPanelSettings } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { TypeProductItems } from "@assets/item";
import { useTranslations } from "next-intl";

import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

const Header = () => {
  const i18nTranslations = useTranslations("Data");

  const {
    ContactData,
    CartItems,
    currentUser,
    setCurrentUser,
    Products,
    TradeMarkData,
    productTypes,
  } = useData();
  const { setOpenCart, OpenCart, setIsLoading } = useStateProvider();
  const [search, setSearch] = useState("");
  const [searchRs, setSearchRs] = useState([]);
  const [openSearchMB, setOpenSearchMB] = useState(false);
  const [open, setOpen] = useState(false);
  const [openTypeMB, setOpenTypeMB] = useState(0);
  const [language, setLanguage] = useState("");
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

  useEffect(() => {
    const sort = Products?.filter((product: any) =>
      product.title.toLowerCase().includes(search.toLowerCase())
    );
    setSearchRs(sort);
  }, [Products, search]);

  const router = useRouter();
  const pathname = usePathname();
  //remove /vi/ or /fr/ in pathname
  let path = pathname?.replace(/^\/(vi|fr)\//, "/");
  const pathNav = pathname?.split("/")[1];
  useEffect(() => {
    if (pathname.includes("/vi")) {
      setLanguage("vi");
    }
    if (pathname.includes("/fr")) {
      setLanguage("fr");
    }
  }, [language]);

  const HandleChangeLanguage = (e: any) => {
    setLanguage(e);
    if (e === "vi") {
      if (path === "/vi" || path === "/fr") {
        router.push(`/vi`);
      } else {
        router.push(`/vi/${path}`);
      }

      // console.log(`/vi${path}`);
    }
    if (e === "fr") {
      if (path === "/vi" || path === "/fr") {
        router.push(`/fr`);
      } else {
        router.push(`/fr/${path}`);
      }
    }
  };
  return (
    <>
      <div className="d:block fixed z-50 w-full top-0 p:hidden">
        <div className="bg-gray-100">
          <div className="h-10 flex justify-between w-[1300px] mx-auto">
            <div className="flex gap-4">
              <div
                className="flex items-center gap-2"
                onClick={() =>
                  window.open(`tel:${ContactData.phone}`, "_blank")
                }
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

            <div className="flex items-center gap-5">
              <Select
                value={language}
                bordered={false}
                className="w-[150px] border border-mainyellow"
                onChange={(e) => HandleChangeLanguage(e)}
              >
                <Select.Option value="vi">
                  <div className="flex items-center gap-2">
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/taphoa-605ab.appspot.com/o/vietnam.png?alt=media&token=a2e4e0ef-e8c1-44ab-965f-8eb24a44d82d"
                      alt="vietnam flag"
                    />
                    <p>Tiếng Việt</p>
                  </div>
                </Select.Option>
                <Select.Option value="fr">
                  <div className="flex items-center gap-2">
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/demo2512.appspot.com/o/germany.png?alt=media&token=68ca9b5b-f465-4b2d-aa87-7447b218aabc"
                      alt="germany flag"
                    />
                    <p>Germany</p>
                  </div>
                </Select.Option>
              </Select>
              {currentUser ? (
                <Link
                  href={`/${pathNav}/tai-khoan`}
                  className=" flex gap-5 items-center font-light cursor-pointer"
                >
                  <div>{i18nTranslations("Thông tin người dùng")}</div>
                  <div className="h-3 w-[1px] bg-black"></div>
                  <div onClick={() => HandleLogout()}>
                    {i18nTranslations("Đăng xuất")}
                  </div>
                </Link>
              ) : (
                <Link
                  href={`/dang-nhap`}
                  className=" flex gap-5 items-center  font-light cursor-pointer"
                >
                  <div>{i18nTranslations("Đăng nhập")}</div>
                  <div className="h-3 w-[1px] bg-black"></div>
                  <div>{i18nTranslations("Đăng xuất")}</div>
                </Link>
              )}
            </div>
          </div>
        </div>
        <div className="shadow-md bg-white">
          <div className="h-24 flex justify-between w-[1300px] mx-auto items-center">
            <Link href={`${pathNav}/`} className="h-24 p-3">
              <img
                src={TradeMarkData.websiteLogo}
                alt="logo"
                className="h-full cursor-pointer"
              />
            </Link>
            <div className="flex gap-10 text-[16px] uppercase font-normal ">
              {HeaderItems.map((item: any, idx: number) => (
                <Link
                  href={`/${pathNav}/${item.value}`}
                  className="cursor-pointer hover:text-red-500 duration-300"
                  key={idx}
                >
                  {i18nTranslations(item.label)}
                </Link>
              ))}
            </div>
            <div className="flex items-center gap-20">
              <div className=" relative">
                <div className="border rounded-full border-orange-500 flex items-center ">
                  <div className=" pl-4 w-full  justify-between items-center grid grid-cols-7">
                    <input
                      type="text"
                      className="outline-none mr-2 col-span-6"
                      placeholder={i18nTranslations("search")}
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                    />
                    <div>
                      <div
                        className={`${
                          search ? "block" : "hidden"
                        }  bg-gray-500 text-gray-300 w-max p-1 rounded-full text-[10px] cursor-pointer`}
                        onClick={() => setSearch("")}
                      >
                        <RxCross2 />
                      </div>
                    </div>
                  </div>
                  <div className="bg-orange-500 py-3 px-6 text-white rounded-r-full cursor-pointer">
                    <FaSearch />
                  </div>
                </div>
                {search && (
                  <div className="absolute w-full bg-gray-50 top-full flex flex-col shadow-inner z-50 mt-2">
                    <div className=" flex flex-col">
                      {searchRs.map((product: any, idx: number) => (
                        <Link
                          href={`/${pathNav}/chi-tiet-san-pham/${product.url}`}
                          key={idx}
                          className="cursor-pointer p-2 hover:bg-gray-100"
                        >
                          {product.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
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
      <div className="d:hidden p:block  bg-white ">
        <div className="h-[84px] fixed z-50 w-full top-0 bg-white shadow-xl">
          <div className="px-4 w-full flex justify-between items-center">
            <div className="h-[84px]">
              <img
                src={TradeMarkData.websiteLogo}
                alt="Logo"
                className="w-full h-full p-2"
              />
            </div>
            <div className="flex gap-2">
              <div className="flex items-center gap-5">
                <Select
                  value={language}
                  bordered={false}
                  className="w-[150px] border border-mainyellow"
                  onChange={(e) => HandleChangeLanguage(e)}
                >
                  <Select.Option value="vi">
                    <div className="flex items-center gap-2">
                      <img
                        src="https://firebasestorage.googleapis.com/v0/b/taphoa-605ab.appspot.com/o/vietnam.png?alt=media&token=a2e4e0ef-e8c1-44ab-965f-8eb24a44d82d"
                        alt="vietnam flag"
                      />
                      <p>Tiếng Việt</p>
                    </div>
                  </Select.Option>
                  <Select.Option value="fr">
                    <div className="flex items-center gap-2">
                      <img
                        src="https://firebasestorage.googleapis.com/v0/b/taphoa-605ab.appspot.com/o/france.png?alt=media&token=87090e88-bcfc-443d-8050-e589ce33dcf4"
                        alt="vietnam flag"
                      />
                      <p>French</p>
                    </div>
                  </Select.Option>
                </Select>
              </div>
              <div
                className="text-[22px] p-2"
                onClick={() => setOpenSearchMB(!openSearchMB)}
              >
                <FaSearch />
              </div>
              <div className="text-[22px] p-2" onClick={() => setOpen(true)}>
                <IoIosMenu />
              </div>
              <div className="text-[22px] p-2">
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
          {openSearchMB && (
            <div className=" relative">
              <div className="border rounded-full border-orange-500 flex items-center bg-white ">
                <div className=" pl-4 w-full  justify-between items-center grid grid-cols-7">
                  <input
                    type="text"
                    className="outline-none mr-2 col-span-6"
                    placeholder="Tìm kiếm"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                  <div>
                    <div
                      className={`${
                        search ? "block" : "hidden"
                      }  bg-gray-500 text-gray-300 w-max p-1 rounded-full text-[10px] cursor-pointer`}
                      onClick={() => setSearch("")}
                    >
                      <RxCross2 />
                    </div>
                  </div>
                </div>
                <div className="bg-orange-500 py-3 px-6 text-white rounded-r-full cursor-pointer">
                  <FaSearch />
                </div>
              </div>
              {search && (
                <div className="absolute w-full bg-gray-50 top-full flex flex-col shadow-inner z-50 mt-2">
                  <div className=" flex flex-col">
                    {searchRs.map((product: any, idx: number) => (
                      <Link
                        href={`${pathNav}/chi-tiet-san-pham/${product.url}`}
                        key={idx}
                        className="cursor-pointer p-2 hover:bg-gray-100"
                      >
                        {product.title}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
        <>
          <Drawer
            placement="left"
            closable={false}
            width={300}
            onClose={() => setOpen(false)}
            open={open}
          >
            <div>
              <div className="p-5">
                <img src={TradeMarkData.websiteLogo} alt="logo" />
              </div>
              <div className="flex flex-col w-full border-b border-mainyellow pb-2">
                {TypeProductItems.map((item: any, idx: number) => {
                  const sort = productTypes?.filter(
                    (type: any) => type.parent === item.label
                  );
                  return (
                    <div key={idx}>
                      <div
                        className="w-full justify-between py-2 border-t items-center
                     flex"
                      >
                        <Link
                          href={`/${pathNav}/san-pham/${item.value}`}
                          className={`${
                            openTypeMB === idx + 1 && "text-orange-500"
                          }`}
                        >
                          {i18nTranslations(item.label)}
                        </Link>
                        {sort?.length > 0 && (
                          <div
                            className={`${
                              openTypeMB === idx + 1 && "text-orange-500"
                            }`}
                            onClick={() => setOpenTypeMB(idx + 1)}
                          >
                            <IoChevronDownOutline />{" "}
                          </div>
                        )}
                      </div>
                      {sort.length > 0 && openTypeMB === idx + 1 && (
                        <div className="ml-2 flex flex-col">
                          {sort?.map((items: any, idx: number) => (
                            <Link
                              href={`/${pathNav}/san-pham/${item.value}?type=${items.typeUrl}`}
                              key={idx}
                              className="hover:text-orange-500 py-1"
                            >
                              {items.type}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
              <div>
                <div className="flex flex-col mt-2">
                  {HeaderItems.map((item: any, idx: number) => (
                    <Link
                      href={`/${pathNav}/${item.value}`}
                      className="cursor-pointer border-b hover:text-red-500 duration-300 py-2"
                      key={idx}
                    >
                      {i18nTranslations(item.label)}
                    </Link>
                  ))}
                  {currentUser ? (
                    <>
                      <Link
                        href={`/${pathNav}/tai-khoan`}
                        className="cursor-pointer border-b hover:text-red-500 duration-300 py-2"
                      >
                        {i18nTranslations("Cá nhân")}
                      </Link>
                      <div
                        onClick={() => HandleLogout()}
                        className="cursor-pointer border-b hover:text-red-500 duration-300 py-2"
                      >
                        {i18nTranslations("Đăng xuất")}
                      </div>
                    </>
                  ) : (
                    <Link href={`/dang-nhap`}>
                      {" "}
                      <div className="cursor-pointer border-b hover:text-red-500 duration-300 py-2">
                        {i18nTranslations("Đăng nhập")}
                      </div>
                      <div className="cursor-pointer border-b hover:text-red-500 duration-300 py-2">
                        {i18nTranslations("Đăng ký")}
                      </div>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </Drawer>
        </>
      </div>
    </>
  );
};

export default Header;
