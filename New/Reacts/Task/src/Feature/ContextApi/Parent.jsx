import Child2 from "./Child2";
import { UserProvider } from "./contexts";

const Parent = () => {
  const uName = "Gokul here";
  const check = "Iam the checker";

  return (
    <UserProvider value={{ uName, check }}>
      <div>
        <h3>Iam the Parent</h3>
        <Child2 />
      </div>
    </UserProvider>
  );
};

export default Parent;
