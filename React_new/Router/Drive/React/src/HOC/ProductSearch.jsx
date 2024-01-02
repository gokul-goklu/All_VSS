import { useEffect, useState } from "react";

const ProductSearch = () => {
  const [data, setData] = useState([]);
  const [text, setText] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      const tempData = await fetch("https://fakestoreapi.com/products");
      const curData = await tempData.json();
      setData(curData);
    };
    fetchData();
  }, []);
  const filtered = data.filter(({ title }) => {
    return title.toLowerCase().indexOf(text.toLowerCase()) >= 0;
  });
  console.log(filtered);
  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      {filtered.map((item) => (
        <h4 key={item.id}>{item.title}</h4>
      ))}
    </div>
  );
};

export default ProductSearch;
