"use client";
import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { notification } from "antd";
import moment from "moment";
import Input from "@components/admin/Item/Input";
import { useData } from "@context/DataProviders";
import Link from "next/link";

const Cart = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [district, setDistrict] = useState("");
  const [street, setStreet] = useState("");
  const [address, setAddress] = useState("");
  const [description, setDescription] = useState("");

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

  const HandleDiscard = () => {
    setAddress("");
    setStreet("");
    setCity("");
    setDescription("");
    setDistrict("");
    setName("");
    setPhone("");
    setEmail("");
  };

  const HandleSubmit = async (e: any) => {
    e.preventDefault();
    if (!phone || !name || !email || !address || !district || !city) {
      notification["warning"]({
        message: "Thao tác KHÔNG thành công !",
        description: `
           Vui lòng nhập đầy đủ THÔNG TIN !`,
      });
    } else {
      const currentTime = new Date();

      const dataFields = [
        { title: "Họ Tên", value: name },
        { title: "Email", value: email },
        { title: "SĐT", value: phone },
        { title: "ĐC", value: `${address} ${street}, ${district}, ${city}` },
        { title: "Yêu Cầu Khác", value: description },
        { title: "Tổng số lượng sản phẩm", value: `${FinalCount} Sản phẩm` },
        {
          title: "Chi tiết hóa đơn",
          value: `${cartProducts
            .map((items: any, idx: number) => {
              return `----------------------------------------------- Sản phẩm ${idx} ------------------------------------------------- \nTên sản phẩm: ${items.title} \n số lượng: ${items.count}  \n loại: ${items.type} \n Giá: ${items.price} VNĐ \n `;
            })
            .join("")}
        `,
        },
        {
          title: "Tổng Giá trị hóa đơn",
          value: `${totalAmount.toFixed(3)} VNĐ`,
        },
        { title: "Thời gian đặt", value: currentTime },
      ];

      const data: any = {};

      dataFields.forEach((field) => {
        data[field.title] = field.value;
      });

      const response = await fetch(
        "https://formsubmit.co/ajax/thanhnd2512@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (response.ok) {
        HandleDiscard();
        notification["success"]({
          message: "Thành công !",
          description: `
             Chúng tôi sẽ liên hệ trong thời gian sớm nhất !`,
        });
      } else {
        notification["error"]({
          message: "Lỗi !",
          description: `
             Lỗi không xác định !`,
        });
      }
    }
  };

  const currentTime = new Date();
  const formatCurrentTime = moment(currentTime).format("YYYY-MM-DD");

  return (
    <div>
      <div className="w-[1300px] mx-auto py-14">
        <div className="border shadow-xl">
          <div className="p-2">
            <h3 className=" uppercase text-[24px] font-normail  w-max  pb-2">
              giỏ hàng của bạn
            </h3>
            <div className="grid grid-cols-5 w-full border-b pb-3 text-[22px] font-normal border-black">
              <p className="col-span-2">Sản phẩm</p>
              <p className=" col-span-1">giá</p>
              <p className=" col-span-1">Số lượng</p>
              <p className=" col-span-1">Tạm tính</p>
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
                              Xóa
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
                    Tổng tiền hàng:
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
              href={`/`}
              className="py-2 px-6  duration-300 cursor-pointer text-mainyellow border-mainyellow uppercase border rounded-full font-normal hover:text-orange-500 hover:border-orange-500"
            >
              Tiếp tục mua hàng
            </Link>
            <Link
              href={`/dat-hang`}
              className="py-2 px-10 duration-300 cursor-pointer text-white bg-mainyellow border-mainyellow uppercase border rounded-full font-normal hover:bg-orange-500 hover:border-orange-500"
            >
              Đặt hàng
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
