import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registeration from "./Registeration";
import Home from "./Home";
export default function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={Registeration} />
        <Route path="/Home" element={Home} />
      </Routes>
    </BrowserRouter>
  );
}
