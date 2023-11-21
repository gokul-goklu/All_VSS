import { useState } from "react";

const Background = () => {
  const [theme, setTheme] = useState("");
  const colors = ["dark", "white", "red", "yellow"];
  const handleChange = (e) => {
    const coloring = e.target.value;
    setTheme(coloring.toLowerCase());
  };
  return (
    <body>
      <div style={{ backgroundColor: theme, width: "100%", height: "auto" }}>
        <label>Select</label>
        <select onChange={handleChange}>
          <option>color</option>
          {colors.map((item, index) => (
            <option key={index}>{item}</option>
          ))}
        </select>
        <h2>{theme}</h2>
      </div>
    </body>
  );
};

export default Background;
