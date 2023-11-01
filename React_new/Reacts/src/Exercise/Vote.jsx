import { useState } from "react";

export const Vote = () => {
  const [age, setAge] = useState(0);

  const HandleChange = (e) => {
    setAge(e.target.value);
  };

  return (
    <div>
      <input type="number" onChange={HandleChange} />
      {age == 0 ? (
        <h3></h3>
      ) : age > 18 ? (
        <h3>Ur done</h3>
      ) : (
        <h3>do not come here again</h3>
      )}
    </div>
  );
};
