import { useEffect, useState } from "react";
import axios from "axios";

export default function useProducts() {
  // const API_KEY = `https://dummyjson.com/products?`;
  const API_KEY = `http://localhost:3000/products`;

  const [products, setProducts] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const getProductData = async () => {
    try {
      setError(null);
      setIsLoading(true);
      const response = await axios(API_KEY);

      setProducts(response?.data?.products);
    } catch (error) {
      setError(
        error?.response?.statusText || "Unknown Error, Please try again..!"
      );
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getProductData();
  }, []);
  return {
    products: products,
    isLoading: isLoading,
    error: error,
  };
}
