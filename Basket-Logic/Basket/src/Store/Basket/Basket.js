import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const BasketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    add: (state, action) => {
      const { product } = action.payload;
      state.push(product);
    },
    remove: (state, action) => {
      const { id } = action.payload;
      const index = state.findIndex((product) => product.id === id);
      state.splice(index, 1);
    },
    increment: (state, action) => {
      const { id } = action.payload;
      const index = state.findIndex((product) => product.id === id);
      if (index !== -1 && state[index].quantity < state[index].stock) {
        state[index].quantity += 1;
      }
    },
    decrement: (state, action) => {
      const { id } = action.payload;
      const index = state.findIndex((product) => product.id === id);
      if (index !== -1) {
        state[index].quantity -= 1;
        if (state[index].quantity === 0) {
          state.splice(index, 1);
        }
      }
    },
  },
});

export const { add, remove, increment, decrement } = BasketSlice.actions;
export default BasketSlice.reducer;
