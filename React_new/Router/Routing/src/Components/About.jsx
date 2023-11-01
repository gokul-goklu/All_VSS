import { Link } from "react-router-dom";

export default function About() {
  return (
    <div>
      About
      <Link to="/">Home</Link>
      <br />
      <Link to="/Setting">Setting</Link>
    </div>
  );
}
