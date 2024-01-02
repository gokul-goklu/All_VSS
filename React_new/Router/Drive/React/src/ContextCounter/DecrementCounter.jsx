import { useContext } from "react";
import { context } from "./Store";

const DecrementCounter = () => {
  const { setCount } = useContext(context);
  return (
    <div>
      <button onClick={() => setCount((prev) => prev - 1)}>Decrement</button>
    </div>
  );
};

export default DecrementCounter;
