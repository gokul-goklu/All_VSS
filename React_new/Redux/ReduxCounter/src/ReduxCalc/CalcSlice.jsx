import { createSlice } from "@reduxjs/toolkit";

const calcSlice = createSlice({
  name: "Calc",
  initialState: { value: 0 },
  reducers: {
    add: (state, action) => {
      state.value = state.value + Number(action.payload);
    },
    sub: (state, action) => {
      state.value = state.value - Number(action.payload);
    },
  },
});

export const { add, sub } = calcSlice.actions;
export default calcSlice.reducer;
