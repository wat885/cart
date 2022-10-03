import { createSlice } from "@reduxjs/toolkit";
import data from "../data/products";

export const cartSlice = createSlice({
  name: "messageBoard",
  initialState: {
    products: [...data],
    carts: [],
    totalPrice: 0,
  },
  reducers: {
    AddCartItem: (state, action) => {
      console.log(action.payload);
    },
    AddQuantity: (state, action) => {
      console.log("test");
    },
    SubtractQuantity: (state, action) => {
      console.log("test");
    },
    DeleteCartItem: (state, action) => {
      console.log("test");
    },
  },
});

export const { AddCartItem } = cartSlice.actions;

export default cartSlice.reducer;
