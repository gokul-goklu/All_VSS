import { useContext, useEffect, useState } from "react";
import { contexting } from "./Store";
const CartDisplay = () => {
  const [info, setInfo] = useState([]);

  const result = useContext(contexting);

  useEffect(() => {
    setInfo((prev) => [...prev, result]);
  }, [result]);
  console.log(info);
  return (
    <div>
      {/* {info.map((item) => (
        <h2 key={item.id}>{item}</h2>
      ))} */}
    </div>
  );
};

export default CartDisplay;
