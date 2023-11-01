import { useState } from "react";

const Childing = (props) => {
  const [data, setData] = useState("");
  // const [update, setUpdate] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit(data);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => {
            setData(e.target.value);
          }}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Childing;
