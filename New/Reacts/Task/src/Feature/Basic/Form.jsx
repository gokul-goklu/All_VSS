import { useState } from "react";

const Form = () => {
  const [profile, setprofile] = useState({
    uName: "",
    place: "",
  });
  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setprofile({
            ...profile,
            uName: e.target.value,
          });
        }}
      />
      <input type="text" />
      <h2>{profile.uName}</h2>
    </div>
  );
};

export default Form;
