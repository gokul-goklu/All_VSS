import { useState } from "react";

export default function Profileobj2() {
  const [profile, setProfile] = useState({
    uName: "John",
    city: "Welligton",
    age: 23,
  });

  //Best way
  const HandleName = (e) => {
    setProfile((prevstate) => ({
      ...prevstate,
      uName: e.target.value,
    }));
  };

  //Another way
  const HandleCity = (e) => {
    setProfile({
      ...profile,
      city: e.target.value,
    });
  };
  return (
    <div>
      <div>
        <h1>{profile.uName}</h1>
        <h1>{profile.city}</h1>
        <h1>{profile.age}</h1>
      </div>
      <div>
        <label>Name: </label>
        <input type="text" onChange={HandleName} />
        <label>number: </label>
        <input
          type="text"
          //Inside the onchange event
          onChange={(e) => {
            setProfile((prevstate) => ({
              ...prevstate,
              age: e.target.value,
            }));
          }}
        />
        <label>City: </label>
        <input type="text" onChange={HandleCity} />
      </div>
    </div>
  );
}
