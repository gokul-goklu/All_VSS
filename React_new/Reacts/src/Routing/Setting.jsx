import { Link } from "react-router-dom";
const Setting = () => {
  return (
    <div>
      <h2>Set myself to setting</h2>
      <Link to="/about">About</Link>
      <br />
      <Link to="/">HOME</Link>
      <br />
      <Link to="/clean">Cleanup</Link>
    </div>
  );
};

export default Setting;
