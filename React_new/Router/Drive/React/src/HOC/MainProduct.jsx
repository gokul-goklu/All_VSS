import { useEffect, useState } from "react";
import { ClipLoader } from "react-spinners/ClipLoader";

const MainProduct = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const product = await fetch("https://fakestoreapi.com/products");
      const result = await product.json();
      setData(result);
      setIsLoading(true);
    };
    fetchData();
  }, []);

  return (
    <div>
      {isLoading ? (
        data.map((item) => <h2 key={item.id}>{item.title}</h2>)
      ) : (
        <ClipLoader />
      )}
    </div>
  );
};

export default MainProduct;
