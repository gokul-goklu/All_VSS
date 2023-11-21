import { useState } from "react";

const DisableButton = () => {
  const [value, setValue] = useState("");
  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <button disabled={value.length < 1}>submit</button>
    </div>
  );
};

export default DisableButton;
