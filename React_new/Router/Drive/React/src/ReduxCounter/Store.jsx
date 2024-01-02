import { configureStore } from "@reduxjs/toolkit";
import CounterSlicing from "./CounterSlicing";
const store = configureStore({
  reducer: {
    counter: CounterSlicing,
  },
});
export default store;
