import { useEffect, useState } from "react";

const SearchExample = () => {
  const [search, setSearch] = useState("");
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    console.log("Count me : ", counter)
  });

  useEffect(() => {
    console.log("Iam the search : ", search);
  }, [search]);

  return (
    <>
      <div>
        <h1>Effect</h1>
        <input  id="names"  type="text" onChange={(e) => setSearch(e.target.value)} />
        <button onClick={() => setCounter((val) => val + 1)}>Increment</button>
        <button onClick={() => setCounter((val) => val - 1)}>Decrement</button>
      </div>
      <h3>{counter}</h3>
    </>
  );
};
export default SearchExample;
