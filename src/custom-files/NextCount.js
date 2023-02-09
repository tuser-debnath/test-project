import { useEffect, useState } from "react";
const NextCount = () => {
  const [number, setNumber] = useState(1);
  const [click, setClick] = useState(0);

  useEffect(() => {
    setClick(() => click + 1);
  }, [number]);

  return (
    <>
      <h2>Number: {number}</h2>
      <h2>Click: {click}</h2>
      <button onClick={() => setNumber(number * 5)}>Click Me</button>
    </>
  );
};
export default NextCount;
