import React from "react";
import { DataType } from "./interface";
import ProductCard from "./ProductCard.tsx";

const ProductGrid = ({ data }: { data: DataType[] }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
      {data?.map((item: DataType) => (
        <ProductCard item={item} />
      ))}
    </div>
  );
};

export default ProductGrid;
