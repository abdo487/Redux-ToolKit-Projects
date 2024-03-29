import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const BasketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    add: (state, action) => {
      let { product } = action.payload;
      // check if the product is already in the basket
      const index = state.findIndex((item) => item._id === product._id);
      if (index !== -1) return;
      state.push(product);
      state[state.length - 1].quantity = 1;
    },
    increment: (state, action) => {
      const { id } = action.payload;
      const index = state.findIndex((product) => product._id === id);
      if (index !== -1 && state[index].quantity < state[index].stock) {
        state[index].quantity += 1;
      }
    },
    decrement: (state, action) => {
      const { id } = action.payload;
      const index = state.findIndex((product) => product._id === id);
      if (index !== -1) {
        state[index].quantity -= 1;
        if (state[index].quantity === 0) {
          state.splice(index, 1);
        }
      }
    },
  },
});

export const { add, increment, decrement } = BasketSlice.actions;
export default BasketSlice.reducer;
