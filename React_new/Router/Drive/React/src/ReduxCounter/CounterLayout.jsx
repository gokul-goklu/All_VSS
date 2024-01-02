import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./CounterSlicing";
const CounterLayout = () => {
  const counting = useSelector((state) => state.counter);
  console.log(counting);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>{counting.count}</h2>
      <button onClick={() => dispatch(increment())}>increment</button>
      <button onClick={() => dispatch(decrement())}>decrement</button>
    </div>
  );
};

export default CounterLayout;
