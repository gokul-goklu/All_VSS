import { useEffect, useState } from "react";

export default function Useeffect() {
  const [result, setResult] = useState("");
  useEffect(() => {
    console.log("ur right");
  }, [result]);
  return (
    <>
      <div>
        <button onClick={() => setResult("POST")}>POST</button>
        <button onClick={() => setResult("PEOPLE")}>PEOPLE</button>
        <button onClick={() => setResult("PAYMENT")}>PAYMENT</button>
      </div>

      <h1>{result}</h1>
    </>
  );
}
