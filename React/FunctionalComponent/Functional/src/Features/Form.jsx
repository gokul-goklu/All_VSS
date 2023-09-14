import { useState } from "react";
export default function Form() {
  const [uname, setuname] = useState("");
  const [umail, setumail] = useState("");

  const handlerSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <form onSubmit={handlerSubmit}>
        <label>Name: </label>
        <input type="text" onChange={(e) => setuname(e.target.value)} />
        <label>Mail:</label>
        <input type="email" onChange={(e) => setumail(e.target.value)} />
        <button>Submit</button>
      </form>
      <div>
        <p> The name is {uname}</p>
        <p> The name is {umail}</p>
      </div>
    </div>
  );
}
