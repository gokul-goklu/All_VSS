import { useState } from "react";

const Add = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState(0);
  return (
    <div>
      <input
        type="number"
        onChange={(e) => setNum1(parseFloat(e.target.value))}
      />
      <input
        type="number"
        onChange={(e) => setNum2(parseFloat(e.target.value))}
      />
      <button onClick={() => setResult(num1 + num2)}>Addme</button>
      <h3>Total:{result}</h3>
    </div>
  );
};

export default Add;
