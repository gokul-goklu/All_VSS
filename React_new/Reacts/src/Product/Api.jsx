import { useEffect, useState } from "react";

const Api = () => {
  const [product, setProduct] = useState([]);
  const [finalResult, setfinalResult] = useState({});
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((test) => test.json())
      .then((result) => {
        setProduct(result);
      });
  }, []);

  useEffect(() => {
    let result = {};
    product.forEach((item) => {
      let category = item.category;
      if (!result[category]) {
        result[category] = [];
      }

      result[category] = { item, ...result[category] };
      //result[category] = { ...result, item };
    });
    setfinalResult(result);
  }, [product]);

  // if (result.hasOwnProperty(item.category)) {
  //   result[item.category] = [...item];

  console.log(finalResult);
  return <div>hello</div>;
};

export default Api;
