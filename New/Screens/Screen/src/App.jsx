import Rating from "./Features/Rating/Rating";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Object from "./ReactDoubts/Object";
import Reference from "./Features/Reference";
import Home from "./Features/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Reference />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rating" element={<Rating />} />
          <Route path="/object" element={<Object />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
