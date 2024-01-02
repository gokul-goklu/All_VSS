import { useEffect, useState } from "react";

const Fetch = () => {
  const [data, setdata] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((result) => result.json())
      .then((updated) => setdata(updated));
  }, []);
  console.log(data);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        gap: "15px",
      }}
    >
      {data.map((item) => {
        return (
          <div
            key={item.id}
            style={{
              backgroundColor: "Blue",
              maxWidth: "250px",
              padding: "20px",
            }}
          >
            <h3> Name: {item.name}</h3>
            <h3>City :{item.address.city}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default Fetch;
