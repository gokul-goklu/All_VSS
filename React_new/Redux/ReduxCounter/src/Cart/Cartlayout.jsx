import { useSelector, useDispatch } from "react-redux";
import "./Cart.css";
import { removecart } from "./CartSlice";

const Cartlayout = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.cart.data);
  const count = useSelector((state) => state.cart.quantity);
  //console.log(count);
  const handleChange = (item) => {
    dispatch(removecart(item));
  };
  // console.log(data);
  return (
    <div>
      <h3>Iam here</h3>
      {data.map((item) => (
        <div key={item.id} className="container">
          <img
            className="item-img"
            src={item.image}
            style={{ width: "80px", height: "80px" }}
          />
          <h2 style={{ fontSize: "10px" }}>{item.title}</h2>
          <h2 style={{ fontSize: "10px" }}>Price: {item.price}</h2>
          <h2 style={{ fontSize: "10px" }}>Count:{count}</h2>

          <button onClick={() => handleChange(item)}>RemoveFromCart</button>
        </div>
      ))}
    </div>
  );
};

export default Cartlayout;
