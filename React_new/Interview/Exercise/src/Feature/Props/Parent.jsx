import Child from "./Child";

const Parent = () => {
  const message = "Hello from Parent!";
  return (
    <div>
      <Child message={message} />
    </div>
  );
};

export default Parent;
