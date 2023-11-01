import { Link } from "react-router-dom";

const Links = () => {
  return (
    <div>
      <Link to="/">Back</Link>
      <br />
      <Link to="/context">context</Link>
      <br />
      <Link to="/rating">Rate</Link>
      <br />
      <Link to="/AsyncData">ProductTitle</Link>
    </div>
  );
};

export default Links;
