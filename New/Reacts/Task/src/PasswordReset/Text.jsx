const Text = ({ requirement, data }) => {
  console.log(requirement);
  return (
    <div>
      <h4 style={{ color: requirement.lowerCase ? "green" : "red" }}>
        Lower Case
      </h4>
      <h4 style={{ color: requirement.upperCase ? "green" : "red" }}>
        Uppercase
      </h4>
      <h4 style={{ color: requirement.special ? "green" : "red" }}>
        Special Character
      </h4>
      <h4 style={{ color: requirement.number ? "green" : "red" }}>Number</h4>
      <h4 style={{ color: data.length > 8 ? "green" : "red" }}>length</h4>

      <p>Data: {data}</p>
    </div>
  );
};

export default Text;
