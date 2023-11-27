"use client";
import HomeSlide from "@components/client/Home/HomeSlide";
import Copyright from "@components/layout/client-layout/Copyright";
import Footer from "@components/layout/client-layout/Footer";
import Header from "@components/layout/client-layout/Header";
import Hotline from "@components/layout/client-layout/Hotline";
import MobileFooter from "@components/layout/client-layout/MobileFooter";
import OnTop from "@components/layout/client-layout/OnTop";
import ProductTypeList from "@components/layout/client-layout/ProductTypeList";
import TopFooter from "@components/layout/client-layout/TopFooter";
import { Metadata } from "next";
import { usePathname } from "next/navigation";
import React from "react";

type ClientLayoutProps = {
  children: React.ReactNode;
};

const layout: React.FC<ClientLayoutProps> = ({ children }) => {
  const pathname = usePathname();
  return (
    <div className="font-LexendDeca font-extralight">
      <Header />

      <div className="p:mt-[84px] d:mt-[135px]">
        {(pathname === "/fr" || pathname == "/vi") && (
          <div className="">
            <HomeSlide />
          </div>
        )}
        <ProductTypeList />
        <div className="z-0 relative">{children}</div>

        <TopFooter />
        <Footer />
        <div className="relative z-50">
          <OnTop />
          <Hotline />
        </div>
        <div className="w-full d:hidden p:fixed bottom-0">
          <MobileFooter />
        </div>
        <Copyright />
      </div>
    </div>
  );
};

export default layout;
