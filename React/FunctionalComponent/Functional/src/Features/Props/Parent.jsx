import { useState } from "react";
import Child1 from "./Child1";

const ParentUI = () => {
  const [showMessage, setShowMessage] = useState(false);

  const toggleMessage = () => {
    //setShowMessage((val) => !val);
    setShowMessage(!showMessage);
  };
  return (
    <>
      {/* {showMessage && <p>I am visible Now</p>} */}
      {showMessage ? <p>I am visible</p> : <p>I a hidden</p>}
      {/* <button onClick={toggleMessage}>Toggle Message</button> */}

      <Child1 toggle={toggleMessage} />
    </>
  );
};

export default ParentUI;
