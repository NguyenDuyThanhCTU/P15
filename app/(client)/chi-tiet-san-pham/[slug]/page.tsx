import ProductDetail from "@components/client/Products/ProductDetail";
import { getDataByTypeProps } from "@lib/get-data";
import Link from "next/link";
import React from "react";

const ProductDetailPage = async ({ params }: { params: { slug: string } }) => {
  const Data = await getDataByTypeProps("products", "url", params.slug);
  const similarProduct = await getDataByTypeProps(
    "products",
    "parentUrl",
    Data[0].parentUrl
  );
  return (
    <div>
      <div className="w-[1300px] mx-auto">
        <div className="flex items-center gap-2 font-light pt-5 pb-10 ">
          <Link
            href={`/`}
            className="hover:text-blue-700 cursor-pointer underline"
          >
            Trang chủ
          </Link>
          <p className="text-[14px]">/</p>
          <Link
            href={`/san-pham/${Data[0].parentUrl}`}
            className="hover:text-blue-700 cursor-pointer underline"
          >
            {Data[0].parent}
          </Link>
          <p className="text-[14px]">/</p>
          <p>{Data[0].title}</p>
        </div>

        <div>
          <ProductDetail Data={Data[0]} SimilarProduct={similarProduct} />
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
