import { useSelector } from "react-redux";

const Cartlayout = () => {
  const data = useSelector((state) => state.cart.data);
  console.log(data);
  return (
    <div>
      <h3>Iam here</h3>
      {data.map((item) => (
        <h2 key={item.id}>{item.title}</h2>
      ))}
    </div>
  );
};

export default Cartlayout;
