import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";
import { fetchProductById } from "../Api.tsx";
import PageHeading from "../Component/PageHeading.tsx";
import { BiCartAdd, BiHeart } from "react-icons/bi";

const SingleProduct = () => {
  const { id } = useParams();

  const { data, isError, isLoading, error } = useQuery({
    queryKey: ["single-product", id],
    queryFn: () => fetchProductById(id),
  });

  // Handle loading state
  if (isLoading) {
    return <div>Loading...</div>;
  }

  // Handle error state
  if (isError) {
    return (
      <div>
        Error: {error instanceof Error ? error.message : "Something went wrong"}
      </div>
    );
  }

  // Ensure that `data` is available before rendering
  if (!data) {
    return <div>No product found.</div>;
  }

  return (
    <div className="w-[95%] mx-auto">
      <PageHeading heading={`Product / ${data?.title?.slice(0, 40)} ...`} />
      <div className="flex flex-col md:flex-row items-center">
        <img
          src={data?.image}
          alt={data?.title}
          className="w-[40%] h-full object-contain"
        />
        <div className="flex flex-col gap-3">
          <h2 className="text-xl">
            <span>Title :-</span>{" "}
            <span className="text-slate-900">{data?.title}</span>
          </h2>
          <h2 className="text-xl">
            <span>Title :-</span>{" "}
            <span className="text-slate-900">$ {data?.price}</span>
          </h2>
          <h2>
            <span>Category:-</span>{" "}
            <span className="text-slate-600 text-[18px] capitalize">
              {data?.category}
            </span>
          </h2>
          <h2>
            <span>Available Color:- </span>
            <span className="text-slate-600 text-[18px] capitalize">
              {data?.color}
            </span>
          </h2>
          <h2>
            <span>Description :-</span>{" "}
            <span className="text-slate-600 text-[15px]">
              {data?.description}
            </span>
          </h2>
          {/* <Rating /> */}
          <div className="flex flex-row gap-5 md:mt-5">
            <button className="w-10 h-10 bg-blue-800 items-center justify-center flex rounded-sm text-white">
              <BiCartAdd size={25} />
            </button>
            <button className="w-10 h-10 bg-blue-800 items-center justify-center flex rounded-sm text-white">
              <BiHeart size={25} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
