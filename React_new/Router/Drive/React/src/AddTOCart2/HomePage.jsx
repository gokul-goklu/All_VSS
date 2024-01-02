import { useEffect, useState } from "react";
import SingleProductPage from "./SingleProductPage";
import "./Single.css";
const HomePage = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const tempData = await fetch("https://fakestoreapi.com/products");
      const newData = await tempData.json();
      setData(newData);
    };
    fetchData();
  }, []);

  return (
    <div className="outer-container">
      {data.map((product) => (
        <SingleProductPage product={product} key={product.id} />
      ))}
    </div>
  );
};

export default HomePage;
