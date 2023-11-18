"use client";
import Content from "@components/admin/Content/Content";
import AdminDropDown from "@components/admin/Item/AdminDropDown";
import Header from "@components/layout/admin-layout/Header";
import Sidebar from "@components/layout/admin-layout/Sidebar";
import { useAuth } from "@context/AuthProviders";
import { useRouter } from "next/navigation";

import React, { useEffect } from "react";

const AdminPage = () => {
  const { verify } = useAuth();
  const router = useRouter();
  useEffect(() => {
    if (!verify) {
      router.push("/dang-nhap");
    }
  }, []);
  return (
    <div>
      <div className="grid grid-flow-col font-LexendDeca relative ">
        <AdminDropDown />

        <div className="flex w-full">
          <div
            className={`overflow-hidden  d:min-w-[310px] 
          d:block p:hidden`}
          >
            <Sidebar />
          </div>
          <div className="flex-[80%]  bg-[#292929] ">
            <div className="d:relative p:fixed w-full z-20">
              <Header />
            </div>
            <div className="d:mt-0 p:mt-16">
              <Content />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
