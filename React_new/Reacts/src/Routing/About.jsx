import { Link } from "react-router-dom";
const About = () => {
  return (
    <div>
      <h2>I think am from About</h2>
      <Link to="/">HOME</Link>
      <br />
      <Link to="/setting">Setting</Link>
      <br />
      <Link to="/clean">Cleanup</Link>
      <br />
      <Link to="/Product">Product</Link>
      <br />
      <Link to="/Product">Product</Link>
    </div>
  );
};

export default About;
