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
      const { category, ...finalresult } = item;
      //let category = item.category;
      if (!result[category]) {
        result[category] = [finalresult];
      } else {
        result[category].push(finalresult);
      }
      //result[category] = { item, ...result[category] };
      //result[category] = { ...result, item };
    });
    setfinalResult(result);
    console.log(result);
  }, [product]);
  console.log(finalResult);
  // if (result.hasOwnProperty(item.category)) {
  //   result[item.category] = [...item];

  console.log(finalResult);
  return (
    <div>
      <h1>Final Result</h1>
      {Object.keys(finalResult).map((category) => (
        <div key={category}>
          <h3>{category}</h3>
          <ul>
            {finalResult[category].map((item, index) => {
              return <li key={index}>{JSON.stringify(item)}</li>;
            })}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Api;
