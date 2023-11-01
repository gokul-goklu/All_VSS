// SignIn.js
import { useState } from "react";
import "./Signin.css";
const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = (e) => {
    e.preventDefault();

    console.log("Username: ", username);
    console.log("Password: ", password);
  };

  return (
    <form
      className="sign-in-form"
      onSubmit={handleSignIn}
      style={{ textAlign: "left" }}
    >
      <h1 style={{ margin: "0", color: "#333" }}>Sign In</h1>
      <label
        htmlFor="username"
        style={{ display: "block", marginTop: "10px", color: "#555" }}
      >
        Username
      </label>
      <input
        type="text"
        id="username"
        name="username"
        placeholder="Enter your username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        style={{
          width: "100%",
          padding: "10px",
          marginTop: "5px",
          marginBottom: "15px",
          border: "1px solid #ccc",
          borderRadius: "3px",
        }}
        required
      />
      <label
        htmlFor="password"
        style={{ display: "block", marginTop: "10px", color: "#555" }}
      >
        Password
      </label>
      <input
        type="password"
        id="password"
        name="password"
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{
          width: "100%",
          padding: "10px",
          marginTop: "5px",
          marginBottom: "15px",
          border: "1px solid #ccc",
          borderRadius: "3px",
        }}
        required
      />
      <button
        type="submit"
        style={{
          backgroundColor: "#007BFF",
          color: "#fff",
          padding: "10px 20px",
          border: "none",
          borderRadius: "3px",
          cursor: "pointer",
        }}
      >
        Sign In
      </button>
    </form>
  );
};

export default SignIn;
