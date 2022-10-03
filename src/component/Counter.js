import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  addCounter,
  subtractCounter,
  resetCounter,
} from "../slices/counterSlice";

function Counter() {
  const counter = useSelector((state) => {
    return state.counter;
  });

  console.log(counter)

  const dispatch = useDispatch();

  return (
    <div className="counter-app">
      <h1>Counter App</h1>
      <h2>{counter}</h2>
      <div>
        <button onClick={() => dispatch(addCounter())}> + </button>
        <button onClick={() => dispatch(subtractCounter())}>-</button>
        <button onClick={() => dispatch(resetCounter())}>Reset</button>
      </div>
    </div>
  );
}

export default Counter;
