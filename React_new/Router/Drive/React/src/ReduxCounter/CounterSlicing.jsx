import { createSlice } from "@reduxjs/toolkit";
const counterSlicings = createSlice({
  name: "counter",
  initialState: { count: 0},
  reducers: {
    increment: (state) => {
      state.count = state.count + 1;
    },
    decrement: (state) => {
      state.count = state.count - 1;
    },

  },
});
export const { increment, decrement } = counterSlicings.actions;
export default counterSlicings.reducer;
