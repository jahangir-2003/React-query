import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { fetchCategory, fetchProduct } from "../Api.tsx";
import ProductGrid from "../Component/ProductGrid.tsx";
import Title from "../Component/Title.tsx";
import PageHeading from "../Component/PageHeading.tsx";
import { BiPlus } from "react-icons/bi";
import { DataType } from "../Component/interface";
import { AddProduct } from "../Component/Modal.tsx";

const Home: React.FC = () => {
  const [open, setOpen] = useState<Boolean>(false);
  const [newData, setNewData] = useState<DataType>({
    title: "",
    brand: "",
    model: "",
    color: "",
    category: "",
    discount: 0,
    price: 0,
  });
  const {
    data: productData,
    isLoading: isProductLoading,
    isError: isProductError,
  } = useQuery({
    queryKey: ["product"],
    queryFn: fetchProduct,
  });

  const handleAddProduct = () => {
    console.log(newData);
  };

  if (isProductLoading) {
    return <div>Loading...</div>;
  }

  if (isProductError) {
    return <div>Error loading data</div>;
  }

  return (
    <div className="w-[95%] mx-auto relative">
      <PageHeading heading="" />

      <Title title="products" />
      <ProductGrid data={productData} />
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-10 right-10 bg-blue-950 w-12 h-12 rounded-full flex items-center justify-center shadow-lg"
      >
        {<BiPlus size={25} color="white" />}
      </button>
      <AddProduct
        open={open}
        setOpen={setOpen}
        newProduct={newData}
        setNewProduct={setNewData}
        handleAddProduct={handleAddProduct}
      />
    </div>
  );
};

export default Home;
