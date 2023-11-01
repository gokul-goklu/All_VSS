import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Setting from "./Components/Setting";

function App() {
  const myroute = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/setting",
      element: <Setting />,
    },
  ]);
  return (
    <>
      <RouterProvider router={myroute}></RouterProvider>
    </>
  );
}

export default App;
