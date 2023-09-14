import { useState } from "react";
export default function Counter() {
  const [count, setcount] = useState(0);

  const HandleInc = () => {
    setcount(count - 1);
  };
  return (
    <div>
      <h2>The number is: {count}</h2>
      <button
        onClick={() => {
          setcount(count + 1);
        }}
      >
        Increase
      </button>
      <button onClick={HandleInc}>Decrease</button>
    </div>
  );
}
