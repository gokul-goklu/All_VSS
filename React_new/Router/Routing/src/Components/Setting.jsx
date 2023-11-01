import { Link } from "react-router-dom";
export default function Setting() {
  return (
    <div>
      <h3>Setting</h3>
      <Link to="/About">About</Link>
      <br />
      <Link to="/">Home</Link>
    </div>
  );
}
