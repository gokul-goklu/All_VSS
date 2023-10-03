import { useState } from "react";

export default function Useeffect() {
  const [result, setResult] = useState("");
  return (
    <>
      <div>
        <button onClick={setResult("POST")}>POST</button>
        <button onClick={setResult("POST")}>PEOPLE</button>
        <button onClick={setResult("POST")}>PAYMENT</button>
      </div>

      <h1>{result}</h1>
    </>
  );
}
