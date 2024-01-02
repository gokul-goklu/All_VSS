import { useState } from "react";

const Child = ({ setChilds }) => {
  const [store, setStore] = useState("");
  const handleSubmit = () => {
    const res = store;
    setChilds(res);
  };
  return (
    <div>
      <input type="text" onChange={(e) => setStore(e.target.value)} />
      <button onClick={handleSubmit}>submit</button>
    </div>
  );
};

export default Child;
