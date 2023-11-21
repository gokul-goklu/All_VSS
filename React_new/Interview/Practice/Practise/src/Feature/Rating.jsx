import { useState } from "react";

const Rating = () => {
  const [count, setCount] = useState(0);
  const total = [1, 2, 3, 4, 5];
  return (
    <div>
      <h2>Your rating is {count}</h2>
      {total.map((item) => {
        return (
          <span
            key={item}
            onClick={() => setCount(item)}
            style={{
              cursor: "pointer",
              color: count >= item ? "gold" : "grey",
              fontSize: "60px",
            }}
          >
            &#9733;
          </span>
        );
      })}
    </div>
  );
};

export default Rating;
