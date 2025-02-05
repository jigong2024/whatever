import { useState } from "../hooks/useState";
import { createElement } from "../jsx";

const Counter = () => {
  const [state, setState] = useState(0);

  console.log("스테이트 =>", state);
  return (
    <div>
      <p>현재 카운트: {state}</p>
      <button onClick={() => setState(state + 1)}>증가</button>
    </div>
  );
};

export default Counter;
