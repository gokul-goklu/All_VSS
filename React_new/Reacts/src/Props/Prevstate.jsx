import { useState } from "react";

export default function Prevstate() {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <div>{counter}</div>
      <button
        onClick={() => {
          setCounter((prev) => prev + 1);
        }}
      >
        inc
      </button>
      <button
        onClick={() => {
          setCounter((prev) => prev - 1);
        }}
      >
        dec
      </button>
    </div>
  );
}
