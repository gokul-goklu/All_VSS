import { useState } from "react";

export default function Launch() {
  const [value, setvalue] = useState({
    tunnel: "OFF",
    power: "OFF",
    count: "OFF",
    launch: "OFF",
    tog: "true",
  });
  const changeTunnel = () => {
    setvalue((prevstate) => ({
      ...prevstate,
      power: "ON",
      tunnel: "ON",
    }));
  };
  const ChangePower = () => {
    setvalue((prevstate) => ({
      ...prevstate,
      count: "ON",
    }));
  };
  const ChangeCount = () => {
    setvalue((prevstate) => ({
      ...prevstate,
      launch: "ON",
    }));
  };
  const ChangeLaunch = () => {
    setvalue((prevstate) => ({
      ...prevstate,
      tog: "False",
    }));
  };
  return (
    <div>
      <button onClick={changeTunnel}>Open Tunnel</button>
      <label>{value.tunnel}</label>
      <button onClick={ChangePower}>Enable Power</button>
      <label>{value.power}</label>
      <button onClick={ChangeCount}>Start Countdown</button>
      <label>{value.count}</label>
      <button onClick={ChangeLaunch}>Launch Missile</button>
      <label>
        {value.launch}
        {value.tog == "False" && <h1>Launched Successfully</h1>}
      </label>
    </div>
  );
}
