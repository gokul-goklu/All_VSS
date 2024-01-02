import { useRef } from "react";

const areEqual = (prev, cur) => {
  //   if (!prev || prev.length != cur.length) return true;
  //   for (let i = 0; i < prev.length; i++) {
  //     if (prev[i] != cur[i]) return true;
  //   }
  if (prev == cur) return false;
  else return true;
};

const UseCustom = (cb, dep) => {
  const memoised = useRef(null);

  if (!memoised.current || areEqual(memoised.current.dep, dep))
    memoised.current = {
      value: cb(),
      dep,
    };
  return memoised.current.value;
};

export default UseCustom;
