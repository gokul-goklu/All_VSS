import { useEffect, useState } from "react";
import { Myprovider } from "./Store";
import IncrementCount from "./IncrementCount";
import DecrementCounter from "./DecrementCounter";
import Products from "./Products";
const Display = () => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const dummy = await fetch("https://fakestoreapi.com/products");
        const result = await dummy.json();
        setData(result);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      <h2>{count}</h2>
      <Myprovider value={{ setCount, data, count }}>
        <IncrementCount />
        <DecrementCounter />
        <Products />
      </Myprovider>
    </div>
  );
};

export default Display;
