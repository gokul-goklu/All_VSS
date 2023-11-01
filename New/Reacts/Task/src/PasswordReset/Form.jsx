import { useState } from "react";
import Text from "./Text";

const Form = () => {
  let upper = /[A-Z]/g;
  let lower = /[a-z]/g;
  let numberRegex = /[0-9]/g;
  let specialRegex = /[!@#$%^&*()_+}{}]/;
  const [data, setData] = useState("");
  const [requirement, setRequirement] = useState({
    lowerCase: false,
    upperCase: false,
    length: 0,
    number: false,
    special: false,
  });
  const HandleChange = (e) => {
    let common = { ...requirement };

    if (upper.test(e.target.value)) common.upperCase = true;
    else common.upperCase = false;
    if (lower.test(e.target.value)) common.lowerCase = true;
    else common.lowerCase = false;

    if (numberRegex.test(e.target.value)) common.number = true;
    else common.number = false;

    if (specialRegex.test(e.target.value)) common.special = true;
    else common.special = false;

    setRequirement(common);
    setData(e.target.value);
  };
  //console.log(requirement);
  return (
    <div>
      <label>New Password</label>
      <input type="password" onChange={HandleChange} />
      <label>Confirm Password</label>
      <input type="password" />

      <Text requirement={requirement} data={data} />
    </div>
  );
};

export default Form;
