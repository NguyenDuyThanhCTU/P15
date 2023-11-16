import Copyright from "@components/layout/client-layout/Copyright";
import Footer from "@components/layout/client-layout/Footer";
import Header from "@components/layout/client-layout/Header";
import Hotline from "@components/layout/client-layout/Hotline";
import OnTop from "@components/layout/client-layout/OnTop";
import React from "react";

type ClientLayoutProps = {
  children: React.ReactNode;
};

const layout: React.FC<ClientLayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <div className="mt-16">{children}</div>

      <Footer />
      <div className="relative z-50">
        <OnTop />
        <Hotline />
      </div>
      <Copyright />
    </>
  );
};

export default layout;
