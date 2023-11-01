import { useEffect, useState, createContext } from "react";
import Card from "./Card";
import App from "../App";

const myContext = createContext();
export default function CountCard() {
  const [count, setCount] = useState(0);
  const [details, setDetails] = useState();

  useEffect(() => {
    async function HandleDetail() {
      await fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((adder) => setDetails(adder));
    }
    HandleDetail();
  }, [count]);
  //console.log(details);
  return (
    <myContext.Provider value={details}>
      <div>
        <button onClick={() => setCount(count + 1)}>Count</button>
        <h3>{count}</h3>
      </div>
      <div>
        <Card />
        <App details={details} />
      </div>
    </myContext.Provider>
  );
}
