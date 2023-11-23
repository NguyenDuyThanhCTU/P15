"use client";
import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { notification } from "antd";
import moment from "moment";
import Input from "@components/admin/Item/Input";
import { useData } from "@context/DataProviders";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";

const Cart = () => {
  const pathname = usePathname();
  const path = pathname.split("/")[1];
  const i18nTranslations = useTranslations("Data");

  const { CartItems, Products, setCartItems, Sale } = useData();

  const cartMap: any = {};

  CartItems?.forEach((itemId: any) => {
    cartMap[itemId] = (cartMap[itemId] || 0) + 1;
  });

  const cartProducts: any = [];
  let totalAmount = 0.0;
  let FinalCount = 0;
  Object.keys(cartMap).forEach((itemId) => {
    const product = Products.find((product: any) => product.id === itemId);

    if (product) {
      const itemCount = cartMap[itemId];
      //   let price: any = 0;
      //   if (product.sale.discount === 0) {
      //     price = parseFloat(product.price.replace(/\./g, "").replace(",", "."));
      //   } else {
      //     price = parseFloat(
      //       product.sale.newPrice.replace(/\./g, "").replace(",", ".")
      //     );
      //   }
      const priceAsNumber = parseFloat(product.price);

      const itemTotal = priceAsNumber * itemCount;

      totalAmount += itemTotal;
      FinalCount += itemCount;
      cartProducts.push({
        ...product,

        count: itemCount,
        total: itemTotal,
      });
    }
  });

  const handleRemoveFromCart = (productId: any) => {
    const updatedCartItems = CartItems.filter(
      (itemId: any) => itemId.id !== productId
    );
    setCartItems(updatedCartItems);
  };

  const currentTime = new Date();
  const formatCurrentTime = moment(currentTime).format("YYYY-MM-DD");

  return (
    <div>
      <div className="p:w-auto p:mx-2 d:w-[1300px] d:mx-auto py-14">
        <div className="border shadow-xl">
          <div className="p-2">
            <h3 className=" uppercase text-[24px] font-normail  w-max  pb-2">
              {i18nTranslations("giỏ hàng của bạn")}
            </h3>
            <div className="grid grid-cols-5 w-full border-b pb-3 text-[22px] font-normal border-black">
              <p className="col-span-2">{i18nTranslations("Sản phẩm")}</p>
              <p className=" col-span-1">{i18nTranslations("Giá")}</p>
              <p className=" col-span-1">{i18nTranslations("Số lượng")}</p>
              <p className=" col-span-1">{i18nTranslations("Tạm tính")}</p>
            </div>
            <div className="text-right">
              <div className="h-[420px] overflow-y-auto   ">
                {cartProducts.map((product: any, idx: number) => {
                  const isSale =
                    cartProducts[idx]?.sale.discount === 0 ||
                    formatCurrentTime > Sale.end;
                  return (
                    <div
                      key={product.id}
                      className="grid grid-cols-5  px-2 gap-1 items-start py-6 w-full border-b border-black relative"
                    >
                      <div className="col-span-2 flex gap-4">
                        <div className="w-14 h-14 rounded-lg relative">
                          <img
                            src={product.image}
                            alt="product img"
                            className="w-full h-full object-cover hover:scale-110 duration-500"
                          />
                        </div>
                        <div className="flex flex-col">
                          <h3 className="   w-full text-[20px] font-light">
                            {product.title}

                            {!isSale && (
                              <>
                                {" "}
                                <div className="font-bold text-[14px] flex gap-3">
                                  <p className="line-through text-gray-500  ">
                                    {" "}
                                    € {product.price}
                                  </p>
                                  <span className="text-mainred">
                                    -{product.sale.discount}%
                                  </span>
                                </div>
                              </>
                            )}
                          </h3>
                          <div
                            className="flex"
                            onClick={() => handleRemoveFromCart(product.id)}
                          >
                            <div className="border border-mainyellow py-2 cursor-pointer hover:bg-mainyellow hover:text-white duration-300 px-6 rounded-full text-mainyellow">
                              {i18nTranslations("Xóa")}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-span-1 flex justify-start">
                        <span className="text-[18px] font-light">
                          {isSale ? (
                            <> € {product.price}</>
                          ) : (
                            <> € {product.sale.newPrice}</>
                          )}
                        </span>
                      </div>
                      <div className="col-span-1 flex justify-start font-light">
                        <span> {product.count}</span>
                      </div>
                      <div className="col-span-1 flex justify-start text-[18px] font-light">
                        € {product.total}
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="py-4  flex w-full justify-between px-2">
                <div className=" "></div>
                <div className="flex flex-col gap-2  uppercase font-bold  text-redPrimmary text-[20px] ">
                  <div>
                    {i18nTranslations("Tổng tiền hàng")}
                    <span className=""> € {totalAmount}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between mt-10">
          <div></div>
          <div className="flex gap-5">
            <Link
              href={`/${path}/`}
              className="py-2 px-6  duration-300 cursor-pointer text-mainyellow border-mainyellow uppercase border rounded-full font-normal hover:text-orange-500 hover:border-orange-500"
            >
              {i18nTranslations("Tiếp tục mua hàng")}
            </Link>
            <Link
              href={`/${path}/dat-hang`}
              className="py-2 px-10 duration-300 cursor-pointer text-white bg-mainyellow border-mainyellow uppercase border rounded-full font-normal hover:bg-orange-500 hover:border-orange-500"
            >
              {i18nTranslations("Đặt hàng")}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
