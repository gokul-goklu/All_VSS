import HOC from "./HOC";

const Person2 = ({ handleChange, money }) => {
  return (
    <div>
      <h4
        style={{ display: "inline-block", marginRight: "10px" }}
      >{`Rahul is offering ${money}`}</h4>
      <button onClick={handleChange}>Increase</button>
    </div>
  );
};

export default HOC(Person2);
