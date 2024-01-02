import { useState } from "react";
import "./Cards.css";
import { MyProvider } from "./Store";
import CartDisplay from "./CartDisplay";
const Card = ({ item }) => {
  const [products, setProducts] = useState([]);
  let result = [];
  const handleChange = () => {
    result.push(item);
    setProducts(result);
  };
  //console.log(products);
  return (
    <div className="outer">
      <img src={item.image} style={{ width: 60, height: 60 }} />
      <h4>{item.title}</h4>
      <h4>{item.price}</h4>
      <button onClick={handleChange}>add</button>

      <MyProvider value={{ products }}>
        <CartDisplay />
      </MyProvider>
    </div>
  );
};

export default Card;
