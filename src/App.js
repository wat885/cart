import "./App.css";
import { useState, useEffect } from "react";

import Counter from "./component/Counter";
import Cart from "./component/Cart";

function App() {
  return (
    <div className="App">
      {/* <Counter/> */}

      <Cart />
    </div>
  );
}

export default App;
