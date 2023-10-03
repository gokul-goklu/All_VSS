import { useState } from "react";
import ChildForm from "./ChildForm";

export default function ParentForm() {
  const [uName, setName] = useState("");
  const [uCity, setCity] = useState("");
  return (
    <div>
      <ChildForm name={uName} city={uCity} />
      <label>Name: </label>
      <input
        type="text"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <label>city: </label>
      <input
        type="text"
        onChange={(e) => {
          setCity(e.target.value);
        }}
      />
    </div>
  );
}
