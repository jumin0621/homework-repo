import React, { useState } from "react";

function LoginCheck() {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const isLogin = id !== "" && pw !== "";
  return (
    <div>
      <input
        type="text"
        value={id}
        placeholder="아이디"
        onChange={(e) => setId(e.target.value)}
      />
      <br />
      <input
        type="password"
        value={pw}
        placeholder="패스워드"
        onChange={(e) => setPw(e.target.value)}
      />
      <br />
      <button disabled={!isLogin}>로그인버튼!</button>
    </div>
  );
}

export default LoginCheck;
