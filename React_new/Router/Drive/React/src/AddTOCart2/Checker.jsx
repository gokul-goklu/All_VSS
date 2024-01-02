import { useContext } from "react";
import { contextProduct } from "./Context";

const Checker = () => {
  const { cart } = useContext(contextProduct);
  console.log(cart);
  return (
    <div>
      {cart.map((item) => (
        <h2 key={item.id}>{item.title}</h2>
      ))}
    </div>
  );
};

export default Checker;
