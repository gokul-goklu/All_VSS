import { useState } from "react";
import { Myprovider } from "./Store";
import Child from "./Child";
const Parent = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <Myprovider value={{ count }}>
        <Child />
      </Myprovider>
    </div>
  );
};

export default Parent;
