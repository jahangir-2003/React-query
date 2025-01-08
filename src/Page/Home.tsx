import {
  keepPreviousData,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import React, { useState } from "react";
import { fetchCategory, fetchProduct, PostProduct } from "../Api.tsx";
import ProductGrid from "../Component/ProductGrid.tsx";
import Title from "../Component/Title.tsx";
import PageHeading from "../Component/PageHeading.tsx";
import { BiPlus } from "react-icons/bi";
import { DataType } from "../Component/interface";
import { AddProduct } from "../Component/Modal.tsx";

const Home: React.FC = () => {
  const [open, setOpen] = useState<Boolean>(false);
  const queryClient = useQueryClient();

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

  const { data: category } = useQuery({
    queryKey: ["category"],
    queryFn: fetchCategory,
    placeholderData: keepPreviousData,
  });

  // Post product mutation
  const mutation = useMutation({
    mutationFn: () => PostProduct(newData),
    onSuccess: (data) => {
      queryClient.setQueryData(
        ["product"],
        (oldData: DataType[] | undefined) => {
          if (!oldData) return [data];
          return [data, ...oldData];
        }
      );
      setNewData({
        image: null,
        title: "",
        brand: "",
        model: "",
        color: "",
        category: "",
        discount: 0,
        price: 0,
      });
      setOpen(!open);
    },
  });

  const handleAddProduct = () => {
    mutation.mutate();
  };

  if (isProductLoading) {
    return <div>Loading...</div>;
  }

  if (isProductError) {
    return <div>Error loading data</div>;
  }

  return (
    <div className="w-[95%] mx-auto relative">
      <PageHeading heading="Products" />

      <Title title="Products" />
      <ProductGrid data={productData} />

      {/* Add Product Button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-10 right-10 bg-blue-950 w-12 h-12 rounded-full flex items-center justify-center shadow-lg"
      >
        {<BiPlus size={25} color="white" />}
      </button>

      {/* AddProduct Modal */}
      <AddProduct
        open={open}
        setOpen={setOpen}
        newProduct={newData}
        setNewProduct={setNewData}
        handleAddProduct={handleAddProduct}
        category={category || []}
      />
    </div>
  );
};

export default Home;
