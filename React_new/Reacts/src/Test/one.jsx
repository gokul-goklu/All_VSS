const one = () => {
  let obj = {
    firstName: "gokul",
    secondName: "gokku",
    address: {
      firstLine: "test1",
      secondLine: "test2",
    },
  };
  const HandleChange = () => {
    obj.address.secondLine = "testing me";
  };
  return (
    <div>
      <button onClick={HandleChange}>Clickme</button>
      <h1>{obj.address.secondLine}</h1>
      <h3>{JSON.stringify(obj)}</h3>
    </div>
  );
};

export default one;
