import { useContext } from "react";
import { contexting } from "./Store";
const Child = () => {
  const result = useContext(contexting);
  return (
    <div>
      <h2>{result}</h2>
    </div>
  );
};

export default Child;
