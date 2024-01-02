import { useReducer } from "react";

const Counter = () => {
  const counterDispatch = (state, action) => {
    switch (action.type) {
      case "INCREMENT":
        return {
          count: state.count + 1,
        };
      case "DECREMENT":
        return {
          count: state.count - 1,
        };
      case "reset":
        return {
          count: 0,
        };
    }
  };
  const [state, dispatch] = useReducer(counterDispatch, { count: 0 });
  return (
    <div>
      <h3>{state.count}</h3>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
};

export default Counter;
