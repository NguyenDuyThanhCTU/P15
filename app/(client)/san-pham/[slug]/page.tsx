import ProductCard from "@components/client/Products/ProductCard";
import { getDataByTypeProps } from "@lib/get-data";
import Link from "next/link";
import React from "react";

const ProductPage = async ({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const ProductType = await getDataByTypeProps(
    "productTypes",
    "parentUrl",
    params.slug
  );

  const ProductType1 = ProductType.filter(
    (item: any) => item.typeUrl === searchParams.type
  );
  let SearchValue: any;
  if (searchParams.type !== undefined) {
    SearchValue = searchParams.type;
  }

  let Data: any;
  if (searchParams.type === undefined) {
    Data = await getDataByTypeProps("products", "parentUrl", params.slug);
  } else {
    Data = await getDataByTypeProps("products", "typeUrl", SearchValue);
  }
  return (
    <div>
      <div className="p:w-auto p:mx-2 d:w-[1300px] d:mx-auto">
        <div className="flex items-center gap-2 font-light pt-5 pb-10 ">
          <Link
            href={`/`}
            className="hover:text-blue-700 cursor-pointer underline"
          >
            Trang chủ
          </Link>
          <p className="text-[14px]">/</p>
          {SearchValue ? (
            <>
              {" "}
              <Link
                href={`/san-pham/${ProductType[0]?.parentUrl}`}
                className="hover:text-blue-700 cursor-pointer underline"
              >
                {ProductType[0]?.parent}
              </Link>
            </>
          ) : (
            <>
              <p> {ProductType[0]?.parent}</p>
            </>
          )}
          {SearchValue && (
            <>
              <p className="text-[14px]">/</p>
              <div className=" ">{ProductType1[0].type}</div>
            </>
          )}
        </div>
        <div className="my-5">
          <div className="grid p:grid-cols-2 d:grid-cols-5  gap-5">
            {Data.map((item: any, idx: number) => (
              <div key={idx}>
                <ProductCard Data={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
