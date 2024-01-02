import { useContext } from "react";
import { context } from "./Store";

const IncrementCount = () => {
  const { setCount } = useContext(context);
  return (
    <div>
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
    </div>
  );
};

export default IncrementCount;
