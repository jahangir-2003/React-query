import React from "react";
import { DataType } from "./interface";
import Input from "./Input.tsx";

export const AddProduct = ({
  open,
  setOpen,
  newProduct,
  setNewProduct,
  handleAddProduct,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  newProduct: DataType;
  setNewProduct: React.Dispatch<React.SetStateAction<DataType>>;
  handleAddProduct: () => void;
}) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white w-[500px] p-6 rounded-md">
        <h2 className="text-2xl mb-4">Add New Product</h2>
        <div className="grid grid-cols-2 gap-2">
          <Input
            type="text"
            placeholder="title"
            onChange={(e) =>
              setNewProduct({ ...newProduct, title: e.target.value })
            }
            value={newProduct.title}
          />
          <Input
            type="numeric"
            placeholder="price"
            onChange={(e) =>
              setNewProduct({ ...newProduct, price: e.target.value })
            }
            value={newProduct.price}
          />
          <Input
            type="text"
            placeholder="color"
            onChange={(e) =>
              setNewProduct({ ...newProduct, color: e.target.value })
            }
            value={newProduct.color}
          />
          <Input
            type="text"
            placeholder="discount"
            onChange={(e) =>
              setNewProduct({ ...newProduct, discount: e.target.value })
            }
            value={newProduct.discount}
          />
          <Input
            type="text"
            placeholder="category"
            onChange={(e) =>
              setNewProduct({ ...newProduct, category: e.target.value })
            }
            value={newProduct.category}
          />
          <Input
            type="text"
            placeholder="model"
            onChange={(e) =>
              setNewProduct({ ...newProduct, model: e.target.value })
            }
            value={newProduct.model}
          />
        </div>
        <textarea
          value={newProduct.description || ""}
          onChange={(e) =>
            setNewProduct({ ...newProduct, description: e.target.value })
          }
          placeholder="Product Description"
          className="border p-2 w-full mb-4"
        />
        <div className="flex flex-row gap-4 items-center">
          <button
            onClick={handleAddProduct}
            className="bg-blue-500 text-white p-2 rounded-md w-full"
          >
            Add Product
          </button>
          <button
            onClick={() => setOpen(false)}
            className="mt-2 text-red-500 w-full"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export const UpdateProduct = ({
  updateProduct,
  setUpdateProduct,
  handleUpdateProduct,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  updateProduct: DataType;
  setUpdateProduct: React.Dispatch<React.SetStateAction<DataType>>;
  handleUpdateProduct: () => void;
}) => {
  if (!updateProduct) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white w-[500px] p-6 rounded-md">
        <h2 className="text-2xl mb-4">Add New Product</h2>
        <div className="grid grid-cols-2 gap-2">
          <Input
            type="text"
            placeholder="title"
            onChange={(e) =>
              setUpdateProduct({ ...updateProduct, title: e.target.value })
            }
            value={updateProduct.title}
          />
          <Input
            type="numeric"
            placeholder="price"
            onChange={(e) =>
              setUpdateProduct({ ...updateProduct, price: e.target.value })
            }
            value={updateProduct.price}
          />
          <Input
            type="text"
            placeholder="color"
            onChange={(e) =>
              setUpdateProduct({ ...updateProduct, color: e.target.value })
            }
            value={updateProduct.color}
          />
          <Input
            type="text"
            placeholder="discount"
            onChange={(e) =>
              setUpdateProduct({ ...updateProduct, discount: e.target.value })
            }
            value={updateProduct.discount}
          />
          <Input
            type="text"
            placeholder="category"
            onChange={(e) =>
              setUpdateProduct({ ...updateProduct, category: e.target.value })
            }
            value={updateProduct.category}
          />
          <Input
            type="text"
            placeholder="model"
            onChange={(e) =>
              setUpdateProduct({ ...updateProduct, model: e.target.value })
            }
            value={updateProduct.model}
          />
        </div>
        <textarea
          value={updateProduct.description || ""}
          onChange={(e) =>
            setUpdateProduct({ ...updateProduct, description: e.target.value })
          }
          placeholder="Product Description"
          className="border p-2 w-full mb-4"
        />
        <div className="flex flex-row gap-4 items-center">
          <button
            onClick={handleUpdateProduct}
            className="bg-blue-500 text-white p-2 rounded-md w-full"
          >
            Add Product
          </button>
          <button
            onClick={() => setUpdateProduct(null)}
            className="mt-2 text-red-500 w-full"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
