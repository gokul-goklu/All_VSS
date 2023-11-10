import { createSlice } from "@reduxjs/toolkit";
const initialState = { data: [] };
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCart: (state, action) => {
      state.data.push(action.payload);
    },
  },
});
export const { addCart } = cartSlice.actions;
export default cartSlice.reducer;
