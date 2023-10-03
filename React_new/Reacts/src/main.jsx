import ReactDOM from "react-dom/client";
//import One from "./Test/one";
import Api from "./Product/Api";
//import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Home from "./Routing/Home";
// import About from "./Routing/About";
// import Setting from "./Routing/Setting";
//import Cart from "./Memo/Cart";
//import SearchFiltermemo from "./Memo/SearchFiltermemo";
//import SearchFilter2 from "./Effect/SearchFilter2";
//import Withoutmemo from "./Memo/withmemo";
//import WithuseFeect from "./Memo/withuseFeect";
//import ParentInput from "./Props/ParentInput";
//import ParentForm from "./Props/FormProp/ParentForm";
//import SearchFilter from "./Effect/SearchFilter";
//import ParentCallback from "./Props/ParentCallback";
//import ParentForm from "./Props/ParentForm";
//import Prevstate from "./Props/Prevstate";
//import ParentCounter from "./Props/ParentCounter";
// import App from './App.jsx'
// import './index.css'

// const myrouter = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />,
//   },
//   {
//     path: "/about",
//     element: <About />,
//   },
//   {
//     path: "/setting",
//     element: <Setting />,
//   },
// ]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    {/* <App />
    <Prevstate /> 
    <ParentCounter />
     <ParentForm />
     <ParentCallback />
       <ParentInput />
        <ParentForm />
         <SearchFilter />
         
         <SearchFilter2 /> 
          <Withoutmemo /> 
           <WithuseFeect />
           <SearchFiltermemo />
             <Cart />
              <One />
               
                 <RouterProvider router={myrouter} />
    */}
    <Api />
  </>
);
