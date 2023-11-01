import { useState } from "react";

const Profile = () => {
  const [profile, setProfile] = useState({
    uname: "",
    password: "",
  });
  const handleName = (e) => {
    setProfile((prev) => ({
      ...prev,
      ["uname"]: e.target.value,
    }));
  };
  return (
    <div>
      <input type="text" onChange={handleName} />
      {<h2>{profile.uname}</h2>}
    </div>
  );
};

export default Profile;
