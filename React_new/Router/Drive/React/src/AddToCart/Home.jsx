import { useEffect, useState } from "react";
import Card from "./Card";
//import { Link } from "react-router-dom";
//import { Link } from "react-router-dom";

const Home = () => {
  const [data, setaData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const temp = await fetch("https://fakestoreapi.com/products");
      const curr = await temp.json();
      setaData(curr);
      //console.log(curr);
    };
    fetchData();
  }, []);

  return (
    <div className="body-outer">
      {/* <Link to="/cart">Carting</Link> */}
      {data.map((item) => {
        return <Card key={item.id} item={item} />;
      })}
    </div>
  );
};

export default Home;
