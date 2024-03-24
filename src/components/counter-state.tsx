import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  console.log("Mounted");
  
  return (
    <div className="flex space-x-4 flex-col items-center justify-center">
      Counter: {count}
      <button onClick={() => setCount((prev) => prev + 1)}>
        Count Increase
      </button>
      <button onClick={() => setCount((prev) => prev - 1)}>
        Count Decrease
      </button>
    </div>
  );
}
