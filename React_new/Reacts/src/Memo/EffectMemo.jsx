import { useState } from "react";

const EffectMemo = () => {
  const HandleWord = (e) => {
    setWord(e.target.value);
    setCount(() => {});
  };

  const [count, setCount] = useState([]);
  const [word, setWord] = useState("");
  return (
    <div>
      <input type="text" onChange={HandleWord} />
      <h3>{word}</h3>
      <h3>{count}</h3>
    </div>
  );
};

export default EffectMemo;
