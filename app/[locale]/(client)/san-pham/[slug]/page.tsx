import ProductMap from "@components/client/Introduce/ProductMap";
import ProductCard from "@components/client/Products/ProductCard";
import { getDataByTypeProps } from "@lib/get-data";

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
        <ProductMap SearchValue={SearchValue} ProductType={ProductType} />
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
