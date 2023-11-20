"use client";
import Input from "@components/admin/Item/Input";
import { notification } from "antd";
import Link from "next/link";
import React, { useState } from "react";

const FormOrder = ({ setStep, setData }: any) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("84");
  const [postCode, setPostCode] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [address, setAddress] = useState("");
  const HandleContinue = () => {
    if (!name || !phone || !postCode || !city || !country || !address) {
      notification.warning({ message: "Vui lòng nhập đầy đủ thông tin" });
    } else {
      const regexPhone = /([0-9]{10})\b/;
      const regexPostCode = /^[0-9]+$/;

      if (!regexPhone.test(phone)) {
        return notification.error({
          message: "Số điện thoại không hợp lệ",
        });
      }
      if (!regexPostCode.test(postCode)) {
        return notification.error({
          message: "Post code không hợp lệ",
        });
      }
      const Data = {
        name: name,
        phone: phone,
        postCode: postCode,
        city: city,
        country: country,
        address: address,
      };
      setData(Data);
      setStep(2);
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <Input
        text="Họ và tên"
        Value={name}
        setValue={(e: any) => {
          setName(e.target.value);
        }}
        Input={true}
      />
      <Input
        text="Địa chỉ"
        Value={address}
        setValue={(e: any) => {
          setAddress(e.target.value);
        }}
        Input={true}
      />
      <Input
        text="Post code"
        Value={postCode}
        setValue={(e: any) => {
          setPostCode(e.target.value);
        }}
        Input={true}
      />
      <Input
        text="Thành phố"
        Value={city}
        setValue={(e: any) => {
          setCity(e.target.value);
        }}
        Input={true}
      />
      <Input
        text="Quốc gia"
        Value={country}
        setValue={(e: any) => {
          setCountry(e.target.value);
        }}
        Input={true}
      />
      <Input
        text="Số điện thoại"
        Value={phone}
        setValue={(e: any) => {
          setPhone(e.target.value);
        }}
        Input={true}
      />
      <div className="flex w-full justify-center">
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

export default FormOrder;
