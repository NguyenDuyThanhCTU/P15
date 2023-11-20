"use client";
import { useData } from "@context/DataProviders";
import React from "react";

const UserOrders = () => {
  const { Orders } = useData();
  console.log(Orders);
  return (
    <div>
      <div className="grid grid-cols-7 gap-3  py-3 px-2 font-normal bg-mainyellow text-white items-center">
        <div>Ngày đặt hàng</div>
        <div>Mã đơn hàng</div>
        <div>Tên người nhận</div>
        <div>Địa chỉ nhận hàng</div>
        <div className="w-max">Tổng tiền thanh toán</div>
        <div className="w-full flex justify-end"> Tổng sản phẩm</div>
        <div>Trạng thái</div>
      </div>
      <div className="grid grid-cols-7">
        {Orders}
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default UserOrders;
