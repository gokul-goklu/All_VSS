import { Child1 } from "./Child1";

const ParentContext = () => {
  const data = "Iam the first child";
  return (
    <div>
      <h1>Iam the Parent</h1>
      <Child1 data={data} />
    </div>
  );
};

export default ParentContext;
