import { useState } from "react";
import "./S2.css";

export const S2 = () => {
  const [cuser, setCuser] = useState("");
  const [cpass, setCpass] = useState("");
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const HandleSubmit = (e) => {
    e.preventDefault();
    setCuser(user);
    setCpass(password);
    if (!user && !password) {
      setError("Both username and password is missing");
      return;
    }
    if (!user) {
      setError("Username is missing");
      return;
    }
    if (!password) {
      setError("password is missing");
      return;
    }
  };
  return (
    <div id="Outer">
      <h2 id="header">SignIn</h2>
      <form onSubmit={HandleSubmit} id="Form">
        <div id="user">
          <label>Username: </label>
          <input type="text" onChange={(e) => setUser(e.target.value)} />
        </div>
        <div id="password">
          <label>Password: </label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button>Submit</button>
      </form>

      {/* <h2>{cuser}</h2>
      <h2>{cpass}</h2> */}
      <h2 style={{ color: "red" }}>{error}</h2>
    </div>
  );
};
