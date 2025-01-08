import React from "react";
import { DataType } from "./interface";
import { Link } from "react-router-dom";
import { BiEdit } from "react-icons/bi";
import { MdDeleteOutline } from "react-icons/md";

const ProductCard = ({
  item,
  setUpdate,
  handleDelete,
}: {
  item: DataType;
  setUpdate: React.Dispatch<React.SetStateAction<DataType>>;
  handleDelete: any;
}) => {
  return (
    <div
      key={item.id}
      className=" rounded-md border-2 w-full border-slate-300 relative"
    >
      {item.image && (
        <img
          src={item.image}
          alt={item.title}
          className="w-[200px] h-[200px] scale-100 hover:scale-110  overflow-hidden mx-auto object-contain bg-blend-multiply"
        />
      )}
      {item.discount && (
        <h2 className="bg-red-500 px-2 py-[1px] rounded-sm text-white absolute top-4 left-4">
          -{item.discount}%
        </h2>
      )}
      <div className="flex flex-col p-2">
        <Link to={`/product/${item.id}`}>
          <h2 className="truncate">{item.title}</h2>
          <h2>$ {item.price}</h2>
          <h2 className="text-slate-600 line-clamp-3 text-[15px]">
            {item.description}
          </h2>
        </Link>
        <div className="flex flex-row gap-2">
          <button
            className="bg-green-700 w-10 h-10 flex items-center justify-center my-2 rounded-md "
            onClick={() => setUpdate(item)}
          >
            {<BiEdit size={25} color="white" />}
          </button>
          <button
            className="bg-red-700 w-10 h-10 flex items-center justify-center my-2 rounded-md "
            onClick={() => handleDelete(item.id)}
          >
            {<MdDeleteOutline size={25} color="white" />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
