import { useEffect } from "react";
import { useState } from "react";

const Task1 = () => {
  const time = () => new Date().toLocaleTimeString();
  const [count, setCount] = useState();
  useEffect(() => {
    const id = setInterval(() => {
      setCount(time());
    }, 1000);
    return () => clearInterval(id);
  }, []);
  return <div>{count}</div>;
};

export default Task1;
