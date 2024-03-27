import useCounter from "../hook/useCounter";

export default function Counter() {
  const { count, handelDecrement, handelIncrement } = useCounter();
  return (
    <div className="flex space-x-4 flex-col items-center justify-center">
      Counter: {count}
      <button onClick={handelIncrement}>Count Increase</button>
      <button onClick={handelDecrement}>Count Decrease</button>
    </div>
  );
}
