import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./CounterSlice";

const CounterLayout = () => {
  const counters = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>{counters.count}</h2>
      <button onClick={() => dispatch(increment())}>increment</button>

      <button onClick={() => dispatch(decrement())}>decrement</button>
    </div>
  );
};

export default CounterLayout;
