import { useContext, useEffect, useState } from "react";
import { context } from "./Store";

const Products = () => {
  const [filtered, setFiltered] = useState([]);
  const { data, count } = useContext(context);
  useEffect(() => {
    setFiltered(data.filter((item) => item.id <= count));
  }, [count, data]);
  return (
    <div>
      {filtered.map((item) => (
        <h2 key={item.id}>{item.title}</h2>
      ))}
    </div>
  );
};

export default Products;
