import { useState } from "react";

const Debouncing = () => {
  const [data, setData] = useState("");
  const myBounce = (cb, d) => {
    let timer;
    return function (...args) {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        cb(...args);
        console.log(...args);
      }, d);
    };
  };

  const handleCheck = myBounce((e) => {
    setData(e.target.value);
  }, 1000);
  return (
    <div>
      <input type="text" onChange={handleCheck} />
      <h2>{data}</h2>
    </div>
  );
};

export default Debouncing;
