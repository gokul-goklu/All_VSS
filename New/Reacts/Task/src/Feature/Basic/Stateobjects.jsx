import { useState } from "react";

const StateObjects = () => {
  const [data, setData] = useState([
    { name: "Gokullll" },
    { name: "vj" },
    { name: "STR" },
  ]);
  const [text, setText] = useState("");

  const handlesubmit = () => {
    setData([...data, { name: text }]);
    setText("");
  };
  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <button onClick={handlesubmit}>add</button>
      <ul>
        {data.map((item, index) => {
          return <li key={index}>{item.name}</li>;
        })}
      </ul>
    </div>
  );
};
export default StateObjects;
