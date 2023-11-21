import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Apilayout from "./ReduxApi/Apilayout";
import Cartlayout from "./Cart/Cartlayout";

function App() {
  return (
    <BrowserRouter>
      <Link to="/cart">cart</Link>
      <Link to="/">Home</Link>
      <Routes>
        <Route path="/" element={<Apilayout />} />
        <Route path="/cart" element={<Cartlayout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
