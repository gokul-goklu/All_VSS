import { useState } from "react";
const FormFunctional = () => {
  const [uname, setuname] = useState("");
  const [umail, setumail] = useState("");
  const formSubmit = (e) => {
    e.preventDefault();
  };
  //   const nameChange = (e) => {
  //     setuname(e.target.value);
  //   };
  const mailChange = (e) => {
    setumail(e.target.value);
  };
  return (
    <div>
      <form onSubmit={formSubmit}>
        <div>
          <label>Name: </label>
          <input
            type="text"
            placeholder="Name"
            onChange={(e) => {
              setuname(e.target.value);
            }}
          />
        </div>
        <div>
          <label>Mail: </label>
          <input type="email" placeholder="Mail" onChange={mailChange} />
        </div>
        <div>
          <button>Submit</button>
        </div>
      </form>
      <div>
        <p>Name: {uname}</p>
        <p>Mail: {umail}</p>
      </div>
    </div>
  );
};
export default FormFunctional;
