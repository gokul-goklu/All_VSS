import { useState } from "react";
import ChildForm2 from "./ChildForm2";

export default function ParentForm() {
  const [fName, setfname] = useState("");
  const [lName, setlname] = useState("");
  const handleForm = (fnam, lnam) => {
    setfname(fnam);
    setlname(lnam);
  };
  return (
    <div>
      <ChildForm2 handleForm={handleForm} />
      <h1>first: {fName}</h1>
      <h1>last: {lName}</h1>
      alert(fName)
    </div>
  );
}
