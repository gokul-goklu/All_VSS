import { useEffect, useState } from "react";
import "./Shop.css";
const Shop = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const tempData = await fetch("https://fakestoreapi.com/products");
      const currentData = await tempData.json();
      setData(currentData);
    };
    fetchData();
  }, []);
  return (
    <div className="input-container">
      <input type="search" className="input-box" placeholder="Search" />
      <div className="container">
        {data.map((item) => (
          <div key={item.id} className="outer-shop">
            <img src={item.image} />
            <div className="titleprice">
              <h6 className="productTitle">{item.title}</h6>
              <h5>Price: {item.price}</h5>
            </div>
            <button className="btn-style">AddToCart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
//https://fakestoreapi.com/products
