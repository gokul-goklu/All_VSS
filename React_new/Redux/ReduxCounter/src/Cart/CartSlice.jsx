import { createSlice } from "@reduxjs/toolkit";
const initialState = { data: [], quantity: 0 };
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCart: (state, action) => {
      const itemindx = state.data.findIndex((item) => {
        return item.id === action.payload.id;
      });
      if (itemindx >= 0) {
        const { quantity = 1 } = state.data[itemindx];
        state.data[itemindx].quantity = quantity + 1;
      }
      console.log(state.quantity);

      state.data.push(action.payload);
    },

    removecart: (state, action) => {
      return {
        ...state,
        data: state.data.filter((item) => item.id !== action.payload.id),
      };
    },
    incrementcount: (state, action) => {
      const updateItem = state.data.map((item) => {
        const spred = { ...item };
        if (spred.id === action.payload.id) {
          spred.quantity + 1;
        }
        return spred;
      });
      state.data = [...updateItem];
    },
  },
});
export const { addCart, removecart, countcart } = cartSlice.actions;
export default cartSlice.reducer;
