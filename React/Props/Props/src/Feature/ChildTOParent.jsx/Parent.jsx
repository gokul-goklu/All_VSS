import { useState } from "react";
import Child from "./Child";

const Parent = () => {
  const [data, setdata] = useState("");
  const changeData = (target) => {
    setdata(target);
  };
  return (
    <div>
      <Child changeData={changeData} />
      <h2>{data}</h2>
    </div>
  );
};

export default Parent;
