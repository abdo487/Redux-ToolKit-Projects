import { configureStore  } from "@reduxjs/toolkit";
import BasketReducer from "./Basket/Basket.js";

const Store = configureStore({
    reducer: {
        basket: BasketReducer
    }
});

export default Store;