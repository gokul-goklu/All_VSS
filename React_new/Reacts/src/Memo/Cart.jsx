import { useEffect, useMemo, useState } from "react";

const Cart = () => {
  const [details, setDetails] = useState([
    { id: 1, title: "Apple iPhone 15 Pro Max", price: 1420, quantity: 1 },
    { id: 2, title: "Apple iPad Pro 11 inch", price: 88000, quantity: 1 },
    { id: 3, title: "Parle G (Gold)", price: 10, quantity: 1 },
    { id: 4, title: "oneplus nord", price: 25000, quantity: 5 },
  ]);

  //   useEffect(() => {
  //     const update = [
  //       ...details,

  //       { id: 4, title: "oneplus nord", price: 25000, quantity: 3 },
  //       { id: 5, title: "oneplus nord", price: 250000, quantity: 3 },
  //     ];
  //     setDetails(update);
  //   },[]);

  const [price, setPrice] = useState(0);

  const finalProduct = useMemo(() => {
    const finalPrice = details.reduce((acc, item) => {
      return (acc = acc + item.price * item.quantity);
    }, 0);
    setPrice(finalPrice);
  }, [details]);

  return (
    <div>
      <h2>Total: </h2>
      <h2>{price}</h2>
    </div>
  );
};

export default Cart;
