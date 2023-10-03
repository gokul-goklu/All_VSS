import { useEffect, useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [result, setResult] = useState([]);
  useEffect(() => {
    console.log("The count is ", count);

    setResult([...result, `The count is : ${count}`]);
  }, [count]);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>decrement</button>

      <ul>
        {result.map((msg, index) => (
          <li key={index}>{msg}</li>
        ))}
      </ul>
    </div>
  );
}
