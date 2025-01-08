import React, { Fragment, useState } from "react";
import { DataType, UpdateType } from "./interface";
import ProductCard from "./ProductCard.tsx";
import { UpdateProduct } from "./Modal.tsx";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { DeleteProduct, EditData } from "../Api.tsx";

const ProductGrid = ({ data }: { data: DataType[] }) => {
  const queryClient = useQueryClient();
  const [update, setUpdate] = useState<UpdateType | null>(null);

  const categoryData = queryClient.getQueryData<string[]>(["category"]);

  const mutation = useMutation({
    mutationFn: (updatedProduct: DataType) => EditData(updatedProduct),
    onSuccess: (updatedProduct) => {
      console.log(updatedProduct);
      queryClient.setQueryData(
        ["product"],
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
          ["product"],
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

  return (
    <>
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

      {/* Update product modal */}
      <UpdateProduct
        update={update}
        setUpdate={setUpdate}
        handleUpdateProduct={handleUpdate}
        category={categoryData || []} // Pass cached category data
      />
    </>
  );
};

export default ProductGrid;
