import { useState } from "react";

export default function ChildForm2(myprop) {
  const [cfname, setcfname] = useState("");
  const [clname, setclname] = useState("");

  const Handlesubmit = () => {
    myprop.handleForm(cfname, clname);
  };
  return (
    <div>
      <label>name: </label>
      <input type="text" onChange={(e) => setcfname(e.target.value)} />

      <label>Last: </label>
      <input type="text" onChange={(e) => setclname(e.target.value)} />

      <button onClick={Handlesubmit}>Submit</button>
    </div>
  );
}
