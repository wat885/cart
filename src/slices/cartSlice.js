import { createSlice } from "@reduxjs/toolkit";
import data from "../data/products";

export const cartSlice = createSlice({
  name: "messageBoard",
  initialState: {
    product: [data],
    cart: [],
    totalPrice: 0,
  },
  reducers: {},
});

export const {} = cartSlice.actions;

export default cartSlice.reducer;
