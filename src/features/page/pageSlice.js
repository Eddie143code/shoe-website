import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  home: true,
  products: false,
  cartpage: false,
};

export const pageSlice = createSlice({
  name: "page",
  initialState,
  reducers: {
    navhome: (state) => {
      state.home = true;
      state.products = false;
      state.cartpage = false;
      return state;
    },
    navproducts: (state) => {
      state.home = false;
      state.products = true;
      state.cartpage = false;
      return state;
    },
    navcart: (state) => {
      state.home = false;
      state.products = false;
      state.cartpage = true;
      return state;
    },
  },
});

export const { navhome, navproducts, navcart } = pageSlice.actions;

export default pageSlice.reducer;
