import { Link } from "react-router-dom";
import "./Header.css";
export default function Header() {
  return (
    <div>
      <h3>Header</h3>
      <div className="outer">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/help">Help</Link>
      </div>
    </div>
  );
}
