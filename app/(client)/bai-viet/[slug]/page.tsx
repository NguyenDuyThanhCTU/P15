import React from "react";
import { getDataByTypeProps } from "../../../../lib/get-data";
import PostDetail from "@components/client/Posts/PostDetail";

const PostDetailPage = async ({ params }: { params: { slug: string } }) => {
  const Data: any = [];
  let RelatedArticles: any = [];

  let newsData: any = await getDataByTypeProps("news", "url", params.slug);

  if (newsData.length > 0) {
    Data.push(newsData[0]);
    RelatedArticles = newsData;
  }

  return (
    <>
      {Data && RelatedArticles && (
        <PostDetail Data={Data[0]} RelatedArticles={RelatedArticles} />
      )}
    </>
  );
};

export default PostDetailPage;
