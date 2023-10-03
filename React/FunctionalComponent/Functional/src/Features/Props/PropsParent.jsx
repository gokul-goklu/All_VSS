import { useState } from "react";

export default function PropsParent() {
  const [uname, setUname] = useState("");
  return (
    <div>
      <input type="text" onChange={(e) => setUname(e.target.value)} />
      <h1>{uname}</h1>
    </div>
  );
}
