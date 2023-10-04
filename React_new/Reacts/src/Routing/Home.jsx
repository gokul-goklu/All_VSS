import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <h2>Iam from Home</h2>
      <Link to="/about">About</Link>
      <br />
      <Link to="/setting">Setting</Link>
      <br />
      <Link to="/clean">Cleanup</Link>
      <br />
      <Link to="/Product">Product</Link>
    </div>
  );
};

export default Home;
