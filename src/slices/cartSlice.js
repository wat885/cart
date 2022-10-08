import { createSlice } from "@reduxjs/toolkit";
import data from "../data/products";

let sliceData = data.slice(0, 5);

const initialState = {
  products: [...sliceData],
  carts: [],
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: "messageBoard",
  initialState: initialState,
  reducers: {
    AddCartItem: (state, action) => {
      console.log(action.payload);
      // console.log(state.products[action.payload].name);

      const checkData = state.carts.find((c) => c.id === action.payload);
      let newData = state.products.filter((p) => {
        return p.id === action.payload;
      });
      // console.log(newData[0].id);
      const { id, name, price, image, description } = newData[0];

      if (checkData === undefined) {
        console.log("unique");
        // create
        state.carts = [
          ...state.carts,
          { id, name, price, image, description, quantity: 1 },
        ];
      } else {
        console.log("repeat");
        // console.log(checkData.id);
        state.carts.map((e, index) => {
          // console.log(e.id)
          // console.log(id)

          if (e.id == id) {
            console.log("add quantity");
            console.log(state.carts[index].quantity++);
          }
        });
      }

      // console.log(checkData)
      return state;
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
