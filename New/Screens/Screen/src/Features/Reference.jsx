import { Link } from "react-router-dom";

const Reference = () => {
  return (
    <div style={{ display: "flex", gap: "15px", justifyContent: "center" }}>
      <Link to="/rating">Rating</Link>
      <Link to="/object">Object</Link>
    </div>
  );
};

export default Reference;
