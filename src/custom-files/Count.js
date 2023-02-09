import { useState } from "react";
const Count = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <h2>You Clicked {count} Times.</h2>
      <button onClick={() => setCount(count + 1)}>Click Me</button>
    </>
  );
};
export default Count;
