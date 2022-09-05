import { configureStore, createReducer } from "@reduxjs/toolkit";
import pageReducer from "../features/page/pageSlice";
import cartReducer from "../features/cart/cartSlice";
export const store = configureStore({
  reducer: {
    page: pageReducer,
    cart: cartReducer,
  },
});
