import { Link } from "react-router-dom";
const Links = () => {
  return (
    <div>
      <Link to="/" style={{ marginLeft: "20px" }}>
        Home
      </Link>
      <Link to="/about" style={{ marginLeft: "20px" }}>
        About
      </Link>
      <Link to="/book" style={{ marginLeft: "20px" }}>
        Book
      </Link>
      <Link to="/dynamic/:id" style={{ marginLeft: "20px" }}>
        Dynamic
      </Link>
    </div>
  );
};

export default Links;
