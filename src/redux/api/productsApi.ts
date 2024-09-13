import { Product } from "../../types";
import { api } from "./index";

const productsApi = api.injectEndpoints({
  endpoints: (build) => ({
    getProducts: build.query<{ products: Product[] }, void>({
      query: () => ({
        url: "/products",
      }),
    }),
    getProductsById: build.query<Product, number>({
      query: (id) => ({
        url: `/products/${id}`,
      }),
    }),

    getProductsBySearch: build.query<{ products: Product[] }, { q: string | null }>({
      query: (params) => ({
        url: "/products/search",
        params,
      }),
      
    }),
  }),
});

export const { useGetProductsQuery, useGetProductsByIdQuery, useGetProductsBySearchQuery } = productsApi;
