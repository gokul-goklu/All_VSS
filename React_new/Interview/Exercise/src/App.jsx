import "./App.css";
//import Form from "./Feature/Form";
import Parent from "./Feature/Props/Parent";

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
      <Parent />
    </>
  );
}

export default App;
