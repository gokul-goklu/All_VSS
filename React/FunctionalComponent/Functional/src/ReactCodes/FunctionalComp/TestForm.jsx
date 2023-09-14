import { useState } from "react";

export default function FunctionCounter() {
  const [family, setfamily] = useState({
    firstName: "",
    lastName: "",
  });
  const HandleFirstname = (e) => {
    setfamily((prevstate) => ({
      ...prevstate,
      firstName: e.target.value,
    }));
  };

  const HandleLastName = (e) => {
    setfamily((prevstate) => ({
      ...prevstate,
      lastName: e.target.value,
    }));
  };
  return (
    <div>
      <input type="text" onChange={HandleFirstname} />
      <input type="text" onChange={HandleLastName} />

      <h1>
        Welcome {family.firstName} to the {family.lastName} family
      </h1>
    </div>
  );
}
