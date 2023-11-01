import React, { useState } from "react";

function Counter() {
  let g = 9;
  g = 12;
  const [count, setCount] = useState(0);

  const increment = () => {
    // Use 'setCount' to update the 'count' state variable
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default Counter;
