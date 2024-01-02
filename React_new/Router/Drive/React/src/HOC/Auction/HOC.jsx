import { useState } from "react";

const HOC = (NewComp) => {
  function UpdatedHoc() {
    const [money, setMoney] = useState(100);
    const handleChange = () => {
      setMoney((prev) => prev * 2);
    };
    return <NewComp handleChange={handleChange} money={money} />;
  }
  return UpdatedHoc;
};

export default HOC;
