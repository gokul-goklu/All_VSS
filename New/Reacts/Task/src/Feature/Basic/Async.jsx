import { useEffect, useState } from "react";

const Async = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const handleData = () => {
      fetch("https://fakestoreapi.com/products")
        .then((datas) => datas.json())
        .then((result) => setData(result));
    };
    handleData();
  }, []);
  return (
    <div>
      {data.map((item) => {
        return <h3 key={item.id}>{item.title}</h3>;
      })}
    </div>
  );
};

export default Async;
