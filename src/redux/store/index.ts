import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../slices/authSlice";
import modalReducer from "../slices/modalSlice";
import likeReducer from "../slices/likeSlice";
import { api } from "../api";

const store = configureStore({
    reducer: {
        auth: authReducer,
        modal : modalReducer,
        like : likeReducer,
        [api.reducerPath] : api.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware)
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export  {store}