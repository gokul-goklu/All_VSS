import { useEffect } from "react";

const LifeCycle = ({ number }) => {
  useEffect(() => {
    console.log("updated");
    return () => console.log("removed");
  }, [number]);
  return (
    <div>
      <h2>{number}</h2>
    </div>
  );
};

export default LifeCycle;
