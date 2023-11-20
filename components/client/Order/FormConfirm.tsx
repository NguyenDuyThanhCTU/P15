"use client";
import { addDocument } from "@config/Services/Firebase/FireStoreDB";
import { useData } from "@context/DataProviders";
import { useStateProvider } from "@context/StateProvider";
import { notification } from "antd";
import Link from "next/link";
import React from "react";

const FormConfirm = ({ setStep, Data }: any) => {
  const { CartItems, Products, currentUser } = useData();
  const { setIsLoading } = useStateProvider();

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

  const HandleContinue = () => {
    setIsLoading(true);
    //create order data

    const orderData = {
      name: Data?.name,
      phone: Data?.phone,
      city: Data?.city,
      country: Data?.country,
      district: Data?.address,
      address: Data?.address,
      postCode: Data?.postCode,
      products: cartProducts,
      totalAmount: totalAmount,
      count: cartProducts.count,
      user: currentUser,
    };
    console.log(orderData);
    addDocument("orders", orderData).then(() => {
      notification.success({ message: "Đặt hàng thành công" });
      setStep(3);
    });
  };
  return (
    <div className="flex flex-col gap-5">
      <h2 className="text-[25px] font-normal">Thông tin đơn hàng</h2>
      <div className="grid grid-cols-2 gap-5">
        <div className="border">
          <div className="p-4 flex flex-col gap-2">
            <p>
              <strong>Khách hàng:</strong> {Data?.name}
            </p>
            <p>
              <strong>Số điện thoại:</strong> {Data?.phone}
            </p>
            <p>
              <strong>Địa chỉ:</strong> {Data?.address}
            </p>
            <p>
              <strong>Thành phố:</strong> {Data?.city}
            </p>
            <p>
              <strong>Quốc gia:</strong> {Data?.contry}
            </p>
            <p>
              <strong>Post code: </strong>
              {Data?.postCode}
            </p>
          </div>
        </div>
        <div className="border">
          <div className=" p-4 flex h-full justify-between flex-col">
            <div className="w-full flex justify-between">
              <div className="flex items-center gap-2 text-[18px]">
                <p>Đơn hàng </p>{" "}
                <Link
                  href={`/gio-hang`}
                  className="text-mainyellow italic underline hover:text-orange-500 duration-300 cursor-pointer"
                >
                  Xem chi tiết
                </Link>
              </div>
              <div></div>
            </div>
            <div className="flex w-full justify-between border-t pt-2">
              <div className="text-[22px] font-normal">Tổng thanh toán:</div>
              <div>
                <span className="text-[22px] font-normal">
                  {" "}
                  € {totalAmount}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <h2 className="text-[25px] font-normal">Phương thức thanh toán</h2>
        <p>Thanh toán tiền mặt</p>
      </div>
      <div className="grid grid-cols-2">
        <div className="font-normal text-[18px] flex justify-between w-full">
          <div>Tổng tiền hàng</div>
          <div>
            <span className=" font-normal"> € {totalAmount}</span>
          </div>
        </div>
        <div></div>
      </div>
      <div className="flex w-full  gap-5">
        <div
          className="py-2 px-6  duration-300 cursor-pointer text-mainyellow border-mainyellow uppercase border rounded-full font-normal hover:text-orange-500 hover:border-orange-500"
          onClick={() => setStep(1)}
        >
          Quay về
        </div>
        <div
          className="py-2  px-10 duration-300 cursor-pointer text-white bg-mainyellow border-mainyellow uppercase border rounded-full font-normal hover:bg-orange-500 hover:border-orange-500"
          onClick={() => HandleContinue()}
        >
          Tiếp tục
        </div>
      </div>
    </div>
  );
};

export default FormConfirm;
