import { useState } from "react";
import ChildCounter from "./ChildCounter";

export default function ParentCounter() {
  const [counter, setCounter] = useState(0);

  const HandleInc = () => {
    setCounter(counter + 1);
  };
  const HandleDec = () => {
    setCounter(counter - 1);
  };
  return (
    <div>
      <ChildCounter count={counter} />
      <button onClick={HandleInc}>Increment</button>
      <button onClick={HandleDec}>decrement</button>
    </div>
  );
}
