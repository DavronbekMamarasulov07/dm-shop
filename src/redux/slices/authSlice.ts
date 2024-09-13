import {createSlice, PayloadAction } from "@reduxjs/toolkit";

type TInitialState = {
    token: string
}

const tokenString = localStorage.getItem("token");

let token = "";
try {
  if (tokenString) {
    token = JSON.parse(tokenString);
  }
} catch (e) {
  console.error("Failed to parse token from localStorage:", e);
}

const initialState: TInitialState = {
  token,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signIn: (state, action: PayloadAction<{ token: string }>) => {
      state.token = action.payload.token;
      localStorage.setItem("token", JSON.stringify(action.payload.token));
    },
    signOut: (state) => {
      state.token = "";
      localStorage.removeItem("token");
    },
  },
});

export const {signIn, signOut} = authSlice.actions;
export default authSlice.reducer