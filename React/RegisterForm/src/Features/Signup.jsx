//import React from "react";
import { Database } from "./FirebaseConfig";
import { MailPassword } from "firebase/auth";
const Signup = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const eMail = e.target.emaill.value;
    const password = e.target.pass.value;
    MailPassword(Database, eMail, password).then((data) => {
      console.log(data, "authData");
    });
  };
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <label>Mail: </label>
      <input name="emaill" type="email" placeholder="Mail" />
      <label>password: </label>
      <input name="pass" type="password" placeholder="Password" />
      <button>Submit</button>
    </form>
  );
};
export default Signup;
