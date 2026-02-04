import React from "react";

function ThemeToggle(props) {
  return (
    <button style={props.buttonStyle} onClick={props.handleToggle}>
      {props.isDark ? "라이트 모드" : "다크 모드"}
    </button>
  );
}

export default ThemeToggle;
