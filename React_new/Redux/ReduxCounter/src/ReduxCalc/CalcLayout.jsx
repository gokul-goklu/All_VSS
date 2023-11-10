import { useDispatch, useSelector } from "react-redux";
import { add, sub } from "./CalcSlice";
import { useState } from "react";

const CalcLayout = () => {
  const [value, setValue] = useState(0);
  const calc = useSelector((state) => state.calculator);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <div>
      <h2>{calc.value}</h2>
      <input type="text" onChange={handleChange} />
      <button onClick={() => dispatch(add(value))}>Add</button>
      <button onClick={() => dispatch(sub(value))}>Sub</button>
    </div>
  );
};

export default CalcLayout;
