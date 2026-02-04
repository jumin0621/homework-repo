import { useState } from "react";
function Toggle() {
  const [isOn, setIsOn] = useState(false);
  const onOff = () => {
    setIsOn(!isOn);
  };
  return (
    <div>
      <p>{isOn ? "ON" : "OFF"}</p>
      <button onClick={onOff}>토글</button>
    </div>
  );
}

export default Toggle;
