import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  };
  const handleClick2 = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <p>현재카운트 : {count}</p>
      <button onClick={handleClick}>+1</button>
      <button onClick={handleClick2}>-1</button>
    </div>
  );
}

export default Counter;
