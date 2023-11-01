import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h2>Iam home</h2>
      <Link to="/about">About</Link>
    </div>
  );
};

export default Home;
