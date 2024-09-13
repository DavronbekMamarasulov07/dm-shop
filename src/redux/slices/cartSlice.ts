
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../../types";

interface IInitialState {
  cartProduct: CartProduct[];
}

interface CartProduct extends Product {
  quantity: number;
  
}

const initialState: IInitialState = {
  cartProduct: JSON.parse(<string>localStorage.getItem("cart")) || [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action : PayloadAction<CartProduct>) => {
      const { id, quantity } = action.payload;
      console.log(state)
     const existingProduct = state.cartProduct?.find(
       (product) => (product as CartProduct).id === id
     );

      if (existingProduct) {
        (existingProduct as CartProduct).quantity += quantity;
      } else {
        state.cartProduct.push(action.payload);
      }

      localStorage.setItem("cart", JSON.stringify(state.cartProduct));
    },
    removeFromCart: (state, action) => {
      state.cartProduct = state.cartProduct.filter(
        (product: CartProduct) => product.id !== action.payload
      );

      localStorage.setItem("cart", JSON.stringify(state.cartProduct));
    },
    incrementQuantity: (state, action) => {
      state.cartProduct = state.cartProduct.map((product: CartProduct) => {
        if (product.id === action.payload) {
          return { ...product, quantity: product.quantity + 1 };
        }
        return product;
      });

     localStorage.setItem("cart", JSON.stringify(state.cartProduct));
    },
    decrementQuantity: (state, action) => {
      state.cartProduct = state.cartProduct.map((product: CartProduct) => {
        if (product.id === action.payload) {
          return { ...product, quantity: Math.max(product.quantity - 1, 1) };
        }
        return product;
      });

      localStorage.setItem("cart", JSON.stringify(state.cartProduct));
    },
  },
});

export default cartSlice.reducer;
export const {
  addToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
} = cartSlice.actions;
