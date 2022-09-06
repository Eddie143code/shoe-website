import { createSlice } from "@reduxjs/toolkit";
import White from "./images/one.png";
import Black from "./images/two.png";
import Red from "./images/three.png";
import Gray from "./images/four.png";

const initialState = {
  items: [
    {
      id: 1,
      name: White,
      inCart: false,
      quantity: 0,
      price: 220,
    },
    {
      id: 2,
      name: Black,
      inCart: false,
      quantity: 0,
      price: 300,
    },
    {
      id: 3,
      name: Red,
      inCart: false,
      quantity: 0,
      price: 250,
    },
    {
      id: 4,
      name: Gray,
      inCart: false,
      quantity: 0,
      price: 200,
    },
  ],
  total: 0,
  amount: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    increase: (state, action) => {
      state.items = state.items.map((item) => {
        if (item.id == action.payload.id) {
          item.quantity += 1;
          state.amount += 1;
          return item;
        }
        return item;
      });
      return state;
    },
    decrease: (state, action) => {
      state.items = state.items.map((item) => {
        if (item.id == action.payload.id) {
          item.quantity -= 1;
          state.amount -= 1;
          return item;
        }
        return item;
      });
      return state;
    },
    clearCart: (state) => {
      state.items = state.items.map((item) => {
        return (item.quantity = 0);
      });
    },
    toCart: (state, action) => {
      state.items = state.items.map((item) => {
        if (item.id == action.payload.id) {
          item.inCart = true;
          return item;
        }
        return item;
      });
      return state;
    },
    calcTotal: (state, action) => {
      let total = 0;
      state.items.forEach((item) => {
        total += item.quantity * item.price;
      });
      state.total = total;
      return state;
    },
  },
});

export const { increase, decrease, clearCart, toCart, calcTotal } =
  cartSlice.actions;

export default cartSlice.reducer;
