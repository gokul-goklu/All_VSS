import { useEffect, useState } from "react";

const ApiCalling = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch("https://fakestoreapi.com/products");
        const result = await data.json();
        setData(result);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      <h2>Here is the data</h2>
      {data.map((item) => {
        return <h2 key={item.id}>{item.title}</h2>;
      })}
    </div>
  );
};

export default ApiCalling;
