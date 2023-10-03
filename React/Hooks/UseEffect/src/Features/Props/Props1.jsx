import { useState } from "react";
import Props2 from "./Props2";

export default function Props1() {
  const [uname, setUname] = useState("");
  return (
    <div>
      <Props2 uname={uname} />
      <input type="text" onChange={(e) => setUname(e.target.value)} />
    </div>
  );
}
