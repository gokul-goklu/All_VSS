import { useEffect, useState } from "react";

const Employee = () => {
  const [data, setdata] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const mainData = await fetch("https://fakestoreapi.com/products");
      console.log(mainData);
      const updateData = await mainData.json();

      setdata(updateData);
    };

    fetchData();
  }, []);
  //console.log(data);
  return (
    <div>
      {data.map((item) => {
        return (
          <div key={item.id}>
            <h3>{item.title}</h3>
            <h3>{item.price}</h3>
            <h3>{item.id}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default Employee;
