import { useState } from "react";
import "./Apistyle.css";
import { addCart } from "../Cart/CartSlice";
import { useDispatch } from "react-redux";
const Apilayout = () => {
  const dispatch = useDispatch();
  const [data, setdata] = useState([]);
  fetch("https://fakestoreapi.com/products")
    .then((datas) => datas.json())
    .then((result) => setdata(result));

  const handleClick = (data) => {
    dispatch(addCart(data));
  };

  return (
    <div className="outer">
      {data.map((item) => (
        <div key={item.id} className="container">
          <img
            className="item-img"
            src={item.image}
            style={{ width: "80px", height: "80px" }}
          />
          <h2 style={{ fontSize: "10px" }}>{item.title}</h2>
          <h2 style={{ fontSize: "10px" }}>Price: {item.price}</h2>

          <button onClick={() => handleClick(item)}>Add to cart</button>
        </div>
      ))}
    </div>
  );
};

export default Apilayout;
