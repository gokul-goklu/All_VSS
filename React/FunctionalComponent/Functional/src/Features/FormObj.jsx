import { useState } from "react";
const FormObj = () => {
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    gender: "",
  });

  return (
    <div>
      <div className="form-element">
        <p>Name : {profile.name} </p>
        <input type="text" placeholder="Enter name" />
      </div>
      <div className="form-element">
        <p>Email : {profile.email}</p>
        <input type="email" placeholder="Enter email" value={profile.email} />
      </div>
    </div>
  );
};

export default FormObj;
