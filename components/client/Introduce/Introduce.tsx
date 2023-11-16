"use client";
import { useData } from "@context/DataProviders";
import React from "react";

const Introduce: React.FC = () => {
  const { Introduction } = useData();
  return (
    <div
      className="text-[17px] leading-7 mt-5"
      dangerouslySetInnerHTML={{ __html: Introduction.content }}
    ></div>
  );
};

export default Introduce;
