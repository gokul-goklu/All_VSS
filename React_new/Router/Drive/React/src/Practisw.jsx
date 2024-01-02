import { useState } from "react";
import Child from "./Child";

const Practisw = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const [disable, setDisable] = useState(0);
  const [child, setChilds] = useState("");
  const handleClick = () => {
    setCount(!count);
  };
  const handleDisable = (e) => {
    let len = e.target.value;
    if (len.length == 0) setDisable(0);
    else setDisable(1);
  };
  return (
    <div>
      <button onClick={handleClick}>Toggle</button>
      {count ? <h2>Iam gokul</h2> : <h2>Iam not the one</h2>}

      <input type="text" onChange={(e) => setText(e.target.value)} />
      <h2>{text}</h2>

      <input type="text" onChange={handleDisable} />
      <button style={{ background: disable ? "blue" : "red" }}>Submit</button>

      <h2>{child}</h2>
      <Child setChilds={setChilds} />
    </div>
  );
};

export default Practisw;
