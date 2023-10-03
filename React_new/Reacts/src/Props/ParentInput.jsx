import { useState } from "react";
import ChildInput from "./ChildInput";

export default function ParentInput() {
  const [uName, setName] = useState("");
  const HandleName = (val) => {
    setName(val);
  };
  return (
    <div>
      <ChildInput HandleName={HandleName} />
      <label>Name: {uName}</label>
    </div>
  );
}
