import React, { useState } from "react";

function Mirror() {
  const [text, setText] = useState("");
  const mirror = (e) => {
    setText(e.target.value);
  };
  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={mirror}
        placeholder="입력해봐"
      ></input>
      <p>{text}</p>
    </div>
  );
}

export default Mirror;
