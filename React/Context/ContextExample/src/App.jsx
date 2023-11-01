import { UserProvider } from "./Feature/pack";

import "./App.css";
import Parent from "./Feature/Parent";

function App() {
  const uName = "gokul";
  return (
    <>
      <UserProvider value={{ uName }}>
        <Parent />
      </UserProvider>
    </>
  );
}

export default App;
