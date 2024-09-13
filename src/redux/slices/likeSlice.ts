import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../../types";

interface IInitialState {
  likedProducts: Product[];
}

const initialState: IInitialState = {
  likedProducts: JSON.parse(<string>localStorage.getItem("products")) || [],
};

const likeSlice = createSlice({
  name: "like",
  initialState,
  reducers: {
    addToLiked: (state, action: PayloadAction<Product>) => {
      const existingProductIndex = state.likedProducts.findIndex(
        (product) => product.id === action.payload.id
      );

      if (existingProductIndex === -1) {
        state.likedProducts.push(action.payload);
      } else {
        state.likedProducts.splice(existingProductIndex, 1);
      }

      localStorage.setItem("products", JSON.stringify(state.likedProducts));
    },
    removeFromLiked: (state, action: PayloadAction<number>) => {
      state.likedProducts = state.likedProducts.filter(
        (product) => product.id !== action.payload
      );
      localStorage.setItem("products", JSON.stringify(state.likedProducts));
    },
  },
});

export const { addToLiked, removeFromLiked } = likeSlice.actions;
export default likeSlice.reducer;
