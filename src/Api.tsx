import axios from "axios";

export const fetchProduct = async () => {
  const response = await axios.get(
    "https://fakestoreapi.in/api/products?limit=200"
  );
  return response.data.products;
};

export const fetchCategory = async () => {
  const response = await axios.get(
    "https://fakestoreapi.in/api/products/category"
  );
  // console.log(response);
  return response.data.categories;
};

export const fetchProductById = async (id: number) => {
  const response = await axios.get(
    `https://fakestoreapi.in/api/products/${id}`
  );
  // console.log(response);
  return response.data.product;
};

export const fetchProductByCategory = async (category: string) => {
  const response = await axios.get(
    `https://fakestoreapi.in/api/products/category?type=${category}`
  );
  return response.data.products;
};
