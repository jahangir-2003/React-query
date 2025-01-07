import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";
import { fetchProductByCategory } from "../Api.tsx";
import ProductGrid from "../Component/ProductGrid.tsx";
import PageHeading from "../Component/PageHeading.tsx";

const ProductByCategory = () => {
  const { category } = useParams(); // Extract the category from the URL

  // If category is not provided, show an error message or redirect

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["productByCategory", category],
    queryFn: () => fetchProductByCategory(category),
  });

  if (isLoading) {
    return <div>Loading products...</div>;
  }

  if (isError) {
    return <div>Error fetching products: {error.message}</div>;
  }

  return (
    <div className="w-[95%] mx-auto">
      <PageHeading heading={`${category}`} />
      {data?.length === 0 ? (
        <div>No products found in this category.</div>
      ) : (
        <ProductGrid data={data} />
      )}
    </div>
  );
};

export default ProductByCategory;
