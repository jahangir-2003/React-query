import React from "react";
import { DataType } from "./interface";
import Input from "./Input.tsx";

interface AddProductProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  newProduct: DataType;
  setNewProduct: React.Dispatch<React.SetStateAction<DataType>>;
  handleAddProduct: () => void;
  category: string[];
}

export const AddProduct: React.FC<AddProductProps> = ({
  open,
  setOpen,
  newProduct,
  setNewProduct,
  handleAddProduct,
  category,
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
            type="number"
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
            type="number"
            placeholder="discount"
            onChange={(e) =>
              setNewProduct({ ...newProduct, discount: e.target.value })
            }
            value={newProduct.discount}
          />
          <Input
            type="text"
            placeholder="brand"
            onChange={(e) =>
              setNewProduct({ ...newProduct, brand: e.target.value })
            }
            value={newProduct.brand}
          />

          <select
            id="category"
            title="select category"
            value={newProduct.category}
            onChange={(e) =>
              setNewProduct({ ...newProduct, category: e.target.value })
            }
            className="border-2 p-2 rounded-md border-slate-400"
          >
            <option value="" disabled>
              Select a Category
            </option>
            {category.map((cat, index) => (
              <option key={index} value={cat}>
                {cat}
              </option>
            ))}
          </select>

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
          type="text"
          value={newProduct.description || ""}
          onChange={(e) =>
            setNewProduct({ ...newProduct, description: e.target.value })
          }
          placeholder="Product Description"
          className="border-2 p-2 w-full my-4 focus:outline-none border-slate-400 rounded-md"
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

interface UpdateProductProps {
  update: DataType;
  setUpdate: React.Dispatch<React.SetStateAction<DataType>>;
  handleUpdateProduct: () => void;
  category: string[];
}

export const UpdateProduct: React.FC<UpdateProductProps> = ({
  update,
  setUpdate,
  handleUpdateProduct,
  category,
}) => {
  if (!update) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white w-[500px] p-6 rounded-md">
        <h2 className="text-2xl mb-4">Update Product</h2>
        <div className="grid grid-cols-2 gap-2">
          <Input
            type="text"
            placeholder="title"
            onChange={(e) => setUpdate({ ...update, title: e.target.value })}
            value={update.title}
          />
          <Input
            type="text"
            placeholder="price"
            onChange={(e) => setUpdate({ ...update, price: e.target.value })}
            value={update.price}
          />
          <Input
            type="text"
            placeholder="color"
            onChange={(e) => setUpdate({ ...update, color: e.target.value })}
            value={update.color}
          />
          <Input
            type="text"
            placeholder="discount"
            onChange={(e) => setUpdate({ ...update, discount: e.target.value })}
            value={update.discount}
          />
          <Input
            type="text"
            placeholder="brand"
            onChange={(e) => setUpdate({ ...update, brand: e.target.value })}
            value={update.brand}
          />

          <select
            id="category"
            title="select category"
            value={update.category}
            onChange={(e) => setUpdate({ ...update, category: e.target.value })}
            className="border-2 p-2 rounded-md border-slate-400"
          >
            <option value="" disabled>
              Select a Category
            </option>
            {category.map((cat, index) => (
              <option key={index} value={cat}>
                {cat}
              </option>
            ))}
          </select>

          <Input
            type="text"
            placeholder="model"
            onChange={(e) => setUpdate({ ...update, model: e.target.value })}
            value={update.model}
          />
        </div>
        <textarea
          value={update.description || ""}
          onChange={(e) =>
            setUpdate({ ...update, description: e.target.value })
          }
          placeholder="Product Description"
          className="border-2 p-2 w-full my-4 focus:outline-none border-slate-400 rounded-md"
        />
        <div className="flex flex-row gap-4 items-center">
          <button
            onClick={handleUpdateProduct}
            className="bg-blue-500 text-white p-2 rounded-md w-full"
          >
            Update Product
          </button>
          <button
            onClick={() => setUpdate(null)}
            className="mt-2 text-red-500 w-full"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
