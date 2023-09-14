import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./Signup";
import Home from "./Home";
function Firebase() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="./" element={<Signup />} />
        <Route path="./home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
export default Firebase;
