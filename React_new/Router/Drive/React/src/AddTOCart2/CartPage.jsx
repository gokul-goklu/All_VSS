import { useContext } from "react";
import { contextProduct } from "./Context";
import SingleProductPage from "./SingleProductPage";
const CartPage = () => {
  const { cart } = useContext(contextProduct);

  console.log(cart);
  return (
    <div>
      {cart.map((product) => (
        <SingleProductPage product={product} key={product.id} />
      ))}
    </div>
  );
};

export default CartPage;
