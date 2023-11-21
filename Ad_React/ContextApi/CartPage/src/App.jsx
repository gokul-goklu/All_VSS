import Header from "./Features/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Features/Home";
import Cart from "./Features/Cart";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
