import { getAllDataProps, getDataByTypeProps } from "@lib/get-data";
import moment from "moment";
import Link from "next/link";
import React from "react";

const BlogPage = async () => {
  const Data = await getDataByTypeProps("posts", "topic", "News");

  return (
    <div>
      <div className="w-[1300px] mx-auto  pt-5 pb-10">
        <div className="flex items-center gap-2 font-light pt-5 pb-10 ">
          <Link
            href={`/`}
            className="hover:text-blue-700 cursor-pointer underline"
          >
            Trang chủ
          </Link>
          <p className="text-[14px]">/</p>
          <p>Blog</p>
        </div>
        <div className="grid grid-cols-3 gap-5  ">
          {Data.map((item: any, idx: number) => {
            const content = item?.content;
            const maxLength = 150;

            const truncatedContent = content
              ? content.substring(0, maxLength)
              : "";

            const markup = { __html: truncatedContent };
            return (
              <Link
                href={`/bai-viet/${item.url}`}
                key={idx}
                className="cursor-pointer hover:shadow-2xl duration-300 mt-2"
              >
                <div className="h-[235px] flex justify-center">
                  <img
                    src={item.image}
                    alt="blog"
                    className="h-full object-cover"
                  />
                </div>
                <div className="p-2">
                  <h2 className="font-normal mt-2 truncate2">{item.title}</h2>
                  <div
                    dangerouslySetInnerHTML={markup}
                    className="truncate2 mt-2 font-extralight"
                  ></div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
