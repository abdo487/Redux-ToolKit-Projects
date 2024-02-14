import { useState } from "react";
import "./App.css";
import Store from "./Store/Store.js";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={Store}>
      <header className="w-full flex gap-2 justify-between items-center text-teal-800">
        <h1 className="text-2xl font-bold">Shopping Basket</h1>
        <i className="fas fa-cart-shopping cursor-pointer"></i>
      </header>
    </Provider>
  );
}

export default App;
