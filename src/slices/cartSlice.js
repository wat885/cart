import { createSlice } from "@reduxjs/toolkit";
import data from "../data/products";

let sliceData = data.slice(0, 5);

const initialState = {
  products: [...sliceData],
  carts: [
    {
      id: 5,
      name: "Dried Figs",
      price: 1112,
      image: "http://dummyimage.com/350x350.png/5fa2dd/ffffff",
      description:
        "Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
      quantity: 3,
    },
  ],
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: "messageBoard",
  initialState: initialState,
  reducers: {
    AddCartItem: (state, action) => {
      // console.log(action.payload);
      // console.log(state.products[action.payload].name);

      const checkData = state.carts.find((c) => c.id === action.payload);
      let newData = state.products.filter((p) => {
        return p.id === action.payload;
      });
      // console.log(newData[0].id);
      const { id, name, price, image, description } = newData[0];

      if (checkData === undefined) {
        // console.log("unique");
        // create
        state.carts = [
          ...state.carts,
          { id, name, price, image, description, quantity: 1 },
        ];
      } else {
        // console.log("repeat");
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
      // console.log(action.payload);

      state.carts.map((e, index) => {
        if (e.id == action.payload.id) {
          // console.log("Add quantity");
          state.carts[index].quantity++;
        }
      });
    },
    SubtractQuantity: (state, action) => {
      // console.log(action.payload);

      state.carts.map((e, index) => {
        if (e.id == action.payload.id) {
          if (state.carts[index].quantity === 1) {
            // console.log("delete cart");
            let newData = state.carts.filter((p) => {
              return p.id !== action.payload.id;
            });
            state.carts = [...newData];
          } else {
            // console.log("Subtract quantity");
            state.carts[index].quantity--;
          }
        }
      });
    },
    DeleteCartItem: (state, action) => {
      console.log("test");
      let newData = state.carts.filter((p) => {
        return p.id !== action.payload.id;
      });

      state.carts = [...newData];
    },
    HandleTotalprice: (state, action) => {
      // console.log("HandleTotalprice");

      state.totalPrice = state.carts.reduce(
        (previousValue, currentValue) =>
          previousValue + currentValue.price * currentValue.quantity,
        0
      );
    },
  },
});

export const {
  AddCartItem,
  AddQuantity,
  SubtractQuantity,
  DeleteCartItem,
  HandleTotalprice,
} = cartSlice.actions;

export default cartSlice.reducer;
