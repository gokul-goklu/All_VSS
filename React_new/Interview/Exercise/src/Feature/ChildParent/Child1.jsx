import { useState } from "react";

const Child1 = ({ setValue }) => {
  const [update, setUpdate] = useState("");
  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          e.preventDefault();
          setUpdate(e.target.value);
        }}
      />
      <button
        onClick={() => {
          setValue(update);
        }}
      >
        Submitt
      </button>
    </div>
  );
};

export default Child1;
