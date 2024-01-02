import HOC from "./HOC";

const Person3 = ({ handleChange, money }) => {
  return (
    <div>
      <h4
        style={{ display: "inline-block", marginRight: "10px" }}
      >{`Virat is offering ${money}`}</h4>
      <button onClick={handleChange}>Increase</button>
    </div>
  );
};

export default HOC(Person3);
