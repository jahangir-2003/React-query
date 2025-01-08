import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./Page/Home.tsx";
import SingleProduct from "./Page/SingleProduct.tsx";
import { useQuery } from "@tanstack/react-query";
import { fetchCategory } from "./Api.tsx";
import { BiCartAdd, BiHeart } from "react-icons/bi";
import ProductByCategory from "./Page/ProductByCategory.tsx";
import Pagination from "./Page/Pagination.tsx";

const App = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["category"],
    queryFn: fetchCategory,
  });

  const loadingBoxes = Array.from({ length: 8 }).map((_, index) => (
    <div
      key={index}
      className="w-full p-4 bg-slate-700 mb-2 animate-pulse"
    ></div>
  ));

  return (
    <BrowserRouter>
      <nav className="fixed bg-blue-950 w-full justify-between h-14 flex items-center px-4 text-white z-50">
        <div className="flex-row flex gap-10 items-center">
          <h2 className="text-2xl font-bold">Logo</h2>
          <div className="flex space-x-4">
            <Link to="/" className="hover:text-gray-300">
              Home
            </Link>
            <Link to="/pagination">Pagination</Link>
          </div>
        </div>
        <div className="flex flex-row gap-5">
          <button type="button">{<BiCartAdd color="white" size={25} />}</button>
          <button type="button">{<BiHeart size={25} color="white" />}</button>
        </div>
      </nav>

      <div className="pt-14 flex">
        <div className="fixed w-[140px] h-screen bg-blue-950">
          {isError && (
            <div className="text-white p-4">
              Error loading categories: {error?.message}
            </div>
          )}

          {isLoading ? (
            <div className="text-white p-4">{loadingBoxes}</div>
          ) : (
            data?.map((item: string, index: number) => (
              <div key={index} className="text-white w-full">
                <Link
                  to={`/products/${item}`}
                  className="w-full p-2 capitalize flex"
                >
                  {item}
                </Link>
                <span className="w-full border-b border-slate-500 flex"></span>
              </div>
            ))
          )}
        </div>

        <div className="pl-[150px] w-full flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products/:category" element={<ProductByCategory />} />
            <Route path="/product/:id" element={<SingleProduct />} />
            <Route path="/pagination" element={<Pagination />} />
            <Route path="*" element={<div>Page Not Found</div>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
