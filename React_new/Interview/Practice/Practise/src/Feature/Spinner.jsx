import { useEffect, useState } from "react";
import { RingLoader } from "react-spinners";
const Spinner = () => {
  const [data, setData] = useState([]);
  const [flag, setFlag] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const record = await fetch("https://fakestoreapi.com/products");
        const finalRecord = await record.json();
        setData(finalRecord);
        setFlag(true);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      {flag ? (
        data.map((item) => {
          return <h2 key={item.id}>{item.title}</h2>;
        })
      ) : (
        <RingLoader />
      )}
    </div>
  );
};

export default Spinner;
