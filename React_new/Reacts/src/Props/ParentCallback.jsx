import { useState } from "react";
import ChildCallback from "./ChildCallback";

export default function ParentCallback() {
  const [result, setResult] = useState(false);

  const onToggle = () => {
    setResult(!result);
  };
  return (
    <div>
      {result ? <p>Iam the good one</p> : <p>Iam the evil one</p>}
      <ChildCallback toggle={onToggle} />
    </div>
  );
}
