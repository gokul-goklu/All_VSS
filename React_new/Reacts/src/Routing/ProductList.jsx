import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ProductList = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((prod) => prod.json())
      .then((result) => setData(result));
  }, []);
  console.log(data);
  return (
    <div>
      {data.map((item) => {
        return (
          <div key={item.id}>
            <Link to="">{item.title}</Link>
          </div>
        );
      })}
      <Link to="/">HOME</Link>
      <br />
      <Link to="/setting">Setting</Link>
      <br />
      <Link to="/about">about</Link>
      <br />
      <Link to="/clean">Cleanup</Link>
    </div>
  );
};

export default ProductList;
