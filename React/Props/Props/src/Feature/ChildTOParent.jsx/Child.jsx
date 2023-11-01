import { useState } from "react";

const Child = ({ changeData }) => {
  const [result, setResult] = useState("");
  const handleclick = (e) => {
    setResult(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    changeData(result);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleclick} />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Child;
