import { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./Rate22.css";

const Rate2 = () => {
  const num = [1, 2, 3, 4, 5];
  const [data, setData] = useState(null);
  return (
    <div id="starwar">
      <div id="spilter">
        {num.map((item) => {
          const number = item;
          return (
            <label key={item}>
              <input
                id="text-Input"
                type="radio"
                value={number}
                onClick={() => setData(number)}
              />

              <FaStar size={50} color={number <= data ? "green" : "grey"} />
            </label>
          );
        })}
        <h2>
          You gave us <span style={{ color: "orange" }}>{data}</span> rating
        </h2>
      </div>
    </div>
  );
};

export default Rate2;
