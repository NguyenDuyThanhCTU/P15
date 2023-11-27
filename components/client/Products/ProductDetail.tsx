"use client";
import { Image, Modal, Tabs } from "antd";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { BiMinus, BiPlus } from "react-icons/bi";
import { BsFillCartPlusFill } from "react-icons/bs";
import { useData } from "@context/DataProviders";
import { usePathname, useRouter } from "next/navigation";
import { useStateProvider } from "@context/StateProvider";
import { FacebookProvider, Comments } from "react-facebook";
import Link from "next/link";
import { FiPhoneCall } from "react-icons/fi";
import { useTranslations } from "next-intl";

const ProductDetail = ({ Data, SimilarProduct }: any) => {
  const i18nTranslations = useTranslations("Data");
  const pathname = usePathname();
  const path = pathname?.split("/")[1];
  const [isCombo, setIsCombo] = useState(1);
  const { setCartItems, Sale, currentUser } = useData();
  const { setOpenCart, OpenCart } = useStateProvider();
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const router = useRouter();
  const onMinus = () => {
    if (isCombo > 0) {
      setIsCombo(isCombo - 1);
    }
  };
  const HandleOrder = (id: string, type: string) => {
    if (currentUser) {
      if (type === "buy") {
        setCartItems((prevItems: any) => [...prevItems, id]);
        router.push(`/${path}/gio-hang`);
      } else {
        setCartItems((prevItems: any) => [
          ...prevItems,
          ...Array(isCombo).fill(id),
        ]);
        setOpenCart(true);
      }
    } else {
      setIsModalOpen(true);
    }
  };

  const items = [
    {
      key: "1",
      label: "Chi tiết sản phẩm",
      children: (
        <>
          <h3 className="text-[24px] font-semibold ">
            {i18nTranslations("Thông tin sản phẩm")}
          </h3>
          <div
            className=""
            dangerouslySetInnerHTML={{ __html: Data?.content }}
          ></div>
        </>
      ),
    },
    {
      key: "2",
      label: "Bình luận",
      children: (
        <>
          <div className="w-[778px]">
            <FacebookProvider appId="781034490143336">
              {" "}
              <Comments
                href="https://khogachcaocaptinphat.com"
                width={778}
              />{" "}
            </FacebookProvider>
          </div>
        </>
      ),
    },
  ];
  return (
    <div className="flex flex-col gap-5  d:w-[1300px] d:mx-auto p:w-auto p:mx-2 pb-14">
      <div>
        <div className="grid grid-cols-2 d:mx-16 gap-16 font-LexendDeca d:flex-row p:flex-col p:mx-2 pb-14">
          <div className=" rounded-lg d:h-max p:h-auto overflow-hidden">
            <Image.PreviewGroup>
              <Image
                className="p-2 h-full w-full object-contain hover:scale-110 duration-500"
                src={Data?.image}
              />
            </Image.PreviewGroup>
            {Data?.subimage?.length > 0 && (
              <>
                {" "}
                <div className="w-full bg-gray-100 mt-3">
                  <div className="p-2 flex ">
                    <Image.PreviewGroup>
                      <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
                        slidesPerView={5}
                        slidesPerGroup={1}
                        autoplay={{
                          delay: 2500,
                          disableOnInteraction: false,
                        }}
                        modules={[Autoplay]}
                        className="mySwiper"
                      >
                        {Data?.subimage?.map((item: any, idx: number) => (
                          <SwiperSlide>
                            {" "}
                            {/* <div className="mx-4 w-[150px] h-[150px] overflow-hidden flex items-center"> */}
                            <Image
                              className="p-2 h-full w-full object-contain"
                              src={item.url}
                            />
                            {/* </div> */}
                          </SwiperSlide>
                        ))}
                      </Swiper>
                    </Image.PreviewGroup>
                  </div>
                </div>
              </>
            )}
          </div>
          <div className=" flex flex-col gap-5">
            <div>
              <h3 className="text-[26px] uppercase">{Data?.title}</h3>
              <div className="bg-black w-24 h-1"></div>
            </div>
            <div className="flex gap-1 flex-col text-[20px]">
              {Data?.sale?.discount === 0 ? (
                <>
                  <p className="font-normal text-[20px]">€ {Data?.price}</p>
                </>
              ) : (
                <div>
                  <p>
                    Giá cũ:{" "}
                    <span className="text-[16px] line-through">
                      {Data?.price} <sup>VNĐ</sup>
                    </span>
                  </p>
                  <div className="flex items-end">
                    <p>
                      Giá mới:{" "}
                      <span className="text-red-500 text-[20px]">
                        {Data?.sale?.newPrice} <sup>VNĐ</sup>
                      </span>{" "}
                    </p>
                    <div className="ml-5 border-2 border-red-500 bg-red-500 text-white p-2">
                      Giảm {Data?.sale?.discount} %
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="w-[200px] ">
              {Data?.state ? (
                <div className=" text-green-500 rounded-xl font-bold">
                  {i18nTranslations("Tình trạng: Còn hàng")}
                </div>
              ) : (
                <div className=" text-red-500  rounded-xl font-bold">
                  {i18nTranslations("Tình trạng: Hết hàng")}
                </div>
              )}
            </div>
            <div className="flex gap-5">
              <h3 className="py-1">{i18nTranslations("Số lượng:")}</h3>
              <div className="border border-gray-500   h-12 rounded-sm w-[200px] ">
                <div className="flex justify-between items-center h-full mx-5">
                  <BiMinus
                    onClick={() => onMinus()}
                    className="cursor-pointer "
                  />
                  <input
                    type="text"
                    value={`Số lượng: ${isCombo}`}
                    className=" focus-visible:outline-none w-full text-center border-0 px-0 py-[9px] h-auto text-13 "
                  />
                  <BiPlus
                    onClick={() => setIsCombo(isCombo + 1)}
                    className="cursor-pointer"
                  />
                </div>
              </div>
            </div>

            <>
              {" "}
              <div className="flex flex-col gap-4">
                <div
                  className=" col-span-3 w-full text-[18px] text-primary bg-white font-normal border-mainyellow hover:border-orange-500 hover:text-orange-500 rounded-full text-mainyellow duration-300 border flex items-center  py-2 justify-center cursor-pointer gap-1"
                  onClick={() => HandleOrder(Data?.id, "add")}
                >
                  <p>{i18nTranslations("Thêm vào giỏ")}</p>
                </div>

                <div
                  className=" col-span-3 w-full text-[18px] text-primary bg-mainyellow border-mainyellow rounded-full text-white font-normal border hover:bg-orange-500 hover:border-orange-500 duration-300 flex items-center  py-2 justify-center cursor-pointer gap-1"
                  onClick={() => HandleOrder(Data?.id, "buy")}
                >
                  {i18nTranslations("Mua ngay")}
                </div>
              </div>
            </>

            <div className="py-4 border-t border-b w-full font-light">
              <h3>{i18nTranslations("Mô tả")}</h3>
              <div dangerouslySetInnerHTML={{ __html: Data?.describe }}></div>
            </div>
            <div className="flex gap-3 items-center font-light">
              <span className="">
                {i18nTranslations("Lượt xem")} {Data?.access}
              </span>
            </div>
          </div>
        </div>

        <div className="grid p:grid-cols-1 d:grid-cols-4 gap-5">
          <div className="d:px-16 py-5 p:px-2 border col-span-3">
            <Tabs
              defaultActiveKey="1"
              items={items}
              className="bg-white px-10 rounded-md font-LexendDeca py-5"
            />
          </div>

          <div className="col-span-1">
            <h3 className="text-mainred py-2 border-b-2 border-mainred uppercase font-bold">
              {i18nTranslations("Sản phẩm liên quan")}
            </h3>
            <div>
              {SimilarProduct?.map((item: any, idx: number) => (
                <Link href={`/${path}/chi-tiet-san-pham/${item.url}`}>
                  <div
                    className="flex gap-3 py-3 border-b hover:bg-gray-100 duration-300"
                    key={idx}
                  >
                    <div className="flex-[30%]">
                      <img src={item.image} alt="similarProduct" />
                    </div>
                    <div className="flex-[60%]">
                      <h3 className="truncate1 text-black">{item.title}</h3>
                      <h3 className="text-mainred text-[18px] font-normal text-black">
                        € {item.price}
                      </h3>
                      <div className="flex">
                        <div className="py-1 px-4 bg-mainred text-white flex gap-2 items-center text-[15px]">
                          <FiPhoneCall />
                          <span>{i18nTranslations("Chi tiết")}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* <div
      className={`fixed bottom-36 right-[-300px] ${
        OpenCart ? " z-50" : "z-0"
      }`}
    >
      <ShopCart />
    </div> */}
      <Modal
        closable={false}
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={null}
      >
        <div>
          <h2 className="text-[24px] font-semibold">
            {i18nTranslations("Đến trang đăng nhập")}
          </h2>
          <p>{i18nTranslations("Đăng nhập để mua hàng")}</p>
          <div className="flex w-full justify-center gap-5 mt-5">
            <div
              className="py-2 px-6 rounded-full border border-mainyellow cursor-pointer text-mainyellow duration-300 hover:border-orange-500 hover:text-orange-500"
              onClick={() => setIsModalOpen(false)}
            >
              {i18nTranslations("Hủy")}
            </div>
            <div
              className="py-2 px-6 rounded-full border border-mainyellow bg-mainyellow text-white duration-300 hover:bg-orange-500 hover:border-orange-500 cursor-pointer"
              onClick={() => router.push("/dang-nhap")}
            >
              {i18nTranslations("Đăng nhập")}
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ProductDetail;
