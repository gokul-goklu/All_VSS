import { Link } from "react-router-dom";
import "./NavBar.css";
const Navbar = () => {
  return (
    <div>
      <nav>
        <ul className="outer-link">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
