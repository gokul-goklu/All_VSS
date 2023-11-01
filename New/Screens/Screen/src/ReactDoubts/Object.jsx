import { useState } from "react";

const Object = () => {
  const prof = {
    uname: "gokul",
    place: "Coimbatore",
    skills: {
      fEnd: "react",
      bEnd: "java",
    },
  };
  const [profile, setProfile] = useState(prof);
  return (
    <div>
      <h2>{profile.place}</h2>
      <h2>{profile.skills.fEnd}</h2>
    </div>
  );
};

export default Object;
