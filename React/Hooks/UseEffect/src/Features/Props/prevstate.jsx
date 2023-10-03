import { useState } from "react";

export default function prevstate() {
  const [counter, setCounter] = useState[0];
  return (
    <div>
      <h1>{counter}</h1>
      <button
        onClick={() => {
          setCounter((prev) => prev + 1);
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          setCounter((prev) => prev - 1);
        }}
      >
        decrement
      </button>
    </div>
  );
}
