import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Feature/Routing/Home";
import About from "./Feature/Routing/About";
import Book from "./Feature/Routing/Book";
import Links from "./Feature/Routing/Links";
import Dynamic from "./Feature/Routing/Dynamic";
import Notfound from "./Feature/Routing/Notfound";
function App() {
  return (
    <>
      <BrowserRouter>
        <Links />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/book" element={<Book />} />
          <Route path="/dynamic/:id" element={<Dynamic />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
