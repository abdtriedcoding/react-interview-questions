import { useState } from "react";

export default function useCounter() {
  const [count, setCount] = useState(0);

  const handelIncrement = () => {
    setCount((prev) => prev + 1);
  };

  const handelDecrement = () => {
    setCount((prev) => prev - 1);
  };

  return {
    count,
    handelDecrement,
    handelIncrement,
  };
}
