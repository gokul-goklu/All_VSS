import "./App.css";
//import ApiCalling from "./Feature/ApiCalling";
import Login from "./Feature/Login";
//import Add from "./Feature/Add";
//import Counter from "./Feature/Counter";
//import Parent1 from "./Feature/ChildParent/Parent1";
//import DisableButton from "./Feature/DisableButton";
//import ShowHide from "./Feature/ShowHide";
//import Form from "./Feature/Form";
//import Parent from "./Feature/Props/Parent";
//import Users from "./Feature/Users";

function App() {
  // const names = ["kohli", "hardik", "rahul", "Dhoni"];

  return (
    <>
      {/* {names.map((item) => {
        return (
          <li id="form" key={item}>
            <ul>{item}</ul>
          </li>
        );
      })} */}
      <Login />
    </>
  );
}

export default App;
