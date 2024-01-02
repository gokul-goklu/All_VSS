import HOC from "./HOC";

const Person1 = ({ handleChange, money }) => {
  return (
    <div>
      <h4
        style={{ display: "inline-block", marginRight: "10px" }}
      >{`Gokul is offering ${money}`}</h4>
      <button style={{ marginRight: "15" }} onClick={handleChange}>
        Increase
      </button>
    </div>
  );
};

export default HOC(Person1);
