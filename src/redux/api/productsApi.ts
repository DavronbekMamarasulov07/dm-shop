import { Product } from "../../types";
import { api } from "./index";

const productsApi = api.injectEndpoints({
  endpoints: (build) => ({
    getProducts: build.query<{ products: Product[]}, void>({
      query: () => ({
        url: "/products",
      }),
    }),
  }),
});

export const { useGetProductsQuery } = productsApi;
