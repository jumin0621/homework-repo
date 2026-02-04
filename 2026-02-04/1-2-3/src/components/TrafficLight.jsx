import React, { useState } from "react";

function TrafficLight() {
  const [trafficColor, setTrafficColor] = useState("red");
  const handleTraffic = () => {
    switch (trafficColor) {
      case "red":
        setTrafficColor("yellow");
        break;
      case "yellow":
        setTrafficColor("green");
        break;
      default:
        setTrafficColor("red");
        break;
    }
  };
  return (
    <div>
      <div
        style={{
          width: "100px",
          height: "100px",
          backgroundColor: trafficColor,
        }}
      />
      <button onClick={handleTraffic}>신호등 색깔 바뀌나?</button>
    </div>
  );
}

export default TrafficLight;
