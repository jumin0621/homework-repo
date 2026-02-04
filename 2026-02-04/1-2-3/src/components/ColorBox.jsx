import React, { useState } from "react";

function ColorBox() {
  const colors = ["red", "blue", "green"];
  const [color, setColor] = useState(0);
  const handleColor = () => {
    setColor((prev) => (prev + 1) % colors.length);
  };
  return (
    <div>
      <div
        style={{
          width: "200px",
          height: "200px",
          backgroundColor: colors[color],
        }}
      />
      <button onClick={handleColor}>색깔 바뀌나?</button>
    </div>
  );
}

export default ColorBox;
