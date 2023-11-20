"use client";
import { useData } from "@context/DataProviders";
import React, { useEffect } from "react";
import ProductCard from "../Products/ProductCard";

const UserFavorite = () => {
  const { Products, currentUser } = useData();

  const favoriteProducts = Products.filter((item: any) =>
    currentUser?.favorite?.includes(item.id)
  );
  console.log(favoriteProducts);
  return (
    <div className="grid gap-5 grid-cols-4">
      {favoriteProducts.map((item: any, idx: number) => (
        <div key={idx}>
          <ProductCard Data={item} />
        </div>
      ))}
    </div>
  );
};

export default UserFavorite;
