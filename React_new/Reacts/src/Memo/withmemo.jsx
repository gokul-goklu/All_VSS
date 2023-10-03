import { useMemo, useState } from "react";

function Withmemo() {
  const [todo, settodo] = useState([]);
  const [count, setCount] = useState(0);

  const todos = () => {
    settodo((prev) => [...prev, "newtodoooo"]);
  };
  const counts = () => {
    setCount((prev) => prev + 1);
  };
  const expensive = (c) => {
    for (let i = 0; i < 100000; i++) {
      console.log(i);
      c += 1;
    }

    return c;
  };
  const calc = useMemo(() => expensive(count), [count]);
  return (
    <div>
      <div>
        <button onClick={todos}>addtodo</button>
        {todo.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>

      <div>
        <h3>{count}</h3>
        <button onClick={counts}>Count</button>
        <h3>{calc}</h3>
      </div>
    </div>
  );
}

export default Withmemo;
