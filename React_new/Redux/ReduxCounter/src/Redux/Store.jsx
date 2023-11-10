import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "../ReduxCount/CounterSlice";
import CalcSlice from "../ReduxCalc/CalcSlice";
import CartSlice from "../Cart/CartSlice";

const store = configureStore({
  reducer: {
    counter: CounterSlice,
    calculator: CalcSlice,
    cart: CartSlice,
  },
});

export default store;
