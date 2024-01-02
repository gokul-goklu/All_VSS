import { useContext } from "react";
import "./Single.css";
import { contextProduct } from "./Context";
const SingleProductPage = ({ product }) => {
  const { cart, setCart } = useContext(contextProduct);
  return (
    <div className="card">
      <img src={product.image} style={{ height: 250 }} />
      <div className="text">
        <span>{product.category}</span>
        <span>price: {product.price}</span>
      </div>
      {cart.includes(product) ? (
        <button
          onClick={() => {
            setCart(cart.filter((item) => item.id != product.id));
          }}
        >
          RemoveFromCart
        </button>
      ) : (
        <button
          onClick={() => {
            setCart([...cart, product]);
          }}
        >
          AddToCart
        </button>
      )}
    </div>
  );
};

export default SingleProductPage;
