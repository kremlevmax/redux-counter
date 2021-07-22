import { createSlice } from "@reduxjs/toolkit";

const counterInitialState = { counter: 0, showCounter: true };

export const counterSlice = createSlice({
  name: "counter",
  initialState: counterInitialState,
  reducers: {
    increment(state) {
      state.counter += 1;
    },
    decrement(state) {
      state.counter -= 1;
    },
    increase(state, action) {
      state.counter += action.payload;
    },
    decrease(state, action) {
      state.counter -= action.payload;
    },
    toggle(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

export const counterSliceActions = counterSlice.actions;
