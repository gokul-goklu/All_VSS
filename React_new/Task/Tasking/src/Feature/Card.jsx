import { useContext } from "react";
import mycontext from "./CountCard";

export default function Card() {
  const { details } = useContext(mycontext);
  console.log(details);
  return <div></div>;
}
