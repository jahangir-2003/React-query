import {
  keepPreviousData,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import React, { Fragment, useState } from "react";
import { useParams } from "react-router-dom";
import { DeleteProduct, EditData, fetchProductByCategory } from "../Api.tsx";
import ProductGrid from "../Component/ProductGrid.tsx";
import PageHeading from "../Component/PageHeading.tsx";
import { DataType, UpdateType } from "../Component/interface.tsx";
import ProductCard from "../Component/ProductCard.tsx";
import { UpdateProduct } from "../Component/Modal.tsx";

const ProductByCategory = () => {
  const { category } = useParams<{ category?: string }>();
  // console.log(category);
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["productByCategory", category],
    queryFn: () => fetchProductByCategory(category),
    placeholderData: keepPreviousData,
  });

  const queryClient = useQueryClient();
  const [update, setUpdate] = useState<UpdateType | null>(null);

  const categoryData = queryClient.getQueryData<string[]>(["category"]); // Ensure correct type for category data

  const mutation = useMutation({
    mutationFn: (updatedProduct: DataType) => EditData(updatedProduct),
    onSuccess: (updatedProduct) => {
      console.log(updatedProduct);
      queryClient.setQueryData(
        ["productByCategory", category],
        (oldData: DataType[] | undefined) => {
          if (!oldData) return [];
          return oldData.map((product) =>
            product.id == parseInt(updatedProduct.id) ? updatedProduct : product
          );
        }
      );
      setUpdate(null);
    },
  });

  const deleteMutation = useMutation({
    mutationFn: (productId: number) => DeleteProduct(productId),
    onSuccess: (response) => {
      const match = response.message.match(/id (\d+)/);
      const deletedProductId = match ? parseInt(match[1], 10) : null;

      if (deletedProductId !== null) {
        queryClient.setQueryData(
          ["productByCategory", category],
          (oldData: DataType[] | undefined) => {
            if (!oldData) return [];
            return oldData.filter((product) => product.id != deletedProductId);
          }
        );
      }
    },
  });

  const handleUpdate = () => {
    const newdata = {
      ...update,
      price: update.price.toString(),
      discount: update.discount.toString(),
    };
    if (newdata) {
      mutation.mutate(newdata);
    }
  };

  const handleDelete = (id: number) => {
    deleteMutation.mutate(id);
  };

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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
          {data?.map((item: DataType) => (
            <Fragment key={item.id}>
              <ProductCard
                item={item}
                setUpdate={setUpdate}
                handleDelete={handleDelete}
              />
            </Fragment>
          ))}
        </div>
      )}
      <UpdateProduct
        update={update}
        setUpdate={setUpdate}
        handleUpdateProduct={handleUpdate}
        category={categoryData || []}
      />
    </div>
  );
};

export default ProductByCategory;
