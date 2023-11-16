"use client";
import { Pagination } from "antd";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const CustomPagination = () => {
  const [current, setCurrent] = useState(1);
  const router = useRouter();
  const handleChangePage = (page: any) => {
    router.push(`/san-pham/tat-ca-san-pham?pageNumber=${page}`);
    setCurrent(page);
  };
  return (
    <div className="mt-5 d:flex justify-center p:hidden w-full">
      <Pagination current={current} onChange={handleChangePage} total={50} />
    </div>
  );
};

export default CustomPagination;
