import DisplayProduct from "@components/client/Home/DisplayProduct";
import { getAllDataProps } from "@lib/get-data";
import React from "react";

const HomePage = async () => {
  const Data = await getAllDataProps("products");
  const OutstandingProducts = Data.filter(
    (item: any) => item.topic === "Sản phẩm nổi bật"
  );
  return (
    <div className="">
      <div className="w-[1400px] mx-auto ">
        <DisplayProduct Data={OutstandingProducts} topic="Sản phẩm nổi bật" />
      </div>
    </div>
  );
};

export default HomePage;
