import React from "react";
import { DataType } from "./interface";
import { Link } from "react-router-dom";

const ProductCard = ({ item }: { item: DataType }) => {
  return (
    <Link
      key={item.id}
      to={`/product/${item.id}`}
      className=" rounded-md border-2 w-full border-slate-300 relative"
    >
      <img
        src={item.image}
        alt={item.title}
        className="w-[200px] h-[200px] scale-100 hover:scale-110  overflow-hidden mx-auto object-contain"
      />
      {item.discount && (
        <h2 className="bg-red-500 px-2 py-[1px] rounded-sm text-white absolute top-4 left-4">
          -{item.discount}%
        </h2>
      )}
      <div className="p-2">
        <h2 className="truncate">{item.title}</h2>
        <h2>$ {item.price}</h2>
        <h2 className="text-slate-600 line-clamp-3 text-[15px]">
          {item.description}
        </h2>
      </div>
    </Link>
  );
};

export default ProductCard;
