import { useState } from "react";
import Child1 from "./Child1";

const Parent1 = () => {
  const [value, setvalue] = useState("Iam the default from parent");
  return (
    <div>
      <Child1 setValue={setvalue} />
      <h2>{value}</h2>
    </div>
  );
};

export default Parent1;
