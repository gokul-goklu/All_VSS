import { FaStar } from "react-icons/fa";
import "./Rating.css";
import { useState } from "react";
const Rating = () => {
  const num = [1, 2, 3, 4, 5];
  const [data, setData] = useState(null);
  return (
    <div>
      {num.map((item) => {
        const num = item;
        return (
          <div key={item} id="Star">
            <label key={item}>
              <input
                id="dot"
                type="radio"
                onClick={() => {
                  setData(num);
                }}
              />
            </label>
            <FaStar
              size={50}
              id="Twin"
              color={num <= data ? "yellow" : "grey"}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Rating;
