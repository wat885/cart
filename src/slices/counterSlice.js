import { createSlice } from "@reduxjs/toolkit";

const initialState = 0;

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addCounter: (state, action) => {
      state = state + 1;
      return state;
    },
    subtractCounter: (state, action) => {
      state = state - 1;
      return state;
    },
    resetCounter: (state, action) => {
      state = 0;
      return state;
    },
  },
});

export const { addCounter, subtractCounter,resetCounter } = counterSlice.actions;

export default counterSlice.reducer;
