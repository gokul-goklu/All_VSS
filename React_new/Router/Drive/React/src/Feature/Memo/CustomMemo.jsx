import { useState } from "react";
import UseCustom from "./UseCustom";

const CustomMemo = () => {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(100);
  const handleSquare = () => {
    console.log("expensive calculation");
    return counter * counter;
  };
  const result = UseCustom(handleSquare, counter);
  return (
    <div>
      <button onClick={() => setCounter((prev) => prev + 1)}>add</button>
      <h2>{counter}</h2>
      <h2>{result}</h2>
      <button onClick={() => setCounter2((prev) => prev - 1)}>minus</button>
      <h2>{counter2}</h2>
    </div>
  );
};
export default CustomMemo;
