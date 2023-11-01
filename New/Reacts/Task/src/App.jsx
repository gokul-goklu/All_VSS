import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
//import Styled2 from "./Feature/Basic/Styled2";
//import Parent from "./Feature/ContextApi/Parent";
import Header from "./Feature/Routing/Header";
import Parent from "./Feature/ContextApi/Parent";
import Rate2 from "./Feature/Star/Rate2";
import Links from "./Feature/Routing/Links";
//import Form from "./Feature/Basic/Form";
import Async from "./Feature/Basic/Async";
//import Profile from "./Feature/Basic/Profile";

//import Rate2 from "./Feature/Star/Rate2";
// import Form from "./PasswordReset/Form";
//import Rough from "./Feature/Basic/Rough";
// import StateObjects from "./Feature/Basic/Stateobjects";
//import Rating from "./Feature/Star/Rating";
// import { S2 } from "./Feature/Sign/S2";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/context" element={<Parent />} />
          <Route path="/Rating" element={<Rate2 />} />
          <Route path="/AsyncData" element={<Async />} />
        </Routes>
        <Links />
      </BrowserRouter>
    </>
  );
}

export default App;
