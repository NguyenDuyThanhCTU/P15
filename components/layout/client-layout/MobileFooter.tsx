import React from "react";
import { useData } from "@context/DataProviders";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoLocationSharp } from "react-icons/io5";
import { SiZalo } from "react-icons/si";
import Link from "next/link";

const MobileFooter = () => {
  const { ContactData, SocialMedia } = useData();
  return (
    <div className="h-[45px] w-full bg-slate-100 border-t">
      <div className="w-full px-4 h-full flex justify-between items-center">
        <div onClick={() => window.open(`tel:${ContactData.phone}`, "_self")}>
          <a className="p-1">
            <BsFillTelephoneFill className="text-[22px] text-gray-500" />
          </a>
        </div>
        <div onClick={() => window.open(`https://${SocialMedia[0]}`, "_self")}>
          <a className="p-1">
            <SiZalo className="text-[22px] text-gray-500" />
          </a>
        </div>
        <div
          onClick={() => window.open(`mailto:${ContactData.gmail}`, "_self")}
        >
          <a className="p-1">
            <AiOutlineMail className="text-[22px] text-gray-500" />
          </a>
        </div>
        <div onClick={() => window.open(`https://${SocialMedia[6]}`, "_self")}>
          <a className="p-1">
            <IoLocationSharp className="text-[22px] text-gray-500" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default MobileFooter;
