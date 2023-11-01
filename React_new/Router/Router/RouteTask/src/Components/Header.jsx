import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <h2>Iam the header</h2>
      <Link to="/home">Home</Link>
      <Link to="/about">About</Link>
    </div>
  );
};

export default Header;
