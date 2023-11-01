import { useContext } from "react";
import { UserContext } from "./contexts";

const Child3 = () => {
  const { uName, check } = useContext(UserContext);

  return (
    <div>
      <h3>Iam from Child 3</h3>
      <h3>{uName}</h3>
      <h3>{check}</h3>
    </div>
  );
};

export default Child3;
