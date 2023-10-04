import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export const Cleanup = () => {
  const [num, setNum] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handleChange = (e) => {
      setNum({ x: e.clientX, y: e.clientY });
    };
    console.log("mounting");
    window.addEventListener("mousemove", handleChange);
    return () => {
      console.log("unmount");
      window.removeEventListener("mousemove", handleChange);
    };
  }, []);
  console.log(num.x, num.y);
  return (
    <div>
      <h3>Iam responsible for cleaning up</h3>

      <Link to="/">HOME</Link>
      <br />
      <Link to="/setting">Setting</Link>
      <br />
      <Link to="/about">about</Link>
      <h3>{num.x}</h3>
      <h3>{num.y}</h3>
      <br />
      <Link to="/Product">Product</Link>
    </div>
  );
};
