import { useState } from "react";

export default function Profile() {
  const [profile, setProfile] = useState({
    uName: "Gokul",
    age: 22,
    city: "Coimbatore",
  });

  const Handlename = (e) => {
    setProfile({
      ...profile,
      uName: e.target.value,
    });
  };
  const HandleCity = (e) => {
    setProfile({
      ...profile,
      city: e.target.value,
    });
  };
  return (
    <div>
      <div>
        <label>Name: </label>
        <input type="text" onChange={Handlename} />
        <label>age: </label>
        <input
          type="number"
          onChange={(e) => {
            setProfile({
              ...profile,
              age: e.target.value,
            });
          }}
        />
        <label>Name: </label>
        <input type="text" onChange={HandleCity} />
      </div>
      <div>
        <h1>{profile.uName}</h1>
        <h1>{profile.age}</h1>
        <h1>{profile.city}</h1>
      </div>
    </div>
  );
}
