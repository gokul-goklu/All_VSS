import { useContext } from "react";
import UserContext from "./pack";

const Parent = () => {
  const { uName } = useContext(UserContext);
  return (
    <>
      <div>Parent</div>
      <h2>{uName}</h2>
    </>
  );
};

export default Parent;
