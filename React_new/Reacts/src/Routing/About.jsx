import { Link } from "react-router-dom";
const About = () => {
  return (
    <div>
      <h2>I think am from About</h2>
      <Link to="/">HOME</Link>
      <br />
      <Link to="/setting">Setting</Link>
    </div>
  );
};

export default About;
