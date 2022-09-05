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
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    increase: (state, action) => {
      state.items = state.items.map((item) => {
        if (item.id === action.payload.id) {
          item.quantity += 1;
        }
      });
      return state;
    },
    decrease: (state, action) => {
      state.items = state.items.map((item) => {
        if (item.id === action.payload.id) {
          item.quantity -= 1;
        }
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
        let id = parseInt(action.payload.id);
        if (item.id == action.payload.id) {
          console.log("in if statement");
          item.inCart = true;
          return item;
        }
        console.log("item id: ", item.id);
        console.log("payload id: ", action.payload.id);
        return item;
      });
      return state;
    },
  },
});

export const { increase, decrease, clearCart, toCart } = cartSlice.actions;

export default cartSlice.reducer;
