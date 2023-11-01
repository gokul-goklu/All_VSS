import { useState } from "react";
import Child2 from "../Child2";

function Parent2() {
  const [data, setData] = useState("");
  const [updatedata, setUpdate] = useState("");

  const handlesubmit = (e) => {
    e.preventDefault();
    setUpdate(data);
  };
  return (
    <div>
      <h3>Iam parent</h3>
      <form onSubmit={handlesubmit}>
        <input
          type="text"
          onChange={(e) => {
            setData(e.target.value);
          }}
        />
        <button>Submit</button>
      </form>
      <Child2 data={updatedata} />
    </div>
  );
}

export default Parent2;
