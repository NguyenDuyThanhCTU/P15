import { TopFooterItems } from "@assets/item";
import { useTranslations } from "next-intl";
import React from "react";

const TopFooter = () => {
  const i18nTranslations = useTranslations("Data");

  return (
    <div className="bg-mainyellow text-white">
      <div className="d:w-[1250px] p:w-auto  p:mx-2 d:mx-auto flex  d:flex-row p:flex-col  gap-5 justify-between py-8">
        {TopFooterItems.map((item: any, idx: number) => (
          <div key={idx} className="flex items-center gap-3">
            <div>
              <img src={item.image} alt="top footer" />
            </div>
            <p className="w-max font-normal">{i18nTranslations(item.label)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopFooter;
