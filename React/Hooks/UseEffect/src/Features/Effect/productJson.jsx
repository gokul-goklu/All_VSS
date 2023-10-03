import { useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";

const ProductList = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        // Success
        <ClipLoader />;
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        // Error
        setIsLoading(false);
      });
  }, []);

  console.log("Re-Render: ", isLoading);

  return (
    <div>
      <h1>My Product</h1>
      <div>{isLoading ? <p>Product is loading</p> : <p>Showing Data</p>}</div>
    </div>
  );
};

export default ProductList;
