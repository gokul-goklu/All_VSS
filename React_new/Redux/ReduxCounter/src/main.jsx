import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import store from "./Redux/Store.jsx";
//import CounterLayout from "./ReduxCount/CounterLayout.jsx";
//import CalcLayout from "./ReduxCalc/CalcLayout.jsx";
// import Apilayout from "./ReduxApi/Apilayout.jsx";
// import Cartlayout from "./Cart/Cartlayout.jsx";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
