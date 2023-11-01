import { useEffect, useState } from "react";
import "./Callin.css";
import "./spacing.css";
export const Call = () => {
  let mapArray;
  const [data, setData] = useState([]);
  const [mapdata, setMapdata] = useState([]);
  const [all, setAll] = useState([]);
  const [single, setSingle] = useState();
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((result) => result.json())
      .then((target) => setData(target));
  }, []);
  const mapped = () => {
    // mapArray = data.filter((item) => item.id % 2 == 0);

    // setMapdata(mapArray);
    // const sing = data.filter((item) => {
    //   if (item.category == "jewelery") return item;
    // });

    // setSingle(sing);
    // console.log(single);

    mapArray = data.filter((item) => {
      if (item.category.toLowerCase().includes("men")) return item;
    });
    setAll(mapArray);
  };

  return (
    <div className="row">
      {data.map((item) => {
        return (
          <div className="container" key={item.id}>
            <h4>{item.title}</h4>
            <h4>{item.category}</h4>
          </div>
        );
      })}
      <button onClick={mapped}>Btn</button>
      {all.map((item) => {
        return (
          <div className="spacing" key={item.id}>
            <h4>{item.id}</h4>
          </div>
        );
      })}
    </div>
  );
};
