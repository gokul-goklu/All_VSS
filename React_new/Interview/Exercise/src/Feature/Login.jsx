import { useEffect, useState } from "react";

const Login = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState([]);
  const [flag, setFlag] = useState(false);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((item) => item.json())
      .then((result) => setData(result));
  }, []);
  const handleChange = () => {
    data.map((item) => {
      if (user == item.title && password == item.price) setFlag(true);
    });
  };
  return (
    <div>
      <label>User</label>
      <input
        type="text"
        onChange={(e) => {
          const mediate = e.target.value;
          setUser(mediate);
        }}
      />
      <label>Password</label>
      <input
        type="password"
        onChange={(e) => {
          const mediate = e.target.value;
          setPassword(mediate);
        }}
      />
      <button onClick={handleChange}>Login</button>
      {flag ? <h2>Login Success</h2> : <h2></h2>}
    </div>
  );
};

export default Login;
