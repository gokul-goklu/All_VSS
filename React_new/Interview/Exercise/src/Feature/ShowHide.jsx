import { useState } from "react";

const ShowHide = () => {
  const [flag, setFlag] = useState(true);
  return (
    <div>
      <button
        onClick={() => {
          flag ? setFlag(false) : setFlag(true);
        }}
      >
        Toggle
      </button>
      {flag ? <h2>Iam not hidden</h2> : <h2></h2>}
    </div>
  );
};

export default ShowHide;
