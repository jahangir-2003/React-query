import axios from "axios";
import { DataType } from "./Component/interface";

// Fetch paginated products
export const fetchProduct = async () => {
  const response = await axios.get(`https://fakestoreapi.in/api/products`);
  return response.data.products;
};

export const paginationProduct = async ({ skip, limit }) => {
  const response = await axios.get(
    `https://fakestoreapi.in/api/products?limit=${limit}&skip=${skip}`
  );
  return response.data.products;
};

export const fetchCategory = async () => {
  const response = await axios.get(
    "https://fakestoreapi.in/api/products/category"
  );
  return response.data.categories;
};

// Fetch a product by its ID
export const fetchProductById = async (id: number | undefined | string) => {
  const response = await axios.get(
    `https://fakestoreapi.in/api/products/${id}`
  );
  return response.data.product;
};

export const fetchProductByCategory = async (category: string | undefined) => {
  const response = await axios.get(
    `https://fakestoreapi.in/api/products/category?type=${category}`
  );
  return response.data.products;
};

// Post a new product
export const PostProduct = async (data: DataType) => {
  try {
    const response = await axios.post(
      "https://fakestoreapi.in/api/products",
      data
    );
    console.log("Product added successfully:", response.data);
    return response.data.product;
  } catch (error) {
    console.error("Error posting product:", error);
    throw error; // Handle the error (e.g., show error notification)
  }
};

export const DeleteProduct = async (id: number) => {
  const response = await axios.delete(
    `https://fakestoreapi.in/api/products/${id}`
  );
  return response.data;
};

export const EditData = async (data: DataType) => {
  // console.log(data);
  try {
    const response = await axios.put(
      `https://fakestoreapi.in/api/products/${data.id}`,
      data
    );
    // console.log(response.data);
    return response.data.product;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const fetchPaginatedData = async ({ skip, limit }) => {
  const response = await axios.get(
    `https://dummyjson.com/users?limit=${limit}&skip=${skip}`
  );
  return response.data;
};
