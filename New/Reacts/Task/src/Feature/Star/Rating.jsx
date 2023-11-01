import { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./Rating.css";

const Rate = () => {
  const num = [1, 2, 3, 4, 5];
  const [rate, setRate] = useState(0);
  return (
    <div id="star">
      {num.map((item) => {
        const givenRating = item;
        return (
          <label key={item}>
            <input
              id="disp_style"
              type="radio"
              value={givenRating}
              onClick={() => {
                setRate(givenRating);
              }}
            />

            <div key={item}>
              <FaStar
                color={givenRating <= rate ? "green" : "rgb(192,192,192)"}
              />
            </div>
          </label>
        );
      })}
      <h2>`Your rating is {rate}`</h2>
    </div>
  );
};

export default Rate;
