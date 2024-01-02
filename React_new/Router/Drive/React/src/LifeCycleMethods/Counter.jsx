import { useState } from "react";
//import LifeCycle from "./LifeCycle";

const Counter = () => {
  const [number, setNumber] = useState(0);
  return (
    <div>
      {/* <LifeCycle number={number} /> */}
      <button onClick={() => setNumber((prev) => prev + 1)}>increment</button>
    </div>
  );
};

export default Counter;
